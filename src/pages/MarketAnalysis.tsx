import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { TrendingUp, TrendingDown, Minus, Filter, MoreHorizontal, CandlestickChart, PlusCircle, AlertTriangle, Activity, ArrowUp } from 'lucide-react';

const indices = [
  { label: 'S&P 500', value: '5,123.41', change: '+1.24%', trend: 'up', color: 'text-primary' },
  { label: 'NASDAQ 100', value: '18,042.15', change: '+1.87%', trend: 'up', color: 'text-primary' },
  { label: 'US 10Y Yield', value: '4.21%', change: '-0.02 bps', trend: 'neutral', color: 'text-on-surface-variant' },
  { label: 'VIX Volatility', value: '14.32', change: '+5.12%', trend: 'down', color: 'text-secondary-accent', risk: true },
];

const watchList = [
  { t: 'AAPL', l: '173.50', c: '+0.85%', s: 'up' },
  { t: 'MSFT', l: '416.22', c: '+1.12%', s: 'up' },
  { t: 'NVDA', l: '885.00', c: '-2.30%', s: 'down' },
  { t: 'TSLA', l: '175.22', c: '-1.05%', s: 'down' },
  { t: 'AMZN', l: '178.15', c: '+0.45%', s: 'up' },
];

export const MarketAnalysis = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto space-y-8"
    >
      <header className="flex justify-between items-center bg-primary p-6 rounded-2xl text-white">
        <h1 className="text-2xl font-black uppercase tracking-widest">Market Intelligence</h1>
        <div className="flex gap-8">
          <a href="#" className="text-white/60 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] relative group pb-1">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-white transition-colors text-xs font-black uppercase tracking-[0.2em] relative pb-1">
            Analysis
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-accent"></span>
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] relative group pb-1">
            Market
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-accent transition-all group-hover:w-full"></span>
          </a>
        </div>
      </header>

      {/* Indices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {indices.map((idx, i) => (
          <motion.div
            key={idx.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant flex flex-col justify-between h-40 shadow-sm
              ${idx.risk ? 'bg-gradient-to-br from-white to-secondary/5 border-secondary/20' : ''}
              hover:border-secondary-accent/40 transition-colors
            `}
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">{idx.label}</span>
              {idx.risk ? <AlertTriangle className="w-5 h-5 text-secondary-accent" /> : (
                idx.trend === 'up' ? <TrendingUp className="w-5 h-5 text-primary" /> : <Minus className="w-5 h-5 text-on-surface-variant" />
              )}
            </div>
            <div>
              <div className="text-2xl font-black text-primary tracking-tighter">{idx.value}</div>
              <div className={cn("text-xs font-bold flex items-center gap-1 mt-1", idx.color)}>
                {idx.trend === 'up' && <ArrowUp className="w-3.5 h-3.5" />}
                {idx.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-outline-variant flex flex-col h-[560px] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white">
            <div className="flex items-center gap-6">
              <h3 className="text-base font-black text-primary uppercase tracking-[0.2em]">Global Market Composite</h3>
              <div className="flex bg-surface-container rounded-lg p-1">
                {['1D', '1W', '1M', '1Y'].map(p => (
                  <button key={p} className={cn(
                    "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest",
                    p === '1M' ? "bg-white text-primary shadow-sm" : "text-on-surface-variant/50"
                  )}>{p}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><CandlestickChart className="w-5 h-5" /></button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><PlusCircle className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="flex-1 relative bg-slate-50 p-6 flex items-center justify-center border-t border-outline-variant/30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcdTqQzoIbIR5NFt0tV0LxmlwCJLNjxRlIbrbdWSduYH181IOhd7zpudtI7DkRrmB79whYwnG5GpEoaSgzeAjniixU9fTuoKYKbFS48lJKYQwfUkWuuqN65r5UimoM2kZy7JX-6yZU_-adpoceP7DUIlugKIZuUiFkaDFtxCaiWynhjkaB4kkHX68EREb86wMofHnSGPk80s0PHOsFxBmn5vx853RKJqyRFhpmQd1eptgZKYLby8RsxP5UutB5iMYPt_ggRsrArLkD" 
              className="w-full h-full object-cover rounded-lg border border-outline-variant shadow-lg relative z-10 brightness-90 grayscale-[0.2]"
              alt="Trading Chart" 
            />
          </div>
        </div>

        {/* Watchlist */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant flex flex-col h-[560px] shadow-sm">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white rounded-t-2xl">
            <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">Priority Watchlist</h3>
            <button className="text-on-surface-variant hover:text-primary"><MoreHorizontal className="w-5 h-5"/></button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 no-scrollbar">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  <th className="py-4 px-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 text-left">Ticker</th>
                  <th className="py-4 px-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 text-right">Last</th>
                  <th className="py-4 px-4 text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 text-right">Chg%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {watchList.map((item) => (
                  <tr key={item.t} className="group hover:bg-surface-container-low transition-colors cursor-pointer">
                    <td className="py-5 px-4 text-xs font-black text-primary uppercase tracking-wider">{item.t}</td>
                    <td className="py-5 px-4 text-xs font-bold text-on-surface text-right tracking-tight">{item.l}</td>
                    <td className="py-5 px-4 text-right">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold",
                        item.s === 'up' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      )}>
                        {item.c}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-outline-variant bg-white rounded-b-2xl text-center">
            <button className="text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:text-secondary-accent transition-colors">View Full Screener</button>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-white rounded-2xl border-l-[6px] border-l-secondary-accent border border-outline-variant p-8 flex flex-col relative overflow-hidden shadow-sm">
           <div className="absolute -right-8 -top-8 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
           <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-black text-primary tracking-tight">Thiên Nga Đen</h3>
              <p className="text-[9px] text-on-surface-variant/60 font-black uppercase tracking-widest">Tail Risk Probability Index</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-6">
            <div className="text-6xl font-black text-primary leading-none mb-2">12.4</div>
            <div className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest">% Probability</div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Monitor Status</span>
              <span className="text-[10px] font-black text-secondary-accent uppercase tracking-widest">Elevated</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-secondary-accent h-full rounded-full"
               ></motion.div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-2xl border border-outline-variant p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-black text-primary uppercase tracking-[0.2em]">Sector Heatmap</h3>
            <button className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant/60 uppercase tracking-widest hover:text-primary transition-colors">
              Filter <Filter className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-64">
            <div className="col-span-2 row-span-2 bg-primary/10 border border-primary/20 rounded-xl p-5 flex flex-col justify-between hover:bg-primary/15 transition-all group cursor-pointer shadow-sm">
              <span className="text-sm font-black text-primary uppercase tracking-widest">Technology</span>
              <span className="text-2xl font-black text-primary tracking-tighter group-hover:scale-110 transition-transform origin-left">+2.4%</span>
            </div>
            <div className="bg-secondary/5 border border-secondary/10 rounded-xl p-4 flex flex-col justify-between hover:bg-secondary/10 transition-all cursor-pointer">
              <span className="text-[10px] font-bold text-primary/60 uppercase racking-widest">Finance</span>
              <span className="text-base font-black text-primary">+0.8%</span>
            </div>
            <div className="row-span-2 bg-secondary/10 border border-secondary/20 rounded-xl p-5 flex flex-col justify-between hover:bg-secondary/15 transition-all cursor-pointer text-right group">
               <span className="text-sm font-black text-secondary uppercase tracking-widest">Energy</span>
               <span className="text-2xl font-black text-secondary tracking-tighter group-hover:scale-110 transition-transform origin-right">-1.5%</span>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container-high transition-all cursor-pointer">
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Healthcare</span>
              <span className="text-base font-black text-on-surface-variant/80">-0.1%</span>
            </div>
            <div className="col-span-2 bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container-high transition-all cursor-pointer">
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Consumer Discretionary</span>
              <span className="text-base font-black text-on-surface-variant/80">+0.1%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

