import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ArrowUp, Download, Info, Clock, ExternalLink } from 'lucide-react';

const stats = {
  'Market Cap': '125.4T',
  'Vol (Avg)': '2.4M',
  'P/E Ratio': '18.5',
  'EPS': '5,320',
  'Div Yield': '2.5%',
  '52W High': '102.00',
  '52W Low': '72.50',
  'Beta': '1.1'
};

const priceHistory = [
  { date: '2023-10-26', open: '97.80', high: '98.90', low: '97.50', close: '98.50', vol: '2,150,400', trend: 'up' },
  { date: '2023-10-25', open: '98.00', high: '98.20', low: '96.80', close: '97.25', vol: '3,420,100', trend: 'down' },
  { date: '2023-10-24', open: '96.50', high: '98.50', low: '96.50', close: '98.10', vol: '2,890,000', trend: 'up' },
];

export const StockDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 max-w-7xl mx-auto"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-on-surface-variant/60">
            <span>Technology</span>
            <span>•</span>
            <span>HOSE</span>
          </div>
          <div className="flex items-baseline gap-4">
            <h1 className="text-6xl font-black text-primary tracking-tighter">FPT</h1>
            <span className="text-2xl font-bold text-on-surface-variant/50">FPT Corporation</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-6xl font-black text-primary tracking-tighter">98.50</span>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded flex items-center gap-1 font-bold text-sm">
              <ArrowUp className="w-4 h-4" /> 1.25 (1.28%)
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-on-surface-variant/40">
            <Clock className="w-3.5 h-3.5" /> Last updated: Oct 26, 2023, 14:30
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-8 flex flex-col min-h-[500px]">
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-4">
            <h2 className="text-lg font-black text-primary uppercase tracking-[0.2em]">Interactive Chart</h2>
            <div className="flex bg-surface-container rounded-lg p-1">
              {['1D', '1W', '1M', '6M', '1Y', 'YTD'].map(p => (
                <button key={p} className={cn(
                  "px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all",
                  p === '6M' ? "bg-white text-primary shadow-sm" : "text-on-surface-variant/50 hover:text-primary"
                )}>{p}</button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-surface-container/50 border-2 border-dashed border-outline-variant/30 rounded-xl flex items-center justify-center">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-primary/30" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant/30">Advanced Chart Visualization</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-8 flex flex-col">
          <h2 className="text-lg font-black text-primary uppercase tracking-[0.2em] mb-8 border-b border-outline-variant pb-4">Key Statistics</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
            {Object.entries(stats).map(([k, v]) => (
              <div key={k} className="border-b border-outline-variant/30 pb-3 flex flex-col justify-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 mb-1">{k}</div>
                <div className="text-base font-bold text-primary tracking-tight">{v}</div>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-4 bg-surface-container-high text-primary border border-outline-variant rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
            View Full Financials
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-8">
          <h2 className="text-base font-black text-primary uppercase tracking-[0.2em] mb-6 border-b border-outline-variant pb-4">Company Profile</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            FPT Corporation is a leading technology and IT services provider in Vietnam. The company offers software outsourcing, telecommunications, system integration, and IT services globally.
          </p>
          <div className="space-y-3">
            {[ 
              { label: 'Industry', value: 'IT Services' },
              { label: 'Founded', value: '1988' },
              { label: 'Employees', value: '~40,000' }
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center text-xs">
                <span className="font-bold text-on-surface-variant/60 uppercase tracking-widest text-[10px]">{item.label}</span>
                <span className="font-bold text-primary">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
            <h2 className="text-base font-black text-primary uppercase tracking-[0.2em]">Company News</h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-secondary-accent hover:underline">See All</button>
          </div>
          <div className="space-y-6">
            {[
              { date: 'Oct 25', title: 'Q3 earnings beat expectations by 5%' },
              { date: 'Oct 20', title: 'New partnership with Japanese auto maker' },
              { date: 'Oct 15', title: 'New development center in Europe' }
            ].map((n, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">{n.date}, 2023</div>
                <h3 className="text-sm font-bold text-primary group-hover:text-secondary-accent transition-colors leading-snug">{n.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-8">
          <h2 className="text-base font-black text-primary uppercase tracking-[0.2em] mb-6 border-b border-outline-variant pb-4">Events</h2>
          <div className="space-y-6">
            {[
              { m: 'NOV', d: '15', t: 'Investor Presentation', s: 'Online Webcast' },
              { m: 'DEC', d: '05', t: 'Ex-Dividend Date', s: 'Cash: 1,500 VND' }
            ].map((e, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-surface-container px-3 py-1.5 rounded-lg flex flex-col items-center min-w-[54px] border border-outline-variant/30">
                  <span className="text-[10px] font-black text-secondary-accent tracking-widest">{e.m}</span>
                  <span className="text-xl font-black text-primary">{e.d}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary leading-snug mb-1">{e.t}</h3>
                  <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">{e.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


import { Activity } from 'lucide-react';
