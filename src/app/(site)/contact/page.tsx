
import React from 'react';
import ContactForm from "./contact-form";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="md:px-6 dark:text-white mx-auto min-h-[60vh] max-w-[900px] py-10 md:py-24 px-2 sm:px-4">
      <div className='flex justify-center'>
        <h1 className="text-3xl lg:text-5xl font-bold text-center space-y-2">
          Love to hear from you, <br /><span className='mt-3 block' /> Get in touch 👋
        </h1>
      </div>

      <div className="mt-5 flex justify-center flex-wrap">
        <p className='text-center max-w-xl text-lg lg:text-xl'>
          Feel free to contact me with questions about
          any of my project or services. I&apos;ll get back to you within 24 hours!{" "}
          <Link target="_blank" href='tel:+254700207054' className="text-accent hover:underline">+254700207054</Link> {" "} or {" "}
          <Link target="_blank" href='mailto:me@trdevr.com' className="text-accent hover:underline">me@trdevr.com</Link>
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
