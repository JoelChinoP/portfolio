// src/components/bento/BentoSocialCard.tsx
import React from "react";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const BentoSocialCard: React.FC<Props> = ({ icon: Icon, href }) => (
  <a
    href={href}
    aria-label="Social media"
    target="_blank"
    className="flex size-full items-center justify-center rounded-3xl group-hover:text-emerald-400"
  >
    <Icon class="w-2.5 h-2.5" />
  </a>
);

export default BentoSocialCard;
