import { motion } from "motion/react";
import { 
  Lock, 
  ShieldCheck, 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  ChevronRight,
  User
} from "lucide-react";

export default function ClientPortal() {
  return (
    <section id="portal" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Client Portal</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
              Real-Time Access to Your <br />
              <span className="text-primary">Financial Health</span>
            </h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Our secure, HIPAA-compliant portal gives you full visibility into your revenue cycle. Track claims, view performance metrics, and access custom reports 24/7 from any device.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <LayoutDashboard size={20} />, title: "Live Revenue Dashboard", text: "Track collections and aging A/R in real-time." },
                { icon: <FileText size={20} />, title: "Custom Reporting", text: "Generate detailed financial reports with one click." },
                { icon: <ShieldCheck size={20} />, title: "Secure Communication", text: "HIPAA-compliant messaging with your account manager." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-secondary">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:opacity-90 transition-all flex items-center gap-2">
                Access Portal
                <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
                <Lock size={14} className="text-accent" />
                256-bit SSL Encryption
              </div>
            </div>
          </motion.div>

          {/* Portal Mockup UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary rounded-[2.5rem] p-4 shadow-2xl border border-white/10 relative z-10">
              <div className="bg-white rounded-[2rem] overflow-hidden flex h-[500px]">
                {/* Sidebar */}
                <div className="w-16 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-6 gap-8">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">Y</div>
                  <div className="flex flex-col gap-6 text-slate-400">
                    <LayoutDashboard size={20} className="text-primary" />
                    <BarChart3 size={20} />
                    <FileText size={20} />
                    <Settings size={20} />
                  </div>
                  <div className="mt-auto">
                    <LogOut size={20} className="text-slate-300" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-y-auto">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-secondary">Revenue Overview</h4>
                      <p className="text-xs text-slate-400">Updated 2 minutes ago</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                        <User size={16} />
                      </div>
                      <div className="text-xs font-bold text-secondary">Dr. Mitchell</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <div className="text-[10px] font-bold text-primary uppercase mb-1">Total Collections</div>
                      <div className="text-lg font-bold text-secondary">$84,250</div>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10">
                      <div className="text-[10px] font-bold text-accent uppercase mb-1">Clean Claim Rate</div>
                      <div className="text-lg font-bold text-secondary">99.9%</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Activity</div>
                    {[
                      { title: "Claim #8421 Submitted", status: "Processing", time: "10:45 AM" },
                      { title: "Payment Posted - BCBS", status: "Completed", time: "09:30 AM" },
                      { title: "Denial Resolved - Aetna", status: "Completed", time: "Yesterday" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                        <div>
                          <div className="text-xs font-bold text-secondary">{item.title}</div>
                          <div className="text-[10px] text-slate-400">{item.time}</div>
                        </div>
                        <div className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                          item.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-secondary">HIPAA Secure</div>
                <div className="text-xs text-slate-400">End-to-end encryption</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
