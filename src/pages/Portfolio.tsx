import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Filter, Plus, PieChart, Building2, Sun, HeartPulse, Globe2 } from 'lucide-react';

const portfolios = [
  {
    title: 'Global Tech Innovators',
    category: 'Equity',
    description: 'A diversified portfolio of high-growth technology equities focusing on AI and cloud infrastructure.',
    metric: '+14.2%',
    metricLabel: 'YTD Return',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0mmRipcteYo8lu4GC7C-v9tjHXxms8fUhTbltbzQxYZRBAwuc12P_AESoqICOXcU-DOkcG20vuoudvM9lzB7FCpGhytK1o_aa0lqjtX8hBQ804gmaGPnZu6kPuRG4_2gZnBwRMGHydC_uZ00J3qoQvvHmvN1IXovU1xtGSZJ0iYKP2Ar_Dq22hTLt4jzGTb8aYImgp9cOQvmRCVYXuVeEbJ2Ujky-L1wuFF88yutGP-68wE24GJrgwrIu9FS-jxBr7NnX67MPUvBt',
    accent: 'border-primary'
  },
  {
    title: 'Metropolitan Plaza REIT',
    category: 'Real Estate',
    description: 'Premium commercial office spaces in Tier-1 global financial districts with long-term tenant leases.',
    metric: '5.8%',
    metricLabel: 'Annual Yield',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkJv-O3190KiPOVQVRIEj4PwWDb6NNBfB1GHhFY_5nrbvMCiFCnOmMYvYg-ms04i71mjY2gw3SJ0TKtgCI97wFyDrCj2vOKgjTc-JJeYS-5gzJ-w1g-pmyO8yI48bGeU_xpoJ1YdYMoPOTCVg2_7uVf2gpNFUjR7lXW-I0Kjcf39wDx5EARllNvXZC8apPUPx8ZBcVSYGCb1gpsl7C3L8iTVyH2Yv35nGs6iigKr-2XhYpEz1XhBRDrCJpmoaIxIEt_kHJvrudx0UV',
    accent: 'border-secondary'
  },
  {
    title: 'Clean Energy Transition',
    category: 'Fund',
    description: 'Exchange-traded fund tracking leading global utility and technology companies in the renewable energy sector.',
    metric: '+9.4%',
    metricLabel: 'YTD Return',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqnngBBHJTlhF6043OhLgqcFP5mTQ_YtPzyTXDy414jftGSrPAZ09KXEd3YujUjlXXR6KgrUg08IVM587bZWExYWCFYiudskOl0ZFv3ReYKkiujESDtwcIot8teO1prvD4ydRHmBnd_wOkrmwNJMmff8bbtFKANcYjO3_Od5wFXZWnGu3Wkcq97jqyNOjpyljUnYJQW8sNo1PUw39P9brtZ5VvwbgcoWo2xzEI21YZfbjNxQr8AnsKKsJEmiqkq-Cyth6KmzhpdPt',
    accent: 'border-emerald-700'
  }
];

export const Portfolio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <header className="mb-12 flex justify-between items-end border-b border-outline-variant pb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Portfolio Gallery</h1>
          <p className="text-on-surface-variant/80 text-lg">A curated view of active holdings and performance metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2 border border-outline-variant font-bold text-sm uppercase tracking-widest rounded hover:bg-surface-container transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded hover:brightness-110 transition-all">
            <Plus className="w-4 h-4" /> New Investment
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-60 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-sm border border-outline-variant/30 text-primary">
                {item.category}
              </div>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
            </div>
            
            <div className="p-8 flex flex-col flex-1 gap-6">
              <div>
                <h3 className="text-2xl font-extrabold text-primary tracking-tight mb-3 group-hover:text-secondary-accent transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">{item.metricLabel}</div>
                  <div className="text-3xl font-black text-primary tracking-tighter">{item.metric}</div>
                </div>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary group-hover:bg-primary hover:text-white group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
