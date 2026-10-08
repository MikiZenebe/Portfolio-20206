import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { contactInfo, socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Web or mobile — let's build something worth remembering."
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Drop me a line
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor="hover"
                className="group relative inline-flex items-center gap-4"
              >
                <span className="text-lg font-light tracking-tight text-ink   lg:leading-tight transition-colors duration-300 group-hover:text-accent">
                  {contactInfo.email}
                </span>
                <span className="flex shrink-0 items-center justify-center rounded-full border border-border-soft bg-surface transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-surface">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg text-ink transition-colors hover:text-accent"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Location
                </h3>
                <p className="text-lg text-ink">
                  {contactInfo.location.split(" — ")[0]}
                  <span className="block text-sm text-muted mt-1">
                    {contactInfo.location.split(" — ")[1]}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:border-l border-border-soft md:pl-10 lg:pl-20">
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Connect
              </h3>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between border-b border-border-soft py-4 text-xl text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="h-6 w-6 opacity-70 transition-opacity group-hover:opacity-100" />
                          {link.label}
                        </span>
                        <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
