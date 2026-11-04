import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";

// Clinic WhatsApp number comes from the .env file (VITE_WHATSAPP_NUMBER).
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

const initial = { name: "", phone: "", email: "", service: "", message: "" };

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function Appointment() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "*New Appointment Request*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // Opens WhatsApp with the message ready to send to the clinic.
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSent(true);
    setForm(initial);
  };

  return (
    <section id="appointment" className="py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="Appointment"
          title="Book your visit"
          text="Fill in the form and our team will contact you shortly."
        />

        {sent ? (
          <div className="mt-8 md:mt-12 rounded-2xl border border-gold bg-white p-10 text-center">
            <p className="font-serif text-2xl text-gold">Thank you!</p>
            <p className="mt-2 text-ink/70">
              WhatsApp has opened with your details. Please press Send to confirm your request.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm text-gold-dark underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 md:mt-12 grid gap-4 md:gap-5 sm:grid-cols-2">
            <input
              className={inputClass}
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className={inputClass}
              name="phone"
              placeholder="Mobile number (e.g. 0300 1234567)"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              className={`${inputClass} sm:col-span-2`}
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <select
              className={`${inputClass} sm:col-span-2`}
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option>Teeth Whitening</option>
              <option>Dental Implants</option>
              <option>Braces & Aligners</option>
              <option>Porcelain Veneers</option>
              <option>Root Canal Treatment</option>
              <option>General Check-up</option>
              <option>Children's Dentistry</option>
            </select>
            <textarea
              className={`${inputClass} sm:col-span-2`}
              rows="3"
              name="message"
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-8 py-3 font-medium text-white transition hover:bg-gold hover:text-ink sm:col-span-2"
            >
              Request Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}