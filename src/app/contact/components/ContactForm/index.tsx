'use client';

import React, { useState } from 'react';
import { useLocale } from '@/app/context/LocaleContext';

interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface IApiResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const { t } = useLocale();
  const f = t.contactForm;

  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string | null } = {};
    if (!formData.name) newErrors.name = f.validation.name;
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = f.validation.email;
    if (!formData.subject) newErrors.subject = f.validation.subject;
    if (formData.message.length < 10)
      newErrors.message = f.validation.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: IApiResponse = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full p-3 border border-border bg-bg-elevated text-text-primary placeholder-text-muted font-sans text-body rounded-sm focus:outline-none focus:border-accent transition disabled:opacity-60 disabled:cursor-not-allowed';

  const labelClass =
    'block font-mono text-mono-label uppercase text-text-muted mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          {f.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="mt-1 font-mono text-mono-label uppercase text-accent">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {f.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 font-mono text-mono-label uppercase text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          {f.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <p className="mt-1 font-mono text-mono-label uppercase text-accent">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <p className="mt-1 font-mono text-mono-label uppercase text-accent">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 px-6 font-serif italic text-[20px] border-2 border-accent bg-bg-elevated text-text-primary hover:bg-accent hover:text-paper transition rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? f.submitting : f.submit}
        <span className="font-mono ml-2">→</span>
      </button>

      {status === 'success' && (
        <p className="text-center font-mono text-small uppercase tracking-mono text-accent">
          {f.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-center font-mono text-small uppercase tracking-mono text-accent">
          {f.error}
        </p>
      )}
    </form>
  );
}
