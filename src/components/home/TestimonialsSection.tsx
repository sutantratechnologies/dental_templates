import React from "react";
import { testimonialsData } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, CheckCircle, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Stories"
          badgeVariant="teal"
          title="Loved by Patients. Proven by"
          highlightedWord="Real Smiles"
          description="Read real, verified reviews from patients who transformed their dental health and confidence at Smile Dental Care Butwal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-100" />
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">{item.patientName}</h4>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#0d9488]" />
                    )}
                  </div>
                  <span className="text-xs text-[#0891b2] font-semibold block mt-0.5">
                    {item.treatment}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 max-w-xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 shadow-xs">
          <div>
            <div className="text-2xl font-extrabold text-[#0d9488]">4.9 / 5.0</div>
            <div className="text-xs text-slate-500">Google Reviews Rating</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl font-extrabold text-[#0891b2]">99.4%</div>
            <div className="text-xs text-slate-500">Patient Retention Rate</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl font-extrabold text-slate-900">100%</div>
            <div className="text-xs text-slate-500">Gentle Care Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};
