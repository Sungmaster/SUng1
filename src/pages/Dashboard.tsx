import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ArrowUpRight, TrendingUp, Users, ShieldAlert, Zap, Globe, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'AUM Total', value: '$4.2B', trend: '+2.4%', sub: 'vs last month', icon: Zap },
  { label: 'YTD Return', value: '14.8%', trend: '+1.2%', sub: 'benchmark beat', icon: TrendingUp },
  { label: 'Active Clients', value: '342', trend: '0.0%', sub: 'No change', icon: Users },
  { label: 'Risk Index', value: 'Moderate', trend: '-0.5', sub: 'points', icon: ShieldAlert },
];

const marketItems = [
  { label: 'S&P 500', value: '5,123.41', change: '+1.24%', category: 'US Equities' },
  { label: 'US 10-Year', value: '4.21%', change: '+2 bps', category: 'Treasury Yield' },
  { label: 'Brent Crude', value: '$84.50', change: '-1.2%', category: 'Commodities' },
  { label: 'EUR/USD', value: '1.0845', change: '+0.1%', category: 'FX' },
];

export const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black text-primary tracking-tight mb-2">Executive Summary</h1>
          <p className="text-on-surface-variant/80 text-base lg:text-lg">Market overview and key performance metrics.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-2 border border-outline-variant font-bold text-[10px] uppercase tracking-widest rounded hover:bg-surface-container transition-colors">
            This Week
          </button>
          <button className="flex-1 md:flex-none px-6 py-2 bg-primary text-white font-bold text-[10px] uppercase tracking-widest rounded hover:brightness-110 transition-colors flex items-center justify-center gap-2">
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col justify-between shadow-sm hover:border-secondary-accent/50 transition-colors h-40"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">{stat.label}</span>
              <stat.icon className="w-5 h-5 text-secondary-accent" />
            </div>
            <div>
              <div className="text-3xl font-black text-primary tracking-tighter">{stat.value}</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className={cn(
                  "text-[10px] font-bold px-1.5 rounded-sm",
                  stat.trend.startsWith('+') ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                )}>{stat.trend}</span>
                <span className="text-[10px] font-semibold text-on-surface-variant/50 uppercase tracking-wider">{stat.sub}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Insight */}
        <div className="lg:col-span-8 bg-primary rounded-2xl border-t-4 border-secondary-accent relative overflow-hidden p-8 lg:p-12 group cursor-pointer h-full min-h-[400px] lg:min-h-[460px] flex flex-col justify-between shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-accent/10 blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:scale-150"></div>
          
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-container px-4 py-1.5 rounded-full border border-primary-on-container/30 mb-8">
              <Zap className="w-3.5 h-3.5 text-secondary-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Insight of the Day</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8 max-w-2xl group-hover:text-primary-on-container transition-colors duration-300">
              Emerging Markets show resilience amid rate hike speculation.
            </h2>
            <p className="text-primary-on-container text-lg lg:text-xl max-w-xl leading-relaxed opacity-80">
              Our analysis indicates a structural shift in capital flows favoring select Asian equities, driven by robust domestic consumption and stabilizing currency pairs.
            </p>
          </div>

          <motion.div 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-secondary-accent font-black uppercase tracking-[0.2em] text-sm"
          >
            Read Full Analysis <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Market Pulse */}
        <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant">
            <Globe className="w-6 h-6 text-secondary-accent" />
            <h3 className="text-xl font-extrabold text-primary tracking-tight">Market Pulse</h3>
          </div>
          <div className="flex flex-col gap-6 flex-1 justify-center">
            {marketItems.map((item) => (
              <div key={item.label} className="flex justify-between items-center group cursor-pointer">
                <div>
                  <div className="font-bold text-primary group-hover:text-secondary-accent transition-colors">{item.label}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">{item.category}</div>
                </div>
                <div className="text-right">
                  <div className="font-sans font-bold text-primary">{item.value}</div>
                  <div className={cn(
                    "text-xs font-bold",
                    item.change.startsWith('+') ? "text-primary" : "text-secondary-accent"
                  )}>{item.change}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-4 border border-outline-variant rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-surface-container transition-all">
            Full Market Data
          </button>
        </div>
      </div>
    </motion.div>
  );
};

