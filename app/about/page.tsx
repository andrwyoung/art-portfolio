import Image from "next/image";
import { CONTACT_EMAIL } from "../types/settings";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-16 flex flex-col gap-12">
      {/* Photo + intro */}
      <section className="flex flex-col sm:flex-row items-center gap-8">
        <div className="shrink-0 w-64 h-64 rounded-md overflow-hidden">
          <Image
            src="/photo.jpeg"
            alt="Andrew Yong"
            width={898}
            height={872}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="font-logo text-4xl">Andrew Yong</h1>
          <p className="font-header text-sm text-foreground/50 tracking-wide uppercase">
            Illustrator & Digital Painter
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="font-body text-base leading-relaxed space-y-4 text-foreground/80">
        <p>[A short paragraph about who you are and what drives your work.]</p>
        <p>
          [A second paragraph — your process, medium, influences, or what you
          love to paint.]
        </p>
      </section>

      {/* Contact */}
      <section className="flex flex-col gap-2">
        <h2 className="font-header text-sm tracking-wide ">Get in touch</h2>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-body text-base hover:text-highlight transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </section>
    </main>
  );
}
