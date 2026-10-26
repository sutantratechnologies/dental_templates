import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, Star, CheckCircle, ArrowRight } from "lucide-react";

export const SmileTransformation: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/60 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="teal-subtle">
                Real Patient Transformation
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                "I spent years feeling conscious of my smile. Smile Dental Care gave me my{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                  confidence back.
                </span>"
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                After a gentle digital consultation at Milan Chowk, Puja Gurung chose our aesthetic ceramic treatment. Custom designed to match her natural facial symmetry, tooth dimensions, and natural enamel shade.
              </p>

              {/* Review Quote Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-400 ml-2">Verified Patient • Tilottama</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  "The 3D preview let me see my new smile before we even started. The doctors were exceptionally gentle and caring throughout the process."
                </p>
                <div className="text-[11px] text-slate-400">
                  — <span className="text-white font-semibold">Puja Gurung</span>, Tilottama, Rupandehi
                </div>
              </div>

              {/* Transformation Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Only 2 Relaxing Appointments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Stain-Proof Ceramic Glass</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>3D Digital Trial Smile</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>10-Year Comprehensive Warranty</span>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="secondary" size="lg" href="/services#cosmetic-veneers" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Cosmetic Smile Makeovers
                </Button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/patient-smile.jpg"
                    alt="Radiant healthy white smile after Smile Dental Care treatment in Butwal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-teal-300 border border-teal-500/30">
                    Post-Treatment Result
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
