'use client';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { CALENDLY_URL } from '@/app/components/Footer';
import { useLocale } from '@/app/context/LocaleContext';

export default function ContactClient() {
  const { t } = useLocale();

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>{t.ui.metaContact}</span>
          <span>
            {t.ui.issue} <span className="text-accent">02</span>
          </span>
        </div>

        <header className="mb-12">
          <h1 className="font-serif text-h1 sm:text-display lg:text-[80px] leading-none text-text-primary">
            {t.contactPage.title}
          </h1>
          <p className="font-sans text-body-lg text-text-secondary mt-4 max-w-[62ch]">
            {t.contactPage.subtitle}
          </p>
        </header>

        <section className="mb-16 border-t border-border pt-10">
          <h2 className="font-serif text-[28px] lg:text-[34px] leading-tight text-text-primary">
            {t.contactPage.faqTitle}
          </h2>
          <dl className="mt-8 flex flex-col">
            {t.contactPage.faq.map((item) => (
              <div
                key={item.q}
                className="py-6 border-b border-border-subtle last:border-b-0"
              >
                <dt className="font-serif text-[22px] lg:text-[24px] leading-snug text-text-primary">
                  {item.q}
                </dt>
                <dd className="font-sans text-body text-text-secondary leading-relaxed mt-3 max-w-[68ch]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <div className="mb-6">
              <span className="font-mono text-mono-label uppercase text-text-muted">
                {t.ui.form}
              </span>
              <h2 className="font-serif text-[28px] lg:text-[34px] leading-tight text-text-primary mt-2">
                {t.contactPage.formTitle}
              </h2>
            </div>
            <ContactForm />
          </div>

          <ContactInfo />
        </div>

        {/* One dominant action (the form); the call is the alternative the
            copy already frames as "prefer to talk?", so it sits after it with
            less weight. */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-border py-8"
        >
          <div>
            <span className="font-mono text-mono-label uppercase text-text-muted">
              {t.ui.discoveryCall}
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] leading-tight text-text-primary mt-1">
              {t.contactPage.calendlyTitle}
            </h2>
            <p className="font-sans text-body text-text-secondary mt-2 max-w-[60ch]">
              {t.contactPage.calendlyDescription}
            </p>
          </div>
          <span className="inline-flex items-end min-h-12 w-fit font-serif italic text-[20px] border-b-2 border-accent pb-1 text-text-primary group-hover:text-accent transition shrink-0">
            {t.contactPage.calendlyCta}
            <span className="font-mono text-accent ml-2">→</span>
          </span>
        </a>
      </div>
    </section>
  );
}
