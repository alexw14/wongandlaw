'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaWeixin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage: React.FC = () => {
  const t = useTranslations('ContactPage');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@wongandlaw.com?subject=${encodeURIComponent(
      formData.subject || t('formSubjectDefault')
    )}&body=${encodeURIComponent(
      `${t('formNameLabel')}: ${formData.name}\n${t('formEmailLabel')}: ${formData.email}\n${t('formPhoneLabel')}: ${formData.phone}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.section
        className="mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
          {t('title')}
        </h1>
        <div className="mx-auto w-16 h-1 bg-orange-500 rounded-full mb-6" />
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('officeInfoTitle')}
          </h2>

          {/* LA Office */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-orange-500 mb-3">
              {t('losAngelesOffice')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0" size={18} />
                <span>
                  1360 Valley Vista Drive, Suite 136
                  <br />
                  Diamond Bar, CA 91765
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-orange-500 shrink-0" size={18} />
                <a href="tel:6264477788" className="hover:text-orange-500 transition-colors">
                  (626) 447-7788
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaFax className="text-orange-500 shrink-0" size={18} />
                <span>(626) 447-7783</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 shrink-0" size={18} />
                <a href="mailto:info@wongandlaw.com" className="hover:text-orange-500 transition-colors">
                  info@wongandlaw.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWeixin className="text-orange-500 shrink-0" size={18} />
                <span>{t('wechatLabel')}: Santony168</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-orange-500 mb-3">
              {t('officeHoursTitle')}
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>{t('officeHoursWeekdays')}</li>
              <li>{t('officeHoursWeekends')}</li>
            </ul>
          </div>

          {/* Map link */}
          <a
            href="https://maps.google.com/?q=1360+Valley+Vista+Drive+Suite+136+Diamond+Bar+CA+91765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            {t('viewOnMap')}
          </a>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('formTitle')}
          </h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <p className="text-green-700 font-semibold text-lg">
                {t('formSuccessMessage')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formNameLabel')} <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t('formNamePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formEmailLabel')} <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t('formEmailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formPhoneLabel')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t('formPhonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formSubjectLabel')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t('formSubjectPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('formMessageLabel')} <span className="text-orange-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  placeholder={t('formMessagePlaceholder')}
                />
              </div>

              <p className="text-xs text-gray-500">{t('formDisclaimer')}</p>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                {t('formSubmitButton')}
              </button>
            </form>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
