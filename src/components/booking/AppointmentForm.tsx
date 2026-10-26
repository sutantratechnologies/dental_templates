"use client";

import React, { useState, useEffect } from "react";
import { servicesData, doctorsData, clinicInfo } from "@/data/clinicData";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles, AlertCircle } from "lucide-react";

interface AppointmentFormProps {
  initialServiceId?: string;
  initialDoctorId?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialServiceId = "",
  initialDoctorId = "",
  onSuccess,
  compact = false,
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceId || servicesData[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctorId || "any");
  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [hasDentalAnxiety, setHasDentalAnxiety] = useState(false);
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "01:30 PM",
    "02:45 PM",
    "04:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast booking confirmation
    setTimeout(() => {
      const randomCode = "LD-" + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(randomCode);
      setIsSubmitting(false);
      setIsConfirmed(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setPatientName("");
    setPatientEmail("");
    setPatientPhone("");
    setNotes("");
  };

  if (isConfirmed) {
    const serviceObj = servicesData.find((s) => s.id === selectedService);
    const doctorObj = doctorsData.find((d) => d.id === selectedDoctor);

    return (
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-100 shadow-xl text-center">
        <div className="w-16 h-16 bg-teal-50 text-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Booking Confirmed
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-3">
          You are all set, {patientName || "Valued Patient"}!
        </h3>
        <p className="text-slate-600 mt-2 text-sm max-w-md mx-auto">
          We have reserved your consultation. A confirmation and calendar invite have been sent to your email.
        </p>

        {/* Details Card */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Booking Reference:</span>
            <span className="font-mono font-bold text-[#0d9488]">{confirmationCode}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Service:</span>
            <span className="font-medium text-slate-900">{serviceObj?.title || "Dental Consultation"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Specialist:</span>
            <span className="font-medium text-slate-900">{doctorObj?.name || "First Available Specialist"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Date & Time:</span>
            <span className="font-medium text-slate-900">{selectedDate || "Next Available Slot"} at {selectedTime}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Clinic Location:</span>
            <span className="font-medium text-slate-900 text-right">{clinicInfo.address}</span>
          </div>
        </div>

        {hasDentalAnxiety && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs flex items-center gap-2 text-left">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Gentle care flag noted! Our team will prepare extra comforting amenities and gentle anesthesia options for your visit.</span>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" onClick={handleReset} size="sm">
            Book Another Visit
          </Button>
          <Button variant="outline" href={`tel:${clinicInfo.phone.replace(/[^0-9*+]/g, "")}`} size="sm">
            Call Clinic: {clinicInfo.phone}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${
        compact ? "p-4 sm:p-6" : "p-6 sm:p-8"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-[#0d9488] rounded-full inline-block"></span>
          Book Your Dental Appointment
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Instant online scheduling with zero pre-payment required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Service Select */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0d9488]" />
            Select Treatment / Concern
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 bg-slate-50/50"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.id}>
                {svc.title} ({svc.priceEstimate})
              </option>
            ))}
          </select>
        </div>

        {/* Doctor Select */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#0891b2]" />
            Preferred Specialist
          </label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 bg-slate-50/50"
          >
            <option value="any">Any Available Specialist (Fastest)</option>
            {doctorsData.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} - {doc.specialty.split("&")[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Preferred Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#0d9488]" />
            Preferred Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            min={minDate || undefined}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 bg-slate-50/50"
          />
        </div>

        {/* Preferred Time Slot */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#0891b2]" />
            Convenient Time Slot
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {timeSlots.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1 text-xs font-medium rounded-lg border transition-all text-center ${
                  selectedTime === time
                    ? "bg-[#0d9488] text-white border-[#0d9488] shadow-sm shadow-teal-700/20 font-semibold"
                    : "bg-white text-slate-700 border-slate-200 hover:border-teal-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Information */}
      <div className="border-t border-slate-100 pt-4 mt-4 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Patient Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="e.g. Jessica Taylor"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                placeholder="(555) 000-0000"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email Address (for confirmation)</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="email"
              placeholder="jessica@example.com"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              required
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
            />
          </div>
        </div>

        {/* Anxiety Checkbox */}
        <label className="flex items-start gap-2.5 p-3 rounded-xl bg-teal-50/60 border border-teal-100 cursor-pointer hover:bg-teal-50 transition-colors">
          <input
            type="checkbox"
            checked={hasDentalAnxiety}
            onChange={(e) => setHasDentalAnxiety(e.target.checked)}
            className="mt-0.5 rounded text-[#0d9488] focus:ring-[#0d9488] h-4 w-4"
          />
          <div className="text-xs">
            <span className="font-semibold text-teal-900 block">
              I experience dental anxiety / need gentle extra care
            </span>
            <span className="text-teal-700/80 block">
              We provide comforting amenities, nitrous sedation, and unhurried appointments.
            </span>
          </div>
        </label>
      </div>

      <div className="mt-6 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<CheckCircle2 className="w-4 h-4" />}
        >
          {isSubmitting ? "Reserving Slot..." : "Confirm & Reserve Appointment"}
        </Button>
        <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3 text-[#0d9488]" />
          No credit card required. Free cancellations up to 24 hours prior.
        </p>
      </div>
    </form>
  );
};
