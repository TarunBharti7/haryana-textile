"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        form.current,
        "YOUR_USER_ID" // replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-white text-[#0a1a2f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ===== CONTACT INFO ===== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p>
              We’re here to help! Reach out to us via phone, email or visit our
              shop in Ambala.
            </p>

            <div className="flex items-center gap-3 text-[#0a1a2f]">
              <FaPhoneAlt className="text-[#f5c542]" />
              <span>9216750600 | 9216850600 | 0171-2511344</span>
            </div>

            <div className="flex items-center gap-3 text-[#0a1a2f]">
              <FaEnvelope className="text-[#f5c542]" />
              <span>haryanatextileagency@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-[#0a1a2f]">
              <FaMapMarkerAlt className="text-[#f5c542]" />
              <span>
                Shop No:- 10, Shree Ganesh Cloth Market, Ambala, Haryana
              </span>
            </div>

            {/* MAP */}
            <div className="mt-6 w-full h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.676040173815!2d76.79431747458716!3d30.378563281815698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8b0f23d3a1b9%3A0xa76f8b0f23d3a1b9!2sShree%20Ganesh%20Cloth%20Market%2C%20Ambala%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542] h-32 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#0a1a2f] text-white font-semibold rounded-lg hover:bg-[#f5c542] hover:text-[#0a1a2f] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center mt-2 text-green-600 font-medium">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
