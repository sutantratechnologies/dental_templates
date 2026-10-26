import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { connection } from "next/server";
import { clinicInfo, servicesData } from "@/data/clinicData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowRight } from "lucide-react";

async function CopyrightYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Top Pre-Footer Bar */}
      <div className="bg-gradient-to-r from-[#0d9488]/20 via-[#0891b2]/20 to-[#0d9488]/20 border-b border-slate-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-lg shadow-teal-900/40">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Need Immediate Dental Assistance in Butwal?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Our on-call dental surgeon is available for acute toothache, swelling, and accident trauma.
              </p>
            </div>
          </div>
          <a
            href={`tel:${clinicInfo.emergencyPhone.replace(/[^0-9*+]/g, "")}`}
            className="inline-flex items-center gap-2 bg-[#0891b2] hover:bg-[#0e7490] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-cyan-900/30"
          >
            <span>Emergency Line: {clinicInfo.emergencyPhone}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white/95 px-3.5 py-2 rounded-2xl inline-flex items-center shadow-md hover:bg-white transition-colors">
                <Image
                  src="/logo.png"
                  alt="Smile Dental Care - Butwal"
                  width={1097}
                  height={309}
                  className="h-9 sm:h-10 w-auto object-contain"
                  style={{ width: "auto" }}
                />
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Lumbini Province&apos;s trusted dental clinic and implant center. Combining high-precision digital dentistry with gentle, painless care at Milan Chowk, Butwal.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>{clinicInfo.address}, {clinicInfo.city}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#0891b2] shrink-0" />
                <span>Appointments: {clinicInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>{clinicInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Quick Navigation
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Treatments & Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Our Studio</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors">Meet the Doctors</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors text-teal-400 font-medium">Book Appointment</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Directions & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Treatments
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Accreditations */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Opening Hours
            </h5>
            <ul className="space-y-2 text-xs">
              {clinicInfo.hours.map((h, idx) => (
                <li key={idx} className="flex flex-col border-b border-slate-900 pb-1.5">
                  <span className="text-slate-300 font-medium">{h.days}</span>
                  <span className="text-slate-500">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0d9488] shrink-0" />
              <span>NMC Registered Specialists & Autoclave Class-B Sterilization</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <p>© <Suspense fallback={<span>2026</span>}><CopyrightYear /></Suspense> Smile Dental Care & Implant Center, Butwal, Nepal. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>
              Developed by:{" "}
              <a
                href="https://sutantratechnology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors hover:underline"
              >
                Sutantra Technologies
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-400">Patient Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400">Treatment Guarantee</Link>
            <Link href="/contact" className="hover:text-slate-400">Contact Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
