"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  User,
  Phone,
  Building2,
  Clock,
  MessageSquare,
  Monitor,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    purpose: "",
    meetingType: "online",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        purpose: "",
        meetingType: "online",
        preferredTime: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 text-center ${
              heroInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-slate-100 rounded-full">
              <Calendar size={16} className="text-slate-600" />
              <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">
                Schedule a Meeting
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[0.95] tracking-tight">
              Request a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                Meeting
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Please fill out the form below to request an appointment. My team
              will review your request and get back to you with a confirmed
              slot.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: Contact Information */}
              <div className="lg:col-span-2 bg-slate-900 p-10 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-10">
                    Contact Information
                  </h2>

                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:contact@sabinaakter.com"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          contact@sabinaakter.com
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Office
                        </p>
                        <p className="text-white leading-relaxed">
                          Level 6, 59 & 61, South Avenue,
                          <br />
                          Lotus Kamal Tower-2, Gulshan Ave,
                          <br />
                          Dhaka 1212.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-auto pt-20">
                    <p className="text-slate-400 italic text-sm leading-relaxed">
                      &quot;Time is the most valuable asset. Let&apos;s make the
                      most of it together.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 p-10 lg:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-slate-500">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Full Name"
                            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Email Address"
                            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone & Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Phone *
                        </label>
                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Phone Number"
                            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Organization *
                        </label>
                        <div className="relative">
                          <Building2
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Organization"
                            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Purpose of Meeting */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Purpose of Meeting *
                      </label>
                      <div className="relative">
                        <Clock
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="text"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleChange}
                          required
                          placeholder="Enter Purpose of Meeting"
                          className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Meeting Type & Preferred Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Meeting Type *
                        </label>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                meetingType: "online",
                              }))
                            }
                            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-semibold transition-all ${
                              formData.meetingType === "online"
                                ? "border-amber-500 bg-amber-50 text-amber-600"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <Monitor size={18} />
                            Online
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                meetingType: "physical",
                              }))
                            }
                            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-semibold transition-all ${
                              formData.meetingType === "physical"
                                ? "border-amber-500 bg-amber-50 text-amber-600"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <Users size={18} />
                            Physical
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            type="datetime-local"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={18}
                          className="absolute left-4 top-4 text-slate-400"
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Enter Your Message"
                          className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-amber-600/20"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
