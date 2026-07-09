import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";
import Toast from "../components/Toast";
import { contactInfo } from "../data/socialLinks";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastVisible, setToastVisible] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setForm(initialForm);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  const handleChange = (field: keyof ContactForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const field =
    "w-full border-b border-border bg-transparent py-4 text-ink placeholder:text-faint focus:border-accent outline-none transition-colors";

  return (
    <section id="contact" className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Web or mobile — let's build something worth remembering."
        />

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col justify-between gap-10 md:col-span-5">
            <div>
              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor="hover"
                className="group inline-flex items-center gap-3 text-xl text-ink md:text-2xl"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="link-underline">{contactInfo.email}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                {contactInfo.location}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <p>Currently available for freelance and full-time roles.</p>
              <p>{contactInfo.phone}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 md:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-[0.15em] text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Jane Doe"
                  className={field}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-[0.15em] text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="jane@studio.com"
                  className={field}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-[0.15em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Tell me a little about your project..."
                className={`${field} resize-none`}
              />
              {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
            </div>

            <motion.div whileTap={{ scale: 0.97 }} className="self-start">
              <MagneticButton as="button" type="submit">
                Send Message <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </motion.div>
          </form>
        </div>
      </div>

      <Toast message="Message sent — I'll get back to you soon." visible={toastVisible} onClose={() => setToastVisible(false)} />
    </section>
  );
}
