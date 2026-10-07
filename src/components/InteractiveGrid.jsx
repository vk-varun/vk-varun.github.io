import { useEffect, useRef } from 'react';
import styles from './InteractiveGrid.module.css';

/**
 * InteractiveGrid
 * Renders a subtle, luxury 3D isometric/tilted tile grid in the background.
 * When the mouse hovers or moves across the hero, the tiles in proximity
 * smoothly tilt, elevate in 3D perspective, and display a gentle ambient highlight.
 */
export default function InteractiveGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Grid configuration
    const tileSize = 44; // size in px of each tile
    const gap = 6; // gap between tiles
    const step = tileSize + gap;
    const maxInfluenceRadius = 140; // cursor influence radius
    const maxLift = 9; // maximum elevation in z/3d perspective
    const maxRotation = 0.28; // radians tilt on hover

    // Mouse tracking
    let targetMouse = { x: -1000, y: -1000, active: false };
    let currentMouse = { x: -1000, y: -1000 };

    // Tile state representation for organic smooth return physics
    // Map with key `${col}_${row}` -> { currentLift, currentRotX, currentRotY }
    const tilesState = new Map();

    const handleResize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
      targetMouse.active = true;
    };

    const handleMouseLeave = () => {
      targetMouse.active = false;
    };

    // Attach to parent element so interaction works across the entire hero section
    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    const render = () => {
      // Smooth interpolation for cursor coordinates
      if (targetMouse.active) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.18;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.18;
      } else {
        // Fade out influence smoothly by drifting far away
        currentMouse.x += (-1000 - currentMouse.x) * 0.08;
        currentMouse.y += (-1000 - currentMouse.y) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / step) + 1;
      const rows = Math.ceil(height / step) + 1;

      // Color tokens matching the design system:
      // Default tile border & fill: very subtle warm ivory/sand
      // Lifted tile: elevated with a soft warm 3D drop shadow and subtle highlight
      const baseBorder = 'rgba(216, 207, 188, 0.35)';
      const baseFill = 'rgba(253, 250, 243, 0.45)';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const centerX = c * step + tileSize / 2;
          const centerY = r * step + tileSize / 2;

          const dx = currentMouse.x - centerX;
          const dy = currentMouse.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Calculate hover effect intensity based on distance
          let targetLift = 0;
          let targetRotX = 0;
          let targetRotY = 0;

          if (dist < maxInfluenceRadius) {
            const factor = Math.cos((dist / maxInfluenceRadius) * (Math.PI / 2)); // Smooth cosine falloff
            const power = Math.pow(factor, 1.8);
            targetLift = power * maxLift;

            // Tilt toward/away from the cursor for realistic tactile 3D bending
            targetRotX = (-dy / maxInfluenceRadius) * maxRotation * power;
            targetRotY = (dx / maxInfluenceRadius) * maxRotation * power;
          }

          const tileKey = `${c}_${r}`;
          let state = tilesState.get(tileKey);
          if (!state) {
            state = { lift: 0, rotX: 0, rotY: 0 };
            tilesState.set(tileKey, state);
          }

          // Smooth spring-like lerp to target
          state.lift += (targetLift - state.lift) * 0.15;
          state.rotX += (targetRotX - state.rotX) * 0.15;
          state.rotY += (targetRotY - state.rotY) * 0.15;

          const { lift, rotX, rotY } = state;
          const isInteracting = lift > 0.1 || Math.abs(rotX) > 0.005 || Math.abs(rotY) > 0.005;

          ctx.save();
          // Translate to tile center
          ctx.translate(centerX, centerY);

          if (isInteracting) {
            // Apply 3D simulated perspective displacement:
            // Lift moves tile slightly upward (-Y) and scales it up slightly
            const scale = 1 + (lift / maxLift) * 0.08;
            ctx.translate(rotY * 18, -lift + rotX * 18);
            ctx.scale(scale, scale);

            // Subtle drop shadow for elevated tiles
            ctx.shadowColor = 'rgba(17, 18, 13, ' + (0.04 + (lift / maxLift) * 0.1).toFixed(3) + ')';
            ctx.shadowBlur = 4 + lift * 1.5;
            ctx.shadowOffsetY = 2 + lift * 0.8;
            ctx.shadowOffsetX = 0;

            // Elevated tile fill: brighter warm tone with subtle accent
            const highlightRatio = lift / maxLift;
            ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + highlightRatio * 0.28})`;
            ctx.strokeStyle = `rgba(184, 171, 146, ${0.4 + highlightRatio * 0.45})`;
            ctx.lineWidth = 1 + highlightRatio * 0.5;
          } else {
            ctx.fillStyle = baseFill;
            ctx.strokeStyle = baseBorder;
            ctx.lineWidth = 0.8;
          }

          // Draw rounded rectangle tile
          const halfSize = tileSize / 2;
          const radius = 6;
          ctx.beginPath();
          ctx.roundRect(-halfSize, -halfSize, tileSize, tileSize, radius);
          ctx.fill();
          ctx.stroke();

          // Subtle center dot accent on each tile for high-tech architectural precision
          ctx.beginPath();
          ctx.arc(0, 0, isInteracting ? 1.4 : 1, 0, Math.PI * 2);
          ctx.fillStyle = isInteracting
            ? 'rgba(17, 18, 13, 0.45)'
            : 'rgba(216, 207, 188, 0.55)';
          ctx.fill();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.gridCanvas} aria-hidden="true" />;
}
