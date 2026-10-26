import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "teal" | "cyan" | "emerald";
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = "teal",
  title,
  highlightedWord,
  description,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-2xl ${alignClasses[align]} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-3.5">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}{" "}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
            {highlightedWord}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
