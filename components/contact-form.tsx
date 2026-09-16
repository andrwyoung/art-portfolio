"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaqyvdk";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-base text-foreground/80">
        Thanks for reaching out! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {/* Honeypot: hidden from real users, Formspree silently drops submissions where this is filled in */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full font-body text-sm border border-stone-300 rounded-md px-3 py-2 bg-background focus:outline-none focus:border-stone-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full font-body text-sm border border-stone-300 rounded-md px-3 py-2 bg-background focus:outline-none focus:border-stone-500"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full font-body text-sm border border-stone-300 rounded-md px-3 py-2 bg-background focus:outline-none focus:border-stone-500 resize-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start font-header text-sm font-semibold tracking-wide bg-stone-800 text-white px-5 py-2 rounded-xl hover:bg-stone-700 transition-colors mt-4 disabled:opacity-50 cursor-pointer"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-red-600">
          Something went wrong. Try again, or email me directly.
        </p>
      )}
    </form>
  );
}
