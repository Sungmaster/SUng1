import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Download, Share2, Timer, Quote, Fullscreen } from 'lucide-react';

export const ResearchDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface-container-lowest min-h-screen border-x border-outline-variant max-w-6xl mx-auto shadow-sm"
    >
      <header className="px-16 pt-20 pb-12 border-b-2 border-primary/10 relative h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="bg-primary/5 text-primary font-black text-[10px] px-4 py-1 rounded-sm uppercase tracking-[0.25em]">
            Equities Strategy
          </div>
          <div className="text-on-surface-variant/60 font-bold text-[10px] uppercase tracking-widest">
            Published: October 24, 2023
          </div>
        </div>
        
        <h1 className="text-6xl font-black text-primary mb-10 max-w-5xl leading-[1.05] tracking-tighter">
          The Great Reallocation: Navigating Sector Rotation in a High-Yield Environment
        </h1>

        <div className="flex items-center gap-10 text-on-surface-variant flex-wrap">
          <div className="flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2XDXl2EXQn9lk0raqOWPA0pkZ2jj_WW2H2UrCDVu_5AkdYU3ciyXJ5dm2btblUh_43e_UBG4jBruU35tpIxyUQ452B8h-cOVYy_JNBBNCXA_4_kXww6gztzVsHbB1rm58X7HI7rOGW2zyufheyoT4fHLBQ7QuAi5oJJviKghJWXV2SJj_KD5qxki99PylG683gmRjFzmLvTVNhsZL7oGXRHCjytShcYhAlE3UY4afExAVaCMPShUJJjyPfGPP4IWsaTbAjNW0KcID" 
              className="w-14 h-14 rounded-full border border-outline-variant object-cover shadow-sm" 
              alt="Author" 
            />
            <div>
              <div className="font-extrabold text-sm text-on-surface tracking-tight">Dr. Jonathan Vance</div>
              <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Head of Macro Strategy</div>
            </div>
          </div>
          <div className="h-10 w-px bg-outline-variant hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-secondary-accent" />
            <span className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant/80">15 min read</span>
          </div>
          <div className="h-10 w-px bg-outline-variant hidden sm:block"></div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-primary hover:bg-primary/5 px-4 py-2 rounded-sm transition-all text-[10px] font-black uppercase tracking-widest border border-outline-variant">
              <Download className="w-3.5 h-3.5" /> PDF
            </button>
            <button className="flex items-center gap-2 text-primary hover:bg-primary/5 px-4 py-2 rounded-sm transition-all text-[10px] font-black uppercase tracking-widest border border-outline-variant">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 p-16">
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-6 border-b border-outline-variant pb-3">Contents</h3>
            <ul className="space-y-4 text-xs font-bold text-on-surface-variant/60 tracking-tight">
              <li><a href="#" className="text-secondary-accent hover:text-secondary-accent transition-colors font-black">Executive Summary</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">The Macro Context</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sector Analysis</a>
                <ul className="pl-4 mt-3 space-y-3 border-l border-outline-variant ml-1">
                  <li><a href="#" className="hover:text-primary transition-colors text-[10px]">Technology Resilience</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors text-[10px]">Industrial Renaissance</a></li>
                </ul>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Strategic Allocations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conclusion</a></li>
            </ul>
          </div>
        </aside>

        <article className="lg:col-span-9 space-y-12">
          <section className="bg-surface-container-low p-10 border border-outline-variant/30 rounded shadow-inner">
            <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              Executive Summary
            </h2>
            <p className="mb-6 text-on-surface-variant leading-[1.8] text-lg font-medium">
              As central banks signal a "higher for longer" regime, the traditional 60/40 portfolio faces unprecedented stress. Our analysis indicates a structural shift underway, prioritizing companies with robust free cash flow yields and pricing power over speculative growth. We forecast a significant rotation out of consumer discretionary into specialized industrials and defensive tech over the next 18 months.
            </p>
            <ul className="space-y-4 text-on-surface-variant font-bold text-sm">
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent mt-2 shrink-0"></span>
                <span><strong className="text-primary">Key Insight 1:</strong> Yield curve normalization will selectively benefit regional financials over large-cap institutions.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent mt-2 shrink-0"></span>
                <span><strong className="text-primary">Key Insight 2:</strong> Capex cycles in the semiconductor supply chain are bottoming out.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent mt-2 shrink-0"></span>
                <span><strong className="text-primary">Action:</strong> Overweight Industrials (+5%), Underweight Consumer Discretionary (-3%).</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-4xl font-black text-primary mb-8 border-b-2 border-outline-variant/20 pb-4 tracking-tighter">The Macro Context</h2>
            <p className="mb-8 leading-[1.8] text-lg text-on-surface-variant">
              The global economy is currently navigating a complex transition. Historically, high-yield environments precipitate a contraction in valuation multiples, particularly for long-duration assets. Unlike previous cycles, the current environment is defined by persistent fiscal stimulus and structural labor shortages.
            </p>

            <div className="my-12 border border-outline-variant rounded bg-white overflow-hidden shadow-sm">
              <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Historical Yield vs P/E Compression</h4>
                <Fullscreen className="w-4 h-4 text-outline cursor-pointer hover:text-primary transition-colors" />
              </div>
              <div className="p-12 relative h-[360px] flex items-end justify-between gap-6">
                {[45, 30, 85, 50, 40].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center group relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className={cn(
                        "w-full rounded-t-sm transition-all duration-300",
                        h === 85 ? "bg-secondary-accent shadow-[0_0_30px_rgba(184,115,51,0.3)]" : "bg-primary/20 group-hover:bg-primary/30"
                      )}
                    />
                    <span className="mt-4 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">
                      {['1999', '2007', '2023 (Est)', 'Proj 24', 'Proj 25'][i]}
                    </span>
                    {h === 85 && (
                      <div className="absolute -top-10 bg-secondary-accent text-white text-[10px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-widest whitespace-nowrap">
                        Current Peak
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-3 bg-surface-container-low text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 border-t border-outline-variant">
                Source: Cafe Capital Quantitative Research, Bloomberg Data
              </div>
            </div>
          </section>

          <div className="my-20 border-l-4 border-secondary-accent pl-12 py-6 bg-gradient-to-r from-secondary-accent/5 to-transparent">
            <p className="text-3xl font-black text-primary italic mb-6 leading-tight tracking-tight">
              "The market is mispricing the duration of restrictive policy. Investors must pivot from multiple expansion strategies to yield-and-growth compounding models."
            </p>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary-accent">— Investment Committee Consensus</p>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

