"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import {
  CalendarCheck,
  ShieldCheck,
  Star,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 lg:py-24 border-b border-slate-200/80">
        {/* Full-bleed clinic architectural background image with frosted overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Smile Dental Care modern clinic interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/88 to-white/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-[#0d9488]" />
                <span>Milan Chowk, Butwal • Lumbini Province&apos;s Advanced Dental Studio</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Exceptional dental care for your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] via-[#0891b2] to-[#0d9488]">
                  healthy, radiant smile.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience gentle, pain-free dentistry at Smile Dental Care Butwal. Powered by 3D digital diagnostics, computer-guided dental implants, and single-visit root canal treatments.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  icon={<CalendarCheck className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-lg shadow-teal-600/25"
                >
                  Book Instant Appointment
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="/services"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Explore Treatments & Fees
                </Button>
              </div>

              {/* Value Bullet Points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <CheckCircle className="w-4 h-4 text-[#0d9488] shrink-0" />
                  <span>100% Pain-Free Gentle Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <CheckCircle className="w-4 h-4 text-[#0891b2] shrink-0" />
                  <span>Same-Day Emergency Slots</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <CheckCircle className="w-4 h-4 text-[#0d9488] shrink-0" />
                  <span>Fonepay / eSewa / Card QR</span>
                </div>
              </div>

              {/* Trust & Google Rating Snippet */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-slate-900 ml-1.5">4.9 / 5</span>
                </div>
                <span className="text-xs text-slate-500">
                  Over <strong className="text-slate-800">950+ verified patient reviews</strong> in Butwal & Rupandehi
                </span>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame with gradient */}
                <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-[#0d9488] via-[#0891b2] to-teal-200 shadow-2xl shadow-teal-900/15">
                  <div className="relative h-[420px] sm:h-[480px] w-full rounded-[22px] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/hero.jpg"
                      alt="Modern Smile Dental Care consultation room in Butwal"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Floating Doctor Badge Inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-900">Dr. Roshan Sharma, B.D.S., M.D.S.</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Chief Dental Surgeon & Implantologist • NMC Regd. 8945
                          </p>
                        </div>
                        <Badge variant="teal" className="text-[10px]">
                          Available
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight Card Left */}
                <div className="hidden sm:flex absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-teal-100 items-center gap-3 hover:shadow-2xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">3D AI Guided Imaging</span>
                    <span className="block text-[11px] text-teal-700 font-medium">99.8% Diagnostic Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="mt-16 bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {clinicInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0d9488]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal Triggered from Hero CTA */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
