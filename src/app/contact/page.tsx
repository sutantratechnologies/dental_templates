"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  CheckCircle2,
  Send,
  Car,
  Train,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Location{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0891b2]">
              Information
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Conveniently situated at Milan Chowk (Opposite Siddhartha Bank), Siddhartha Highway, Butwal with dedicated patient parking and direct highway access.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              {/* Emergency Banner */}
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-950 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#0891b2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">24/7 Dental Emergency Hotline</h4>
                  <p className="text-xs text-cyan-900 mt-1">
                    Severe toothache, broken restoration, or sports trauma? Call our emergency line directly:
                  </p>
                  <a
                    href={`tel:${clinicInfo.emergencyPhone.replace(/[^0-9*+]/g, "")}`}
                    className="inline-block mt-2 font-mono font-bold text-sm text-[#0891b2] hover:underline"
                  >
                    {clinicInfo.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* Clinic Direct Info */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">Clinic Details</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Address</span>
                      <span className="text-slate-600 text-xs sm:text-sm">
                        {clinicInfo.address}<br />
                        {clinicInfo.city}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0891b2] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Phone</span>
                      <a href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`} className="text-[#0891b2] font-semibold text-xs sm:text-sm hover:underline">
                        {clinicInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0d9488] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Email</span>
                      <span className="text-slate-600 text-xs sm:text-sm">{clinicInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Clock className="w-5 h-5 text-[#0d9488]" />
                  <span>Clinical Hours</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  {clinicInfo.hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between py-1.5 border-b border-slate-200/70 last:border-0">
                      <span className="font-medium text-slate-700">{h.days}</span>
                      <span className="text-slate-500 font-mono">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parking & Transit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Car className="w-4 h-4 text-[#0d9488]" />
                    <span>Free Dedicated Parking</span>
                  </div>
                  <p className="text-slate-600">Reserved parking for bikes, scooters, and cars right in front of the clinic.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Train className="w-4 h-4 text-[#0891b2]" />
                    <span>Highway & Transit</span>
                  </div>
                  <p className="text-slate-600">Directly on Siddhartha Highway, 2 minutes from Milan Chowk signal and Buspark.</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-teal-50 text-[#0d9488] rounded-full flex items-center justify-center mx-auto border border-teal-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you for contacting Smile Dental Care, Butwal. Our patient care coordinator will review your inquiry and reply via phone or email shortly.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "General Inquiry",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900">Send Us a Direct Message</h2>
                      <p className="text-slate-600 text-sm mt-1">
                        Questions about treatments, fees, or insurance coverage? We're here to assist.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Rivera"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Inquiry Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 bg-slate-50/50"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Insurance Verification">Insurance Verification</option>
                          <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Billing & Financing">Billing & Financing</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Message or Question</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you would like help with, any specific dental symptoms, or insurance carrier..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        icon={<Send className="w-4 h-4" />}
                      >
                        Send Inquiry
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
