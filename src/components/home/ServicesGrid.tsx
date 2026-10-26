"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import {
  Sparkles,
  ShieldCheck,
  Smile,
  Sun,
  Clock,
  HeartPulse,
  Check,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

export const ServicesGrid: React.FC<{ limit?: number; showFilter?: boolean }> = ({
  limit,
  showFilter = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeServiceForModal, setActiveServiceForModal] = useState<string | undefined>(undefined);

  const categories = ["All", "Cosmetic", "Orthodontics", "Surgical", "General"];

  const filteredServices = servicesData.filter((svc) => {
    if (selectedCategory === "All") return true;
    return svc.category === selectedCategory;
  });

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

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
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Comprehensive Care"
            badgeVariant="teal"
            title="World-Class Treatments Tailored to Your"
            highlightedWord="Unique Smile"
            description="From routine hygiene exams to full arch implant rehabilitation and cosmetic veneers, our clinic delivers unmatched precision and gentle care."
          />

          {/* Category Filter Pills */}
          {showFilter && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0d9488] text-white shadow-md shadow-teal-700/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon + Badge + Price */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-[#0d9488] transition-colors [&_svg]:group-hover:text-white">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#0d9488] block">
                        {service.priceEstimate}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0891b2] mb-1 block">
                      {service.category} Dentistry
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0d9488] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveServiceForModal(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d9488] hover:text-[#0f766e] transition-colors"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book This Service</span>
                  </button>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA for full catalog */}
          {limit && (
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                href="/services"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View All Treatments & Detailed Pricing
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal with Selected Service */}
      <AppointmentModal
        isOpen={!!activeServiceForModal}
        serviceId={activeServiceForModal}
        onClose={() => setActiveServiceForModal(undefined)}
      />
    </>
  );
};
