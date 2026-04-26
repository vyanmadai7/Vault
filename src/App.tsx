/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CustomerGrid } from "./components/CustomerGrid";
import { CtaSection } from "./components/CtaSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <CustomerGrid />
      <CtaSection />
    </div>
  );
}
