import React, { FormEvent } from 'react';

export const ContactSection: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo.');
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col">
      <div className="flex-grow flex justify-center py-24 px-6 lg:px-40">
        <div className="w-full max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center justify-center pt-8 pb-4">
            <h1 className="text-4xl md:text-5xl font-black leading-tight max-w-[800px]">Let's Create Together</h1>
            <p className="text-slate-600 dark:text-[#93b6c8] text-base md:text-lg max-w-[600px]">
              Whether it's a wedding, portrait, or commercial project, we'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="bg-white dark:bg-[#1a2a32] p-6 md:p-8 rounded-xl border border-[#e5e7eb] dark:border-[#345565] shadow-sm">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="flex flex-col flex-1">
                      <span className="text-sm font-medium pb-2">Name</span>
                      <input className="form-input w-full rounded-lg border border-[#cbd5e1] dark:border-[#345565] bg-background-light dark:bg-[#111c22] h-12 px-4 focus:ring-primary focus:border-primary" placeholder="Killian" type="text" required />
                    </label>
                    <label className="flex flex-col flex-1">
                      <span className="text-sm font-medium pb-2">Email</span>
                      <input className="form-input w-full rounded-lg border border-[#cbd5e1] dark:border-[#345565] bg-background-light dark:bg-[#111c22] h-12 px-4 focus:ring-primary focus:border-primary" placeholder="killiansarsah@gmail.com" type="email" required />
                    </label>
                  </div>
                  <label className="flex flex-col flex-1">
                    <span className="text-sm font-medium pb-2">Message</span>
                    <textarea className="form-textarea w-full rounded-lg border border-[#cbd5e1] dark:border-[#345565] bg-background-light dark:bg-[#111c22] min-h-[160px] p-4 focus:ring-primary focus:border-primary" placeholder="Tell us about your project..."></textarea>
                  </label>
                  <button className="mt-2 w-full md:w-auto h-12 px-8 bg-primary hover:bg-[#137ab0] text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 hover:-translate-y-1">Send Message</button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#345565] bg-white dark:bg-[#1a2a32] p-5 items-start hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary"><span className="material-symbols-outlined">mail</span></div>
                  <div><h3 className="font-bold">Email Us</h3><p className="text-sm text-slate-500 dark:text-[#93b6c8]">killiansarsah@gmail.com</p></div>
                </div>
                <div className="flex gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#345565] bg-white dark:bg-[#1a2a32] p-5 items-start hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary"><span className="material-symbols-outlined">location_on</span></div>
                  <div><h3 className="font-bold">Visit Studio</h3><p className="text-sm text-slate-500 dark:text-[#93b6c8]">Gbawe Top Base Road, Accra, Ghana</p></div>
                </div>
              </div>
              <div className="relative h-64 w-full rounded-xl overflow-hidden mt-2 border border-white/5 bg-gray-900">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7889876543214!2d-0.30869!3d5.58916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d4c4c4c4c4c5%3A0x1234567890abcdef!2sGbawe%20Top%20Base%20Road%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1702396800000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
};

export default Contact;