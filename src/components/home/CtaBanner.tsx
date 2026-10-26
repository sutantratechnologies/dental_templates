"use client";

import React, { useState } from "react";
import { clinicInfo } from "@/data/clinicData";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import { CalendarCheck, Phone, Sparkles, ShieldCheck } from "lucide-react";

export const CtaBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-[#0d9488] via-[#0f766e] to-[#0891b2] text-white">
        {/* Glow ambient spots */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-teal-200" />
            <span>Ready for a Dental Experience You'll Look Forward To?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Schedule Your Visit Today & Smile with Total Confidence.
          </h2>

          <p className="mt-4 text-teal-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            New patients receive a comprehensive 3D digital imaging scan, gentle cleaning, and one-on-one consultation with our clinical directors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              icon={<CalendarCheck className="w-5 h-5 text-[#0d9488]" />}
              className="w-full sm:w-auto font-bold shadow-xl shadow-teal-950/20"
            >
              Book Instant Appointment
            </Button>

            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/70 hover:bg-white/15 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {clinicInfo.phone}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-teal-100 flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-200" />
              No Hidden Fees
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-200" />
              Insurance Verified Upfront
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-200" />
              Free Rescheduling
            </span>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
