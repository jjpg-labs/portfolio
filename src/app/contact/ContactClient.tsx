'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { CALENDLY_URL } from '@/app/components/Footer';
import { useLocale } from '@/app/context/LocaleContext';

export default function ContactClient() {
  const { t } = useLocale();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-gray-50">
          {t.contactPage.title}
        </h1>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-10 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 text-white flex-shrink-0">
                {FaCalendarAlt({ size: 22 })}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">
                  {t.contactPage.calendlyTitle}
                </h2>
                <p className="text-blue-100 text-sm sm:text-base">
                  {t.contactPage.calendlyDescription}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center justify-center bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow group-hover:scale-105 transition-transform flex-shrink-0 whitespace-nowrap">
              {t.contactPage.calendlyCta} &rarr;
            </span>
          </div>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              {t.contactPage.formTitle}
            </h2>
            <ContactForm />
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
