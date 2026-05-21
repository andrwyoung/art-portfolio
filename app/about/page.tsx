import Image from "next/image";
import { CONTACT_EMAIL } from "../types/settings";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-8 mt-12 mb-24 flex flex-col gap-12">
      {/* Photo + intro */}
      <section className="flex flex-col items-center gap-8">
        <div className="shrink-0 w-72 h-72 rounded-md overflow-hidden">
          <Image
            src="/photo.jpeg"
            alt="Andrew Yong"
            width={898}
            height={872}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {/* <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="font-logo text-4xl">Andrew Yong</h1>
          <p className="font-header text-sm text-foreground/50 tracking-wide">
            Illustrator & Digital Painter
          </p>
        </div> */}
      </section>

      {/* Bio */}
      <section className="font-body text-base leading-relaxed space-y-4 text-foreground/80">
        <p>
          Andrew is an artist/illustrator based in San Francisco focused on food
          and travel illustration for editorial and advertising. For the past 5
          years, he&apos;s been working as a full time artist after leaving his
          previous career in tech.
        </p>
        <p>
          His art is done digitally, and draws inspiration from contemporary oil
          painters such as Carol Marine and Marc Delasio.
        </p>
        <p>
          He also goes by Jonadrew, which is the identity he uses for his
          children&apos;s publishing and comics style, and can be found{" "}
          <a
            href="https://www.jonadrew.com/"
            className="font-bold font-body underline"
            title="Andrew's website"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className="pt-4">
          <strong>Clients include:</strong> Inheritance Magazine, Griggs
          Educational Enterprises, Berkley School of Theology, Splickety
          Publishing Group, Descendant Publishing
        </p>
      </section>

      {/* Contact */}
      <section className="flex flex-col gap-2">
        <h2 className="font-header text-lg font-semibold tracking-wide ">
          Get in touch
        </h2>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-body text-base hover:underline transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </section>
    </main>
  );
}
