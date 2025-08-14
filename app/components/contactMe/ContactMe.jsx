"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactMe() {
  const formRef = useRef();
  // const [message, setMessage] = useState("");
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
      className="mt-16 px-4 lg:px-10 scroll-mt-36 md:scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38BDF8] text-center">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Have any questions or want to work together? Fill out the form below.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 grid place-items-center mb-4">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <span className="text-lg font-medium">+880 01874-653745</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-600 text-2xl" />
            <span className="text-lg font-medium">+880 01874-653745</span>
          </div>
        </div>

        {/* Contact Form */}

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* {message && (
          <p className="mt-4 text-center text-green-500 dark:text-green-400">
            {message}
          </p>
        )} */}
      </div>
    </section>
  );
}
