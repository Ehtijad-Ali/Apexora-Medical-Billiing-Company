import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    specialty: "Primary Care",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || "Server returned a non-JSON response");
      }

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", org: "", email: "", phone: "", specialty: "Primary Care", message: "" });
      } else {
        setStatus("error");
        const msg = typeof data?.error === "string"
          ? data.error
          : (data?.error?.message || "Failed to send message. Please try again.");
        setErrorMessage(msg);
      }
    } catch (error) {
      console.error("Contact Error:", error);
      setStatus("error");
      const msg = error instanceof Error ? error.message : "A network error occurred.";
      setErrorMessage(msg);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* ... (keep decorative orbs) ... */}
      {/* Unique Effect: Floating Glass Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h3>
          <p className="text-slate-500 text-lg">
            Schedule a free consultation with Apexora's experts to learn how we can help your organization succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl font-bold text-secondary">+92 3122277448</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-bold text-secondary">info@apexoramedicalbilling.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold text-secondary">Zulfiqarabad, Gilgit-Baltistan, Pakistan</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-bold text-secondary">HIPAA Compliant</div>
                <div className="text-xs text-slate-400">Secure communication & data handling</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-white/20 relative"
          >
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. Our experts will contact you within 24 hours to schedule your consultation.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Organization</label>
                    <input 
                      required
                      name="org"
                      value={formData.org}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Practice Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Specialty</label>
                  <select 
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white"
                  >
                    <option>Primary Care</option>
                    <option>Pediatrics</option>
                    <option>Cardiology</option>
                    <option>Radiology</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium">
                    {errorMessage || "Failed to send message. Please try again or call us."}
                  </div>
                )}

                <button 
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-red-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Request Free Consultation
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-slate-400 mt-4">
                  We respect your privacy. HIPAA-conscious workflows and secure communication practices.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
