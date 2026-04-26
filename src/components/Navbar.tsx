import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
      <div className="flex w-full items-center justify-between max-w-[1400px] mx-auto pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Shield className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          <span className="font-semibold text-[17px] tracking-tight text-white">evervault</span>
        </div>

        {/* Center Pill Nav */}
        <div className={`hidden md:flex items-center gap-[2px] bg-[#111111]/80 border border-white/[0.08] rounded-full px-1.5 py-1.5 backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-[#111111]/95 shadow-[0_0_20px_rgba(0,0,0,0.5)]" : ""}`}>
          {["Home", "Use Cases", "Customers", "Pricing", "Blog", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-1.5 text-[13px] font-medium text-[#A1A1AA] hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-6">
          <a href="#login" className="text-[14px] font-medium text-[#A1A1AA] hover:text-white transition-colors">
            Log in
          </a>
          <a href="#get-started" className="px-4 py-1.5 text-[14px] font-medium text-black bg-white rounded-full hover:bg-[#e6e6e6] transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
