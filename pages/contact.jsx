import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Contact — FUJI International Consultancy</title>
      </Head>

      {/* HERO */}
      <div className="page-hero bg-black text-start">
        <div className="container">
       
        <span className="uppercase tracking-widest text-[#E60013] text-sm">
          Get in Touch
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">
          Let's Start the <br /> Conversation
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6 -ml-2">
          Tell us about your goals and we’ll connect you with the right
          specialist.
        </p>
         </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FORM */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="bg-gray-100 p-10 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-black mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill in the details below and we’ll respond shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME + COMPANY */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                      required
                    />

                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company (optional)"
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                    />
                  </div>

                  {/* EMAIL + PHONE */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                      required
                    />

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                    />
                  </div>

                  {/* SERVICE */}
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-white"
                  >
                    <option value="">Select Service</option>
                    <option>Study Visa Guidance</option>
                    <option>Working Visa Guidance</option>
                    <option>Visa Documentation</option>
                    <option>Career Placement</option>
                    <option>Language Prep</option>
                  </select>

                  {/* MESSAGE */}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border bg-white resize-none"
                    required
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className=" bg-[#E60013] text-white px-6 py-4 rounded-lg font-bold hover:bg-red-600 transition"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-3">
                  Message Received
                </h3>
                <p className="text-gray-600">
                  Thank you, {form.name.split(" ")[0]}. We will contact you soon.
                </p>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            {/* CONTACT CARD */}
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-6">Direct Contact</h4>

              <div className="space-y-5 text-sm">
                <p>
                  ✉ fujiinternationalconsultancy@gmail.com
                </p>
                <p>☎ +977 98XXXXXXXX</p>
                <p>📍 Butwal, Rupandehi, Nepal</p>
              </div>
            </div>

            {/* MAP CARD */}
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h4 className="font-bold mb-4">Our Location</h4>

              <div className="h-64 w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.765044405892!2d83.462710019117!3d27.69002557785575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996870050fd64cb%3A0x3423c86c678d0c08!2sFuji%20International%20Consultancy!5e0!3m2!1sen!2snp!4v1778056301455!5m2!1sen!2snp"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}