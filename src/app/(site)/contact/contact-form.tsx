"use client"

import useFormSpree from "@/hooks/useFormSpree";
import { Loader } from "lucide-react";
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>();

	const { state, handleSubmit: handleFormSpreeSubmit, resetSpreeState } = useFormSpree('xjvzvdrd');

	const handleSendMessage = async (data: FormValues) => {
		const formData = new FormData();

		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("subject", data.subject);
		formData.append("message", data.message);

		const succcess = await handleFormSpreeSubmit(formData);
		if (succcess) reset();
	}

  return (
	  <form
		  onSubmit={handleSubmit(handleSendMessage)}
		  autoComplete="off"
		  className='lg:my-16'
	  >
		  {state?.message && state.errored && (
			  <div className="my-4 bg-red-300 py-2 text-center text-red-700">
				  <p>{state?.message}</p>
			  </div>
		  )}

		  <div className="mt-6 flex flex-col gap-5 sm:flex-row">
			  <div className="flex-1">
				  <label htmlFor="name" className="text-md my-2 block">
					  Your Name
				  </label>
				  <input
					  type="text"
					  id="name"
					  {...register('name', {
						  required: {
							  value: true,
							  message: 'Name is required',
						  },
					  })}
					  placeholder="Enter your name here."
					  className={`w-full border-0 py-3 px-3 text-lg dark:bg-dark outline-none ring-1 ${errors.name ? 'ring-red-400' : 'ring-dark'
						  } focus:border-0 focus:outline-none`}
				  />
			  </div>

			  <div className="flex-1">
				  <label htmlFor="email" className="text-md my-2 block">
					  Your Email
				  </label>
				  <input
					  type="email"
					  id="email"
					  {...register('email', {
						  required: {
							  value: true,
							  message: 'Email is required',
						  },
					  })}
					  placeholder="Enter your email here."
					  className={`w-full border-0 py-3 px-3 outline-none ring-1 dark:bg-dark text-lg ${errors.email ? 'ring-red-400' : 'ring-dark'
						  } focus:border-0 focus:outline-none`}
				  />
			  </div>
		  </div>

		  <div className="my-5">
			  <label htmlFor="subject" className="text-md my-2 block">
				  Subject
			  </label>
			  <input
				  type="text"
				  id="subject"
				  {...register('subject', {
					  required: {
						  value: true,
						  message: 'Subject is required',
					  },
				  })}
				  placeholder="Enter the subject here."
				  className={`w-full border-0 py-3 px-3 outline-none ring-1 dark:bg-dark text-lg ${errors.subject ? 'ring-red-400' : 'ring-dark'
					  } focus:border-0 focus:outline-none`}
			  />
		  </div>

		  <div className="my-5">
			  <label htmlFor="message" className="text-md my-2 block">
				  Message
			  </label>
			  <textarea
				  id="message"
				  {...register('message', {
					  required: {
						  value: true,
						  message: 'Message is required',
					  },
				  })}
				  placeholder="Enter the message."
				  rows={5}
				  className={`w-full border-0 py-3 px-3 outline-none resize-none ring-1 dark:bg-dark  text-lg ${errors.message ? 'ring-red-400' : 'ring-dark'
					  } focus:border-0 focus:outline-none`}
			  ></textarea>
		  </div>

		  {(state.message && state.succeeded) ? (
			  <div className="my-4 bg-green-200 py-6 text-center rounded-md text-green-700">
				  <p>{state.message}</p>

				  <button
					  onClick={resetSpreeState}
					  type='submit'
					  className="mt-3 rounded-lg bg-accent px-4 py-2 text-sm text-white"
				  >
					  Send Another Message
				  </button>
			  </div>
		  ) : (
			  <div className="my-5 flex justify-end">
				  <button
					  type="submit"
					  disabled={state.submitting}
					  className="cursor-pointer border-0 bg-accent px-10 py-2 rounded-lg text-white outline-none ring-1 ring-accent focus:border-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-opacity-75"
				  >
					  {state.submitting ? (
						  <Loader className="animate-spin" />
					  ) : (
						  'Send Message'
					  )}
				  </button>
			  </div>
		  )}
	  </form>
  )
}

export default ContactForm