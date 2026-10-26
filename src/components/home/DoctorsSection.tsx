"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppointmentModal } from "@/components/booking/AppointmentModal";
import { GraduationCap, Award, CalendarCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const DoctorsSection: React.FC = () => {
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState<string | undefined>(undefined);

  return (
    <>
      <section className="py-20 bg-white" id="doctors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Meet The Specialists"
            badgeVariant="teal"
            title="Clinicians Who Truly Care About"
            highlightedWord="Your Comfort"
            description="Our NMC-registered dental surgeons bring top medical university training, advanced implantology experience, and an artist's eye for natural aesthetic balance to Butwal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {doctorsData.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Image Header */}
                  <div className="relative h-72 sm:h-80 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Floating Experience Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md">
                      {doctor.experienceYears}+ Years Experience
                    </div>

                    {/* Specialty on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider block">
                        {doctor.role}
                      </span>
                      <h3 className="text-2xl font-bold">{doctor.name}</h3>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0891b2] bg-cyan-50/70 p-2.5 rounded-xl border border-cyan-100">
                      <Award className="w-4 h-4 text-[#0891b2] shrink-0" />
                      <span>{doctor.credentials}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {doctor.bio}
                    </p>

                    {/* Education */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Education & Credentials
                      </span>
                      <ul className="space-y-1">
                        {doctor.education.map((edu, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <GraduationCap className="w-3.5 h-3.5 text-[#0d9488] shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 block">Available Days:</span>
                    <span>{doctor.daysAvailable.join(", ")}</span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedDoctorForModal(doctor.id)}
                    icon={<CalendarCheck className="w-4 h-4" />}
                  >
                    Book with {doctor.name.split(",")[0].replace("Dr. ", "")}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0d9488] hover:text-[#0f766e] transition-colors"
            >
              <span>Learn more about our dental team and clinical philosophy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal with Selected Doctor */}
      <AppointmentModal
        isOpen={!!selectedDoctorForModal}
        doctorId={selectedDoctorForModal}
        onClose={() => setSelectedDoctorForModal(undefined)}
      />
    </>
  );
};
