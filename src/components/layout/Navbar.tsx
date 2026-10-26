"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clinicInfo } from "@/data/clinicData";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import { Sparkles, Phone, Menu, X, CalendarCheck, Shield } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Treatments & Services", href: "/services" },
    { label: "About Clinic", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group py-1">
              <Image
                src="/logo.png"
                alt="Smile Dental Care Butwal"
                width={1097}
                height={309}
                priority
                className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
                style={{ width: "auto" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-[#0d9488] font-semibold"
                        : "text-slate-600 hover:text-[#0d9488]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d9488] to-[#0891b2] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`}
                className="hidden xl:flex items-center gap-2 text-slate-700 hover:text-[#0d9488] text-sm font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-teal-50 text-[#0d9488] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{clinicInfo.phone}</span>
              </a>

              <Button
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                icon={<CalendarCheck className="w-4 h-4" />}
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-[#0d9488] hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 text-[#0d9488] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#0d9488]" />
                Call: {clinicInfo.phone}
              </a>

              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                icon={<CalendarCheck className="w-4 h-4" />}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
