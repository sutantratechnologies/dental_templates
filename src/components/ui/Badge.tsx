import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "teal"
    | "solid-teal"
    | "cyan"
    | "solid-cyan"
    | "emerald"
    | "slate"
    | "amber"
    | "teal-subtle"
    | "dark"
    | "white";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "teal",
  className = "",
  icon,
}) => {
  const variantStyles: Record<string, string> = {
    teal: "bg-teal-50 text-teal-800 border-teal-200/70",
    "solid-teal": "bg-[#0d9488] text-white border-teal-600/40 shadow-sm",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200/70",
    "solid-cyan": "bg-[#0891b2] text-white border-cyan-600/40 shadow-sm",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200/70",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200/70",
    "teal-subtle": "bg-[#0d9488]/20 text-teal-300 border-teal-500/30",
    dark: "bg-slate-900/90 text-white border-slate-700 backdrop-blur-md shadow-sm",
    white: "bg-white text-slate-800 border-slate-200 shadow-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide uppercase ${variantStyles[variant] || variantStyles.teal} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
