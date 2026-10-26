import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-md shadow-teal-700/20 focus:ring-[#0d9488]",
    secondary:
      "bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-md shadow-cyan-700/20 focus:ring-[#0891b2]",
    outline:
      "border-2 border-[#0d9488] text-[#0d9488] hover:bg-teal-50/60 focus:ring-[#0d9488]",
    ghost:
      "text-slate-700 hover:text-[#0d9488] hover:bg-teal-50/50 focus:ring-[#0d9488]",
    white:
      "bg-white text-slate-900 hover:bg-slate-50 shadow-md shadow-black/5 focus:ring-white",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
