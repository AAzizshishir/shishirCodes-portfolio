"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

export default function ContactMe() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_y7g2fn8",
        "template_4xjt1ap",
        formRef.current,
        "CB4Q-9sH-g_V6qA2q"
      )
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Email has been sent",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Failed to send message: ${error.text}`,
        });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="mt-20 px-4 lg:px-10 scroll-mt-36 md:scroll-mt-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#38BDF8] text-center">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-[420px] mx-auto">
        Have a question or want to work together? Feel free to drop me a
        message. I'd love to hear from you!
      </p>

      <div className="flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="w-6/12 space-x-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-[#94A3B8] mt-2 mb-6">
            Fill up the form and I'll get back to you as soon as possible
          </p>
          <div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-red-400 text-2xl" />
              <span>Email</span>
            </div>
            <p className="ml-8 text-[#94A3B8]">
              abdulaziz.shishir.dev@gmail.com
            </p>
          </div>
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <span className="text-lg font-medium">Phone</span>
            </div>
            <p className="ml-8 text-[#94A3B8]">+880 01874-653745</p>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span className="text-lg font-medium">WhatsApp</span>
            </div>
            <p className="ml-8 text-[#94A3B8]">+880 01874-653745</p>
          </div>
          <h3 className="text-xl font-semibold mb-2 mt-6">Connect with me</h3>
          <div className="flex items-center gap-4 mb-3">
            <Link
              href="https://github.com/AAzizshishir"
              target="_blank"
              className="bg-[#1d324e] rounded-full p-2"
            >
              <FaGithub
                size={20}
                className="hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aashishir/"
              target="_blank"
              className="bg-[#1d324e] rounded-full p-2"
            >
              <FaLinkedin
                size={20}
                className="hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.facebook.com/abdul.aziz.shishir.2025"
              target="_blank"
              className="bg-[#1d324e] rounded-full p-2"
            >
              <FaFacebook
                size={20}
                className="hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>

        {/* Contact Form */}

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-transparent shadow-lg rounded-lg p-6 space-y-4 border border-[#0a2c7c]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-[#0a2c7c] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-[#0a2c7c] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            required
            className="w-full p-3 border border-[#0a2c7c] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border border-[#0a2c7c] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer border-[#0a2c7c] bg-[#0a2c7c] text-white py-3 rounded-lg hover:bg-[#0c3699] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
