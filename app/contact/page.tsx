"use client";

import React, { useState } from "react";
import { Phone, Mail, Bike, Clock, Send, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Order Inquiry", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-neutral-600 font-light text-sm md:text-base">
            Have questions about catering, bulk orders, or spice levels? Drop us a line and the Mimi Spicy team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <h2 className="font-serif font-medium text-xl text-foreground mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-accent" />
                Contact Info
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-border text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Call / WhatsApp</p>
                    <a href="tel:+2348031234567" className="text-sm font-semibold text-[#140806] hover:text-accent transition-colors">
                      +234 (0) 803 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-border text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Email Support</p>
                    <a href="mailto:orders@mimispicyoffals.com" className="text-sm font-semibold text-[#140806] hover:text-accent transition-colors">
                      orders@mimispicyoffals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-border text-accent shrink-0">
                    <Bike size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Fulfillment</p>
                    <p className="text-sm font-medium text-neutral-600 leading-relaxed">
                      <strong>Delivery-Only Model</strong><br />
                      Dispatching out of Abuja.<br />
                      Serving all across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <h2 className="font-serif font-medium text-xl text-[#140806] mb-4 flex items-center gap-2">
                <Clock size={20} className="text-accent" />
                Dispatch Hours
              </h2>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500 font-light">Monday - Friday</span>
                  <span className="font-semibold text-[#140806]">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500 font-light">Saturday - Sunday</span>
                  <span className="font-semibold text-[#140806]">12:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Panel */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <Send size={24} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#140806] mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-neutral-500 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. A spice manager will review your submission and reply within a couple of hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-neutral-200 text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 cursor-pointer transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Chidi Oke"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] placeholder-neutral-400 focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 08031234567"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] placeholder-neutral-400 focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] placeholder-neutral-400 focus:outline-none focus:border-accent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Inquiry Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] bg-white focus:outline-none focus:border-accent transition-all"
                  >
                    <option value="Order Inquiry">Order & Delivery Inquiry</option>
                    <option value="Catering">Event Catering Packages</option>
                    <option value="Feedback">Spice Level Feedback</option>
                    <option value="Other">Other Issues</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Message Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] placeholder-neutral-400 focus:outline-none focus:border-accent resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 cursor-pointer flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Details..." : "Submit Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;