import React from "react";
import Image from "next/image";
import { clinicPerks } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Cpu, Clock, BadgeCheck, CheckCircle2, Shield, Heart } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getPerkIcon = (icon: string) => {
    switch (icon) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#0d9488]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#0891b2]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#0d9488]" />;
      case "BadgeCheck":
      default:
        return <BadgeCheck className="w-5 h-5 text-[#0891b2]" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Smile Difference"
          badgeVariant="cyan"
          title="Designed to Eliminate Anxiety &"
          highlightedWord="Elevate Comfort"
          description="We reinvented the dental visit from the ground up: tranquil clinical suites, painless modern anesthesia, and cutting-edge 3D dentistry that respects your time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Operatory Room Image & Feature Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="/images/operatory.jpg"
                  alt="Modern Smile Dental Care operatory room in Butwal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-28 text-white z-0">
                <Badge
                  variant="solid-teal"
                  className="mb-2.5 font-bold tracking-wider shadow-md bg-[#0d9488] text-white border-teal-500/40"
                  icon={<Sparkles className="w-3.5 h-3.5 text-teal-200" />}
                >
                  Modern Spa Atmosphere
                </Badge>
                <h4 className="text-xl font-bold">Panoramic Garden View Suites</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Enjoy noise-canceling Bose headphones, ceiling Netflix screens, and heated lumbar support chairs during every procedure.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bento Grid of 4 Perks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clinicPerks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {getPerkIcon(perk.icon)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {perk.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comfort Amenities Checklist Bar */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="text-center sm:text-left mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0d9488]">
              Included With Every Appointment
            </h4>
            <p className="text-lg font-bold text-slate-900">
              Complimentary Comfort Amenities for All Patients
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
              <span>Bose Noise-Canceling Audio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0" />
              <span>Ceiling Smart TV & Netflix</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0891b2] shrink-0" />
              <span>Heated Aromatherapy Towels</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0891b2] shrink-0" />
              <span>Organic Lip Balm & Beverage Bar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
