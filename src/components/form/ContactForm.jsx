import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_0yphsu4", // replace with your Service ID
      "template_3ev0n7o", // replace with your Template ID
      form.current,
      "vqItTfswSsTDEwDAr" // replace with your Public Key
    )
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setStatus("Failed to send message. Try again later.");
      });
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600">
            Feel free to reach out for collaborations, projects, or just a
            friendly hello!
          </p>

          <div className="flex items-center gap-3 text-gray-700">
            <PhoneIcon className="w-6 h-6 text-blue-500" />
            <span>0912 465 8850</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <EnvelopeIcon className="w-6 h-6 text-blue-500" />
            <span>marcaltea2@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPinIcon className="w-6 h-6 text-blue-500" />
            <span>San Mateo, Rizal</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="input input-bordered w-full bg-base-200 border-0"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="input input-bordered w-full bg-base-200 border-0"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full bg-base-200 border-0 resize-none h-32"
              required
            />
            <button
              type="submit"
              className="btn btn-primary hover:scale-105 transition-transform duration-200"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
