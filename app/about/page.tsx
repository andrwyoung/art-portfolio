import Image from "next/image";

const CLIENTS = [
  "Berkeley School of Theology",
  "Inheritance Magazine",
  "Splickety Publishing Group",
  "Descendant Publishing",

  "Absurd Adventure Games",
  "Pinecrumbs",
  "Pourtables Coffee",

  "Griggs Educational Enterprises",
];

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-8 mt-12 mb-24 flex flex-col gap-16">
      <h1 className="sr-only">About Andrew Yong</h1>

      {/* Photo + intro */}
      <section className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-8 sm:gap-10">
        <div className="shrink-0 w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-4 ring-stone-100 shadow-sm">
          <Image
            src="/photo.jpeg"
            alt="Andrew Yong"
            width={898}
            height={872}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {/* <div className="flex flex-col text-center sm:text-left justify-center">
          <h2 className="font-header text-3xl text-highlight">Andrew Yong</h2>
          <p className="font-header text-sm text-foreground/50 tracking-widest uppercase mt-3">
            Illustrator &amp; Digital Painter
          </p>
          <p className="font-header text-sm text-foreground/50 mt-1">
            San Francisco, CA
          </p>
        </div> */}
      </section>

      {/* Bio */}
      <section className="font-body  leading-relaxed space-y-5 text-foreground/80 border-l-2 border-stone-200 pl-6">
        <p>
          Andrew is an artist/illustrator based in San Francisco focused on food
          and travel illustration for editorial and advertising. For the past 5
          years, he&apos;s been working as a freelance artist after leaving his
          previous career in software.
        </p>
        <p>
          His art is done digitally, and draws inspiration from contemporary oil
          painters such as Carol Marine and Marc Delasio.
        </p>
        <p>
          He also is known online as{" "}
          <a
            href="https://www.jonadrew.com/"
            className="font-bold font-body underline decoration-stone-300 hover:decoration-stone-500 transition-colors"
            title="Andrew's website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonadrew
          </a>
          , and fun fact: hiked the Pacific Crest Trail in 2024.
        </p>
      </section>

      {/* Clients */}
      <section className="flex flex-col gap-3 mb-16">
        <h2 className="font-header text-xs font-semibold tracking-widest uppercase text-foreground/40">
          Clients
        </h2>
        <div className="flex flex-wrap gap-2">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="font-header text-sm text-stone-600 border border-stone-300 rounded-xl px-3.5 py-1.5"
            >
              {client}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
