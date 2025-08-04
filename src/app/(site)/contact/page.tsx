
import React from 'react';
import ContactForm from "./contact-form";
import Link from "next/link";
import { keystaticReader } from '@/lib/keystatic';

const Contact =  async () => {
  const settings = await keystaticReader.singletons.settings.read();

  return (
    <div className="md:px-6 dark:text-white mx-auto min-h-[60vh] max-w-[900px] py-10 md:py-24 px-2 sm:px-4">
      <div className='flex justify-center'>
        <h1 className="text-3xl lg:text-5xl font-bold text-center space-y-2"
        dangerouslySetInnerHTML={{ __html: settings?.contact?.headline || "Love to hear from you, <br /><span className='mt-3 block' /> Get in touch 👋" } }
        />
      </div>

      <div className="mt-5 flex justify-center flex-wrap">
        <p className='text-center max-w-xl text-lg lg:text-xl'>
          {settings?.contact?.summary || "Feel free to contact me with questions about any of my project or services. I'll get back to you within 24 hours!"}
          <Link target="_blank" href={`tel:${settings?.contact?.phone}`} className="text-accent hover:underline">{settings?.contact?.phone}</Link> {" "} or {" "}
          <Link target="_blank" href={`mailto:${settings?.contact?.email}`} className="text-accent hover:underline">{settings?.contact?.email}</Link>
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
