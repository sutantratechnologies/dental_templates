"use client";

import React, { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  Sparkles,
  ShieldCheck,
  Smile,
  Sun,
  Clock,
  HeartPulse,
  CheckCircle2,
  CalendarCheck,
  HelpCircle,
  CreditCard,
  FileCheck,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalServiceId, setActiveModalServiceId] = useState<string | undefined>(undefined);

  const categories = ["All", "Cosmetic", "Orthodontics", "Surgical", "General"];

  const filteredServices = servicesData.filter((svc) => {
    if (selectedCategory === "All") return true;
    return svc.category === selectedCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#0d9488]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#0d9488]" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-[#0d9488]" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-[#0d9488]" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-[#0d9488]" />;
      case "HeartPulse":
      default:
        return <HeartPulse className="w-6 h-6 text-[#0d9488]" />;
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-slate-200/80">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="teal" className="mb-4">
            Clinical Excellence & Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Dental Treatments &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
              Fee Transparency
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From precision preventive cleanings to full-mouth implant restorations, explore our cutting-edge procedures designed for long-lasting health and beauty.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${selectedCategory === cat
                    ? "bg-[#0d9488] text-white shadow-md shadow-teal-700/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0891b2]">
                          {service.category} Dentistry
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Treatment Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Pricing Box & Action */}
                  <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                        Estimated Investment
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0d9488] mt-1">
                        {service.priceEstimate}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Typical Duration: {service.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <div className="text-[11px] text-slate-600">
                        ✓ Fonepay / eSewa / Card QR accepted
                      </div>
                      <div className="text-[11px] text-slate-600">
                        ✓ Installment plans for braces & implants
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={() => setActiveModalServiceId(service.id)}
                      icon={<CalendarCheck className="w-4 h-4" />}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Info Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Financial Transparency"
            badgeVariant="teal"
            title="Convenient Payment & Flexible"
            highlightedWord="Installment Options"
            description="We believe in complete transparency. All treatments have clear upfront estimates with easy digital payment and installment plans."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fonepay, eSewa & Khalti</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless digital payments at reception. Scan and pay via Fonepay QR, eSewa, Khalti, ConnectIPS, or mobile banking from any bank in Nepal.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Installments (EMI)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Staged monthly payments for long-term treatments like clear aligners, orthodontic braces, and dental implants. Pay comfortably per visit.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Official Tax Invoices & Claims</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide PAN-registered official receipts and medical reports for corporate dental reimbursement and private health insurance claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <AppointmentModal
        isOpen={!!activeModalServiceId}
        serviceId={activeModalServiceId}
        onClose={() => setActiveModalServiceId(undefined)}
      />
    </>
  );
}
