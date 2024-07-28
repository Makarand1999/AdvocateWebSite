import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label className="block text-left">Name:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-left">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-left">Message:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
