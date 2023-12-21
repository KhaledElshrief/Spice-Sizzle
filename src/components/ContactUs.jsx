import React from 'react';
import Footer from "./Footer"
import TopNav from "./TopNav"
const ContactUs = () => {
  return (
    <>
    <TopNav/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border rounded w-full py-2 px-3 resize-none"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
