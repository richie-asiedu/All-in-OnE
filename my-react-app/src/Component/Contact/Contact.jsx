import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { darkMode } = useTheme();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const serviceId = 'service_3nccgue';
  const templateId = 'template_uk6utdr';
  const publicKey = 'PFQTerT2oaShqlLY_';

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, [publicKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    try {
      console.log('Form data being sent:', {
        service_id: serviceId,
        template_id: templateId,
        form: Object.fromEntries(new FormData(form.current))
      });

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        setSubmitStatus({
          message: 'Message sent successfully! We will get back to you soon.',
          isError: false
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        message: `Failed to send message: ${error.message || 'Unknown error'}`,
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact-container" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="subtitle">We'd Love to Hear From You</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <p>(+233) 532-700-248</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>info@sherrybeauty.com</p>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Accra, Ghana<br /> Labadi</p>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="to_name" value="Sherry's Beauty Salon" />
          <input type="hidden" name="to_email" value="info@sherrybeauty.com" />
          <div className="form-group">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="reply_to" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
            />
          </div>
          <div className="form-group">
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select Service</option>
              <option value="haircut">Haircut</option>
              <option value="coloring">Hair Coloring</option>
              <option value="styling">Hair Styling</option>
              <option value="treatment">Hair Treatment</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>
          </div>
          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.isError ? 'error' : 'success'}`}>
              {submitStatus.message}
            </div>
          )}
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
