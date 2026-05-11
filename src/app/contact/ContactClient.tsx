'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { CALENDLY_URL } from '@/app/components/Footer';
import { useLocale } from '@/app/context/LocaleContext';

export default function ContactClient() {
  const { t } = useLocale();

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>// página · contacto</span>
          <span>Issue <span className="text-accent">02</span></span>
        </div>

        <header className="mb-12">
          <h1 className="font-serif text-h1 sm:text-display lg:text-[80px] leading-none text-text-primary">
            {t.contactPage.title}
          </h1>
        </header>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-12 border border-accent bg-accent-tint rounded-md p-6 sm:p-8 hover:bg-accent hover:text-paper transition-all"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-md bg-accent text-paper flex-shrink-0">
                {FaCalendarAlt({ size: 20 })}
              </div>
              <div>
                <span className="font-mono text-mono-label uppercase text-accent group-hover:text-paper transition">
                  // discovery call
                </span>
                <h2 className="font-serif text-[24px] sm:text-[30px] leading-tight text-text-primary group-hover:text-paper transition mt-1">
                  {t.contactPage.calendlyTitle}
                </h2>
                <p className="font-sans text-body text-text-secondary group-hover:text-paper/90 transition mt-2 max-w-[60ch]">
                  {t.contactPage.calendlyDescription}
                </p>
              </div>
            </div>
            <span className="font-serif italic text-[20px] border-b-2 border-accent group-hover:border-paper pb-1 text-text-primary group-hover:text-paper transition flex-shrink-0">
              {t.contactPage.calendlyCta}
              <span className="font-mono ml-2">→</span>
            </span>
          </div>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <div className="mb-6">
              <span className="font-mono text-mono-label uppercase text-text-muted">
                // formulario
              </span>
              <h2 className="font-serif text-[28px] lg:text-[34px] leading-tight text-text-primary mt-2">
                {t.contactPage.formTitle}
              </h2>
            </div>
            <ContactForm />
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
