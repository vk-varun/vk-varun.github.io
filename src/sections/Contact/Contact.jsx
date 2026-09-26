import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '../../animations/animations';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'varun.codes@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2400);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-subtitle">
            Whether you have a specific project inquiry, an architectural challenge, or want to
            discuss engineering leadership, my inbox is open.
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            className={styles.infoCol}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div>
              <h3 className={styles.infoTitle}>Direct Contact & Location</h3>
              <p className={styles.infoDesc}>
                I typically respond within 24 to 48 hours. Feel free to reach out directly via
                email or connect on professional networks.
              </p>
            </div>

            <div className={styles.contactCardsList}>
              {/* Email Card with 1-Click Copy */}
              <div className={styles.contactMethodCard}>
                <div className={styles.methodLeft}>
                  <div className={styles.methodIcon}>
                    <i className="ri-mail-line" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className={styles.methodLabel}>Email</span>
                    <p className={styles.methodValue}>{emailAddress}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`${styles.copyBtn} ${copied ? styles.copiedBadge : ''}`}
                  aria-label="Copy email address to clipboard"
                >
                  <i
                    className={copied ? 'ri-check-line' : 'ri-file-copy-line'}
                    aria-hidden="true"
                  ></i>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className={styles.contactMethodCard}>
                <div className={styles.methodLeft}>
                  <div className={styles.methodIcon}>
                    <i className="ri-map-pin-2-line" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className={styles.methodLabel}>Location</span>
                    <p className={styles.methodValue}>San Francisco, CA (PST / UTC-7)</p>
                  </div>
                </div>
                <span className={styles.methodLabel} style={{ fontWeight: 600 }}>
                  Remote Friendly
                </span>
              </div>

              {/* Availability Status */}
              <div className={styles.contactMethodCard}>
                <div className={styles.methodLeft}>
                  <div className={styles.methodIcon}>
                    <i className="ri-time-line" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className={styles.methodLabel}>Availability</span>
                    <p className={styles.methodValue}>Q3/Q4 Projects & Advisory</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.8125rem', color: '#10b981', fontWeight: 600 }}>
                  ● Active
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className={styles.socialRow}>
              <span className={styles.socialRowTitle}>Follow & Connect</span>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/vk-varun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="GitHub Profile"
                >
                  <i className="ri-github-line" aria-hidden="true"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn Profile"
                >
                  <i className="ri-linkedin-box-line" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Twitter / X Profile"
                >
                  <i className="ri-twitter-x-line" aria-hidden="true"></i>
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Discord Profile"
                >
                  <i className="ri-discord-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className={styles.formCard}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.successMessage}
                >
                  <div className={styles.successIcon}>
                    <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  </div>
                  <h4 className={styles.successTitle}>Message Dispatched</h4>
                  <p className={styles.successDesc}>
                    Thank you for reaching out! Your message has been received. I will review your
                    inquiry and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className={styles.resetBtn}
                  >
                    <i className="ri-refresh-line" aria-hidden="true"></i>
                    <span>Send another message</span>
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className={styles.formGrid}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elena Rostova"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Engineering Consulting"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product, timeline, or engineering goals..."
                      className={styles.textarea}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line ri-spin" aria-hidden="true"></i>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="ri-send-plane-fill" aria-hidden="true"></i>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
