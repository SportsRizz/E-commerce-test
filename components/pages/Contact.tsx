
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-green">Get In Touch</h1>
          <p className="text-dark-gray max-w-2xl mx-auto mt-4">We'd love to hear from you. Whether you have a question about our products, an order, or just want to say hello, please feel free to reach out.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-dark-gray mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green" />
              </div>
               <div>
                <label htmlFor="email" className="block text-sm font-bold text-dark-gray mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green" />
              </div>
               <div>
                <label htmlFor="message" className="block text-sm font-bold text-dark-gray mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"></textarea>
              </div>
              <div>
                 <button type="submit" className="w-full bg-terracotta text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-12">
             <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">Contact Information</h2>
             <div className="space-y-4 text-dark-gray">
                <p><strong>Email:</strong><br/> <a href="mailto:support@auraandclay.com" className="text-terracotta hover:underline">support@auraandclay.com</a></p>
                <p><strong>Phone:</strong><br/> (555) 123-4567</p>
                <p><strong>Hours:</strong><br/> Monday - Friday<br/> 9:00 AM - 5:00 PM EST</p>
                <p><strong>Address:</strong><br/> 123 Artisan Way,<br/>Crafton, CA 90210</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
