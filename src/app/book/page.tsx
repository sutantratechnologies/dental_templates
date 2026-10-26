import React from "react";
import Image from "next/image";
import { AppointmentForm } from "@/components/booking/AppointmentForm";
import { clinicInfo } from "@/data/clinicData";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Clock, Phone, Sparkles, MapPin } from "lucide-react";

export default function BookingPage() {
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
            Real-Time Schedule
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Reserve Your Dental Visit in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
              Under 60 Seconds
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            No credit card required. Flexible rescheduling, upfront treatment verification, and complete anxiety-free care in Butwal.
          </p>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Booking Form */}
            <div className="lg:col-span-8">
              <AppointmentForm />
            </div>

            {/* Right Sidebar: Perks & Direct Assistance */}
            <div className="lg:col-span-4 space-y-6">
              {/* Need Immediate Help Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0d9488] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Prefer to Book by Phone?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our front desk coordinators can answer immediate insurance questions or schedule specialty consultations.
                </p>
                <a
                  href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0d9488] hover:text-[#0f766e] pt-1"
                >
                  <span>Call {clinicInfo.phone}</span>
                </a>
              </div>

              {/* Guarantees Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  The Smile Dental Care Guarantee
                </h4>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>On-Time Seating:</strong> We respect your valuable time with scheduled priority appointments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Pain-Free Treatment:</strong> Advanced micro-anesthesia means zero painful injections.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Transparent Fees:</strong> Upfront treatment estimates in Nepali Rupees with zero surprise charges.</span>
                  </li>
                </ul>
              </div>

              {/* Location Reminder */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <MapPin className="w-4 h-4 text-[#0d9488]" />
                  <span>Clinic Location</span>
                </div>
                <p>{clinicInfo.address}</p>
                <p>{clinicInfo.city}</p>
                <p className="text-[11px] text-teal-700 font-medium pt-1">
                  Dedicated free bike and car parking right in front of the clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
