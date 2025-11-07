import React from "react";

export default function Contact() {
    return (
      <div className="bg-[#131212] py-10">
        <section className=" text-white container">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out using the form, or connect on social
                media.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>Email: example@mail.com</li>
                <li>Phone: +880 123 456 789</li>
                <li>Location: Dhaka, Bangladesh</li>
              </ul>
            </div>

            {/* Contact Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
}
