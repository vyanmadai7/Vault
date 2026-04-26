import { EvervaultCard } from "./EvervaultCard";
import { Activity, ShieldCheck, Bird, Crosshair, Fingerprint, CreditCard } from "lucide-react";

const data = [
  {
    logo: (
      <div className="flex items-center gap-2">
        <Activity className="w-8 h-8" strokeWidth={3} />
        <span className="text-3xl font-bold tracking-tighter">ness</span>
      </div>
    ),
    description: "Ness shipped their credit card product in record time with Evervault.",
    label: "PCI Compliance",
    colSpan: "md:col-span-1"
  },
  {
    logo: <span className="text-3xl font-semibold tracking-tight">Humaans</span>,
    description: "Humaans easily passes vendor audits from larger, more security-conscious customers.",
    label: "Credentials Encryption",
    colSpan: "md:col-span-1"
  },
  {
    logo: <Bird className="w-12 h-12" strokeWidth={1} fill="currentColor" />,
    description: "Swan builds customer trust by encrypting users' video files for virtual fitting rooms.",
    label: "File Encryption",
    colSpan: "md:col-span-1"
  },
  {
    logo: <span className="text-4xl font-bold tracking-tighter text-[#eaeaea]">Vital</span>,
    description: "Vital ensures customer privacy by keeping credentials encrypted at all times.",
    label: "Credentials Encryption",
    colSpan: "md:col-span-1"
  },
  {
    logo: (
      <div className="flex items-center gap-2">
        <Fingerprint className="w-10 h-10" strokeWidth={1.5} />
        <span className="text-3xl font-semibold">Okra</span>
      </div>
    ),
    description: "Okra protects credentials for online banking, assuring their customers' security.",
    label: "Credentials Encryption",
    colSpan: "md:col-span-1"
  },
  {
    logo: (
      <div className="flex items-center gap-2">
        <CreditCard className="w-8 h-8" />
        <span className="text-2xl tracking-tight font-medium">Bridgecard</span>
      </div>
    ),
    description: "How Bridgecard used Evervault to save 80%+ on their PCI DSS compliance audit.",
    label: "PCI Compliance",
    colSpan: "md:col-span-1"
  },
  // Row 3
  { logo: <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full border-[3px] border-white block"></span><span className="text-xl font-bold tracking-widest uppercase">Sorare</span></div>, colSpan: "md:col-span-1" },
  { logo: <span className="text-2xl font-serif italic text-neutral-300">stitch</span>, colSpan: "md:col-span-1" },
  { logo: <span className="text-3xl font-black italic tracking-tighter text-white">VISA</span>, colSpan: "md:col-span-1" },
  // Row 4
  { logo: <span className="text-3xl font-medium tracking-tight">MELI</span>, colSpan: "md:col-span-1" },
  { logo: <span className="text-2xl font-semibold text-neutral-200">Safety Wing</span>, colSpan: "md:col-span-1" },
  { logo: <span className="text-xl font-serif uppercase tracking-widest text-neutral-400">The Irish Times</span>, colSpan: "md:col-span-1" },
  // Row 5
  { logo: <div className="flex items-center gap-2"><span className="w-1 h-4 bg-white block"></span><span className="text-2xl font-bold tracking-tighter">edge</span></div>, colSpan: "md:col-span-1" },
  { logo: <span className="text-2xl font-normal lowercase tracking-tight">encore</span>, colSpan: "md:col-span-1" },
  { logo: <span className="text-3xl font-bold font-mono tracking-tighter">kennek</span>, colSpan: "md:col-span-1" },
];

export function CustomerGrid() {
  return (
    <div id="customers" className="w-full bg-[#030303] flex justify-center py-10 px-4 md:px-8 mt-[-10vh] relative z-20">
      <div className="max-w-[1240px] w-full">
        {/* We use a thin 1px gap on a dark gray bg to simulate the exact 1px grid borders of Evervault */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-[6px] overflow-hidden shadow-2xl">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-[#060606] hover:bg-[#080808] transition-colors duration-500 flex flex-col items-center justify-center relative group ${item.colSpan} ${item.description ? 'min-h-[360px] p-10' : 'min-h-[160px] p-4'}`}
            >
               {/* 
                  Only show the complex Evervault Card matrix effect on hover.
                  We wrap it in absolute so the text layout ignores it.
               */}
               <div className="absolute inset-0 z-0">
                  <EvervaultCard className="w-full h-full border-none">
                     <span className="sr-only">Hover Matrix Effect</span>
                  </EvervaultCard>
               </div>

               {/* Content wrapper layered above the interactive card */}
               <div className={`w-full h-full flex flex-col pointer-events-none z-20 ${item.description ? 'justify-between items-start' : 'justify-center items-center'}`}>
                 <div className={`flex items-center justify-center w-full text-white/90 ${item.description ? 'mt-6' : 'opacity-60 group-hover:opacity-100 transition duration-500'}`}>
                    {item.logo}
                 </div>
                 
                 {item.description && (
                   <div className="mt-8 flex flex-col gap-3 relative z-20 text-center w-full md:text-left">
                     <p className="text-[14px] text-[#A1A1AA] leading-[1.6] font-normal tracking-wide">
                       {item.description}
                     </p>
                     <span className="text-[11px] uppercase tracking-[0.2em] text-[#A874FA] font-semibold mt-2 opacity-90">
                       {item.label}
                     </span>
                   </div>
                 )}
               </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
