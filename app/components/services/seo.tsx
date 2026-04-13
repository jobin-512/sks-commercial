"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, DollarSign, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { seoPackages, PackageValue } from "../data/seoPackages";

const packageColors: Record<string, { badge: string; border: string; glow: string; btn: string; tab: string }> = {
  Silver: {
    badge: "bg-gray-300 text-gray-800",
    border: "border-gray-400/40",
    glow: "shadow-gray-400/20",
    btn: "bg-gray-400 hover:bg-gray-300 text-gray-900",
    tab: "border-gray-400 text-gray-300",
  },
  Gold: {
    badge: "bg-yellow-400 text-yellow-900",
    border: "border-yellow-400/50",
    glow: "shadow-yellow-400/20",
    btn: "bg-yellow-400 hover:bg-yellow-300 text-yellow-900",
    tab: "border-yellow-400 text-yellow-300",
  },
  Platinum: {
    badge: "bg-indigo-300 text-indigo-900",
    border: "border-indigo-300/40",
    glow: "shadow-indigo-300/20",
    btn: "bg-indigo-400 hover:bg-indigo-300 text-white",
    tab: "border-indigo-300 text-indigo-300",
  },
  Diamond: {
    badge: "bg-cyan-300 text-cyan-900",
    border: "border-cyan-300/50",
    glow: "shadow-cyan-300/20",
    btn: "bg-cyan-400 hover:bg-cyan-300 text-cyan-900",
    tab: "border-cyan-300 text-cyan-300",
  },
};

const packageEmojis: Record<string, string> = {
  Silver: "🥈",
  Gold: "🥇",
  Platinum: "💎",
  Diamond: "💠",
};

function ValueBadge({ value }: { value: PackageValue }) {
  if (value === true) {
    return <CheckCircle2 className="w-5 h-5 text-[#5B61F6] flex-shrink-0" />;
  }
  if (value === false) {
    return <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />;
  }
  if (value === "$") {
    return (
      <span className="flex items-center gap-0.5 text-emerald-400 font-bold text-sm flex-shrink-0">
        <DollarSign className="w-4 h-4" /> Add-on
      </span>
    );
  }
  return <span className="font-bold text-[#5B61F6] text-sm flex-shrink-0">{value}</span>;
}

function SectionBlock({
  section,
  accentColor,
}: {
  section: { title: string; items?: { label: string; value: PackageValue }[]; subsections?: { title: string; items: { label: string; value: PackageValue }[] }[] };
  accentColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#181828] hover:bg-[#1e1e38] transition-colors duration-200 text-left"
      >
        <span className="font-semibold text-white text-sm">{section.title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#10101A] px-4 py-3 space-y-2">
              {section.items?.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-gray-300 text-xs leading-snug">{item.label}</span>
                  <ValueBadge value={item.value} />
                </div>
              ))}
              {section.subsections?.map((sub, sIdx) => (
                <div key={sIdx} className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                    {sub.title}
                  </p>
                  {sub.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 text-xs leading-snug">{item.label}</span>
                      <ValueBadge value={item.value} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SEOPackages() {
  const [activePackage, setActivePackage] = useState(1); // Gold by default

  return (
    <section
      id="packages"
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ background: "radial-gradient(circle at 20% 40%, #1a1060 0%, #08060F 75%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#171629] border border-[#3D43D4]/30 text-[#5B61F6] text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            SEO Packages Built for Growth
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your ambition. Every package is backed by proven strategies, expert execution, and measurable results.
          </p>
        </motion.div>

        {/* Package Tabs — Mobile */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 md:hidden">
          {seoPackages.map((pkg, idx) => {
            const colors = packageColors[pkg.name];
            return (
              <button
                key={pkg.name}
                onClick={() => setActivePackage(idx)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm border transition-all duration-200 ${
                  activePackage === idx
                    ? `${colors.btn} border-transparent`
                    : `bg-transparent border-white/30 text-white/70 hover:bg-white/5`
                }`}
              >
                {packageEmojis[pkg.name]} {pkg.name}
              </button>
            );
          })}
        </div>

        {/* Cards Grid — Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoPackages.map((pkg, idx) => {
            const colors = packageColors[pkg.name];
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl border ${colors.border} bg-[#10101A] shadow-xl ${colors.glow} flex flex-col overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#3D43D4] text-white text-xs font-bold text-center py-1 tracking-widest uppercase">
                    <Zap className="inline w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                )}
                {/* Card Header */}
                <div className={`px-6 pt-${pkg.popular ? "8" : "6"} pb-6 border-b border-white/10`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{packageEmojis[pkg.name]}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>{pkg.name}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-white">${pkg.price.toLocaleString()}</span>
                    <span className="text-gray-400 text-sm ml-1">/ month</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[#5B61F6] font-bold text-lg">{pkg.keywords}</div>
                      <div className="text-gray-400 text-xs">Keywords</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[#5B61F6] font-bold text-lg">{pkg.landingPages}</div>
                      <div className="text-gray-400 text-xs">Pages</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[#5B61F6] font-bold text-lg">{pkg.backlinks}</div>
                      <div className="text-gray-400 text-xs">Backlinks</div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-5 w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${colors.btn}`}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
                {/* Sections */}
                <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto max-h-[520px] custom-scrollbar">
                  {pkg.sections.map((section, sIdx) => (
                    <SectionBlock key={sIdx} section={section} accentColor={pkg.accentColor} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single card view — Mobile */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {seoPackages.map((pkg, idx) =>
              idx === activePackage ? (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border ${packageColors[pkg.name].border} bg-[#10101A] shadow-xl overflow-hidden`}
                >
                  {pkg.popular && (
                    <div className="bg-[#3D43D4] text-white text-xs font-bold text-center py-1 tracking-widest uppercase">
                      <Zap className="inline w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="px-6 pt-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{packageEmojis[pkg.name]}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${packageColors[pkg.name].badge}`}>
                        {pkg.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-4xl font-extrabold text-white">${pkg.price.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm ml-1">/ month</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[#5B61F6] font-bold text-lg">{pkg.keywords}</div>
                        <div className="text-gray-400 text-xs">Keywords</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[#5B61F6] font-bold text-lg">{pkg.landingPages}</div>
                        <div className="text-gray-400 text-xs">Pages</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-[#5B61F6] font-bold text-lg">{pkg.backlinks}</div>
                        <div className="text-gray-400 text-xs">Backlinks</div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-5 w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${packageColors[pkg.name].btn}`}
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                  <div className="px-4 py-4 space-y-1">
                    {pkg.sections.map((section, sIdx) => (
                      <SectionBlock key={sIdx} section={section} accentColor={pkg.accentColor} />
                    ))}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#5B61F6]" />
            <span>Included</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-gray-600" />
            <span>Not Included</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Available as Add-on</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#5B61F6]">N</span>
            <span>Numeric Quantity</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
