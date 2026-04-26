export function CtaSection() {
  return (
    <div className="w-full bg-[#030303] text-white flex flex-col items-center justify-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative blurred background orb */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6116c4] rounded-full blur-[180px] opacity-[0.15] pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-6 md:px-8 z-10">
        
        {/* Main CTA Card */}
        <div className="w-full relative overflow-hidden rounded-[32px] md:rounded-[48px] px-8 py-28 md:py-40 flex flex-col items-center text-center border border-white/[0.05] bg-[#0A0A0A]">
          {/* Ambient Background Gradient for the CTA - much smoother, deep mesh gradient feel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#8C3DFF] via-[#431289] to-[#0A0A0A] opacity-40"></div>
          
          {/* Soft inner glow */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] rounded-[48px]"></div>

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <h2 className="text-5xl md:text-[84px] font-medium tracking-[-0.04em] leading-[1.1] mb-8 drop-shadow-lg">
              Encrypt the web.
            </h2>
            <p className="text-[17px] md:text-[20px] text-[#A1A1AA] mb-12 max-w-[540px] font-normal leading-[1.6]">
              Join engineering teams all over the world who protect their most sensitive data with Evervault.
            </p>
            <a href="#get-started" className="bg-white text-[#030303] px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#eaeaea] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center min-w-[160px]">
              Get started
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16 py-16 border-t border-white/[0.06] mt-24 text-[14px] text-[#A1A1AA]">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
             <div className="flex items-center gap-2 mb-2">
                 <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                 </div>
                 <span className="font-semibold text-white text-xl tracking-tight">evervault</span>
             </div>
             <p className="max-w-[240px] leading-[1.6]">© 2026 Evervault Inc. All rights reserved.</p>
             <div className="flex items-center gap-2.5 mt-2 bg-[#111] border border-white/10 w-max px-3 py-1.5 rounded-full">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                 <span className="text-[12px] font-medium text-neutral-300">All systems normal</span>
             </div>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-white font-semibold text-[13px] tracking-wide mb-2 uppercase">Company</h4>
             <a href="#blog" className="hover:text-white transition-colors duration-300">Blog</a>
             <a href="#careers" className="hover:text-white transition-colors duration-300">Careers</a>
             <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
             <a href="#customers" className="hover:text-white transition-colors duration-300">Customers</a>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-white font-semibold text-[13px] tracking-wide mb-2 uppercase">Resources</h4>
             <a href="#docs" className="hover:text-white transition-colors duration-300">Documentation</a>
             <a href="#papers" className="hover:text-white transition-colors duration-300">Papers</a>
             <a href="#press" className="hover:text-white transition-colors duration-300">Press</a>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-white font-semibold text-[13px] tracking-wide mb-2 uppercase">Legal</h4>
             <a href="#tos" className="hover:text-white transition-colors duration-300">Terms of Service</a>
             <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
             <a href="#cookies" className="hover:text-white transition-colors duration-300">Cookies Policy</a>
             <a href="#dpa" className="hover:text-white transition-colors duration-300">Data Processing</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
