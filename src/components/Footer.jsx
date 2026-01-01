"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-3 gap-8">

        {/* ===== CONTACT INFO ===== */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f5c542]">Haryana Textile Agency</h3>
          <p>Shop No:- 10, Shree Ganesh Cloth Market, Ambala, Haryana</p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#f5c542]" />
            <span>9216750600 | 9216850600 | 0171-2511344</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#f5c542]" />
            <span>haryanatextileagency@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#f5c542]" />
            <span>Ambala, Haryana</span>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold text-[#f5c542]">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-[#f5c542] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#f5c542] transition">About Us</a></li>
            <li><a href="#products" className="hover:text-[#f5c542] transition">Products</a></li>
            <li><a href="#gallery" className="hover:text-[#f5c542] transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#f5c542] transition">Contact</a></li>
          </ul>
        </div>

        {/* ===== SOCIAL MEDIA ===== */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold text-[#f5c542]">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-[#f5c542] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#f5c542] transition"><FaInstagram /></a>
          </div>
          <p className="text-sm text-zinc-400 mt-4">
            &copy; {new Date().getFullYear()} Haryana Textile Agency. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
