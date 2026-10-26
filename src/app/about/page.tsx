import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  Heart,
  ShieldCheck,
  Cpu,
  Sparkles,
  Award,
  CheckCircle2,
  CalendarCheck,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
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
            Our Story & Mission
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
            Redefining Dental Care Through Empathy &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
              Digital Artistry
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Founded with a commitment to gentle dentistry, Smile Dental Care bridges the gap between warm hospitality, painless care, and state-of-the-art clinical technology in Butwal.
          </p>
        </div>
      </section>

      {/* Story & Clinic Split Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Stack */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/images/operatory.jpg"
                    alt="Smile Dental Care modern operatory suite in Butwal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-5 rounded-2xl shadow-xl border border-teal-100 max-w-sm">
                <p className="text-xs italic text-slate-600">
                  "Nobody in Rupandehi should ever delay dental health because of fear or past pain. We created Smile Dental Care to make dental visits painless and reassuring."
                </p>
                <span className="text-xs font-bold text-slate-900 block mt-2">
                  — Dr. Roshan Sharma, Chief Dental Surgeon
                </span>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                Why Smile Dental Care Was Founded
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Modern dental healthcare that treats the whole person with empathy.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                For years, dental treatments in Nepal carried the reputation of painful extractions and stressful waiting rooms. At Smile Dental Care, our mission was to fundamentally upgrade that experience for families across Butwal and Lumbini Province.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We equipped our Milan Chowk clinic with digital 3D intraoral scanners, pain-free anesthesia delivery, rotary root canal systems, and strict Class-B autoclave sterilization. Most importantly, our team is committed to gentle, unhurried care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0d9488] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Patient Autonomy</h4>
                    <p className="text-xs text-slate-500 mt-0.5">You always control pacing with our easy pause signals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#0891b2] flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">3D Precision Lab</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Micron-accurate digital imaging with no messy impression trays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Standards"
            badgeVariant="teal"
            title="The Four Pillars of Our"
            highlightedWord="Clinical Practice"
            description="Our uncompromising standards guide every consultation, diagnosis, and surgical procedure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Aesthetic Harmony</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We craft smiles that match facial proportion, lip contour, and skin undertones—never artificial or bulky.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Hospital-Grade Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Closed-loop autoclave sterilization, surgical HEPA filtration, and medical ozone water lines ensure absolute purity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Continuing Mastery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our doctors complete over 120 hours of advanced continuing education annually, double the state requirement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Honest Transparency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero aggressive sales tactics. We show you your high-res intraoral photos and explain all options clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
