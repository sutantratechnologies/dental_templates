import React from "react";
import { clinicInfo } from "@/data/clinicData";
import { Phone, Clock, MapPin, AlertCircle } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left: Location & Hours */}
        <div className="flex items-center flex-wrap gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
            <span className="hidden sm:inline">{clinicInfo.address},</span> {clinicInfo.city}
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#0891b2]" />
            Mon-Thu: 8AM-6:30PM | Fri: 8AM-5PM
          </span>
        </div>

        {/* Right: Emergency Hotline & Direct Call */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs ml-auto">
          <a
            href={`tel:${clinicInfo.emergencyPhone.replace(/[^0-9*+]/g, "")}`}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Emergency: {clinicInfo.emergencyPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
