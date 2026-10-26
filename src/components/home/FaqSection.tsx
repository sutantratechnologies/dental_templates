"use client";

import React, { useState } from "react";
import { faqData } from "@/data/clinicData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { clinicInfo } from "@/data/clinicData";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeVariant="cyan"
          title="Everything You Need to Know Before"
          highlightedWord="Your Visit"
          description="Clear answers regarding dental insurance, gentle pain management, scheduling, and emergency triage."
        />

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0d9488] shrink-0" />
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0d9488]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions bar */}
        <div className="mt-12 text-center p-6 bg-teal-50/70 border border-teal-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">Have a specific clinical or insurance question?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Our patient coordinators are ready to verify your coverage directly.</p>
          </div>
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`}
            className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shrink-0 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {clinicInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
