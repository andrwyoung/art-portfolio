import { ReactNode } from "react";

export function SocialIcon({
  href,
  title,
  icon,
  className,
}: {
  href: string;
  title: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className={` transition-all duration-200 hover:rotate-10
          cursor-pointer text-stone-500 hover:scale-105 opacity-60 hover:opacity-100
          ${className}`}
    >
      {icon}
    </a>
  );
}
