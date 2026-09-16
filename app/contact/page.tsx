import ContactForm from "@/components/contact-form";
import { CONTACT_EMAIL } from "@/types/settings";

export default function Contact() {
  return (
    <main className="lg:w-2xl mx-auto px-8 mt-12 mb-24 flex flex-col gap-16">
      <h1 className="sr-only">Contact Andrew Yong</h1>

      <section className="flex flex-col gap-4 rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="font-header text-2xl font-semibold tracking-wide mb-6">
          Get in touch
        </h2>
        <ContactForm />
        <p className="font-body text-sm text-foreground/60 transition-colors">
          or email me directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body text-sm text-foreground/60 hover:underline transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
