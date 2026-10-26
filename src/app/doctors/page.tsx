"use client";

import React, { useState } from "react";
import Image from "next/image";
import { doctorsData } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  GraduationCap,
  Award,
  CalendarCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function DoctorsPage() {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);

  return (
    <>
      {/* Header */}
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
            Specialist Dental Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Your NMC-Registered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
              Dental Specialists
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Combining empathetic patient communication with postgraduate dental training (M.D.S.), surgical implant precision, and hundreds of five-star reviews in Butwal.
          </p>
        </div>
      </section>

      {/* Detailed Doctor Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {doctorsData.map((doc, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={doc.id}
                id={doc.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Doctor Image */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100">
                      <div className="relative h-96 sm:h-[440px] w-full">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488] block">
                            Clinical Experience
                          </span>
                          <span className="text-sm font-extrabold text-slate-900">
                            {doc.experienceYears}+ Years of Dedicated Practice
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Bio & Credentials */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#0891b2]" />
                        <span>{doc.role}</span>
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900">
                        {doc.name}
                      </h2>
                      <p className="text-sm font-semibold text-[#0d9488] mt-1">
                        Specialty: {doc.specialty}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {doc.bio}
                    </p>

                    {/* Education block */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#0d9488]" />
                        Education & Board Certifications
                      </h4>
                      <ul className="space-y-1.5 pt-1">
                        {doc.education.map((edu, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Available Days and Booking */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                      <div className="text-xs text-slate-600 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>Clinic Days: <strong>{doc.daysAvailable.join(", ")}</strong></span>
                      </div>

                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => setSelectedDoctorId(doc.id)}
                        icon={<CalendarCheck className="w-4 h-4" />}
                      >
                        Schedule with {doc.name.split(",")[0].replace("Dr. ", "")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />

      <AppointmentModal
        isOpen={!!selectedDoctorId}
        doctorId={selectedDoctorId}
        onClose={() => setSelectedDoctorId(undefined)}
      />
    </>
  );
}
