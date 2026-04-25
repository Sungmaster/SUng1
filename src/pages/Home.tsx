import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Shield, 
  BarChart3, 
  Globe, 
  Lock,
  ChevronRight
} from 'lucide-react';

const tickerItems = [
  { label: 'VN30 INDEX', value: '1,284.52', change: '+18.45', pct: '1.45%', trend: 'up' },
  { label: 'FPT CORP', value: '112.50', change: '+3.10', pct: '2.83%', trend: 'up' },
  { label: 'VCB BANK', value: '94.30', change: '-0.20', pct: '0.21%', trend: 'down' },
  { label: 'HPG STEEL', value: '31.20', change: '+0.85', pct: '2.80%', trend: 'up' },
  { label: 'MWG RETAIL', value: '54.50', change: '-0.80', pct: '1.45%', trend: 'down' },
  { label: 'SSI SEC', value: '38.15', change: '+1.25', pct: '3.39%', trend: 'up' },
];

const features = [
  {
    icon: Shield,
    title: "Institutional Custody",
    desc: "Built with bank-grade security protocols ensuring your strategic research is yours alone."
  },
  {
    icon: BarChart3,
    title: "Quant Insights",
    desc: "Our proprietary alpha-seeking models process millions of data points across the VN30."
  },
  {
    icon: Globe,
    title: "Macro Overlay",
    desc: "Understand how global flows impact the local market through our expert strategic research."
  }
];

const tiers = [
  {
    name: 'Standard',
    tier: 'Essential Access',
    price: 'Free',
    sub: 'FOREVER',
    features: ['VN30 Daily Digest', 'Weekly Analyst Call', 'Standard Charting', 'Market Sentiment Index'],
    button: 'Start for Free',
    primary: false
  },
  {
    name: 'Platinum',
    tier: 'Professional Tier',
    price: '$19.99',
    sub: 'PER MONTH',
    features: ['Real-time L2 Quotations', 'Proprietary Alpha Signals', '1-on-1 Analyst Briefings', 'Custom Portfolio Audit'],
    button: 'Get Full Access',
    primary: true,
    popular: true
  },
  {
    name: 'Elite',
    tier: 'Institutional Grade',
    price: 'Contact',
    sub: 'SALES TEAM',
    features: ['API Access (REST/Fix)', 'Bespoke Private Research', 'Priority Execution Layer', 'dedicated Strategist'],
    button: 'Talk to Sales',
    primary: false,
    dark: true
  }
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Dynamic Ticker */}
      <div className="w-full bg-primary py-3 overflow-hidden border-b border-primary-container/20">
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-12">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="text-[10px] font-black tracking-[0.2em] text-secondary-accent/80">{item.label}</span>
              <span className="text-xs font-bold text-white">{item.value}</span>
              <div className={cn("flex items-center gap-1 font-bold text-[10px]", item.trend === 'up' ? "text-emerald-400" : "text-rose-400")}>
                {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-52 overflow-hidden bg-primary overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary-accent/10 blur-[120px] rounded-full animate-pulse"></div>
           <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] bg-primary-container/30 blur-[100px] rounded-full"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary-container/50 border border-secondary-accent/20 rounded-full mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent shadow-[0_0_10px_#b87333]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary-accent">Market Intelligence v4.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.05] drop-shadow-2xl"
            >
              Precision <span className="text-secondary-accent italic">Capital</span> <br />
              Intelligence.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-on-container/80 max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
            >
              High-fidelity market research and execution strategies for the modern institutional investor. Master the entropy of the open market.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => navigate('/dashboard')}
                className="group relative px-10 py-5 bg-secondary-accent text-primary font-black text-xs uppercase tracking-[0.3em] rounded overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(184,115,51,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Launch Terminal <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-10 py-5 bg-transparent text-white border border-white/20 font-black text-xs uppercase tracking-[0.3em] rounded hover:bg-white/5 transition-all"
              >
                Our Methodology
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-32">
          {/* Main Visual Feature */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-surface-container-low border border-outline-variant p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden group h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-primary mb-2 uppercase tracking-tight">Market Momentum</h3>
                  <p className="text-on-surface-variant text-sm font-medium">Real-time sentiment aggregation engine.</p>
                </div>
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-outline-variant">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 bg-white rounded-3xl border border-outline-variant/50 shadow-inner overflow-hidden flex flex-col p-6">
                <div className="flex gap-4 mb-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex-1 h-32 bg-surface-container rounded-xl animate-pulse"></div>
                  ))}
                </div>
                <div className="flex-1 border-t border-dashed border-outline-variant pt-4 flex flex-col justify-end">
                   <div className="space-y-3">
                      <div className="w-3/4 h-2 bg-primary/10 rounded-full"></div>
                      <div className="w-1/2 h-2 bg-secondary-accent/20 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-primary/5 rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between border border-primary-container relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lock className="w-24 h-24" />
              </div>
              <div>
                <span className="text-secondary-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Security First</span>
                <h4 className="text-2xl font-black mb-4">Strategic Isolation</h4>
                <p className="text-primary-on-container/70 text-sm leading-relaxed">
                  Your portfolio data is encrypted at the hardware level, separate from public execution lanes.
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 text-secondary-accent text-xs font-black uppercase tracking-widest group">
                Review Protocols <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-outline-variant p-8 rounded-[2.5rem] shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">Network Health</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
              </div>
              <div className="text-4xl font-black text-primary tracking-tighter">99.98<span className="text-sm font-bold opacity-50 uppercase tracking-widest ml-1">%</span></div>
              <p className="text-[10px] text-on-surface-variant mt-2 font-bold uppercase tracking-widest">Uptime Performance</p>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 p-6 bg-surface-container border border-outline-variant rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <f.icon className="w-8 h-8 text-primary group-hover:text-secondary-accent transition-colors" />
              </div>
              <h4 className="text-xl font-black text-primary mb-4 uppercase tracking-tighter">{f.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-[280px]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tight mb-6">Strategic Tiers.</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto font-medium">Equip your investment team with the tools needed to scale production.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[3rem] border flex flex-col relative transition-all duration-500 hover:-translate-y-4 shadow-sm hover:shadow-xl",
                  t.primary ? "border-primary-container bg-white" : "border-outline-variant bg-surface-container-lowest",
                  t.dark && "bg-primary text-white border-primary-container shadow-2xl"
                )}
              >
                {t.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-accent text-primary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
                    Recommended
                  </div>
                )}
                <div className="mb-10">
                  <div className={cn("text-[10px] font-black uppercase tracking-[0.4em] mb-3", t.dark ? "text-secondary-accent" : "text-primary/50")}>
                    {t.tier}
                  </div>
                  <h3 className={cn("text-4xl font-black mb-4", t.dark ? "text-white" : "text-primary")}>{t.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={cn("text-5xl font-black", t.dark ? "text-white" : "text-primary")}>{t.price}</span>
                    <span className={cn("text-[9px] font-black uppercase tracking-[0.2em] opacity-40", t.dark ? "text-white" : "text-primary")}>{t.sub}</span>
                  </div>
                </div>
                <div className="space-y-5 mb-12 flex-1">
                  {t.features.map(f => (
                    <div key={f} className="flex gap-4 items-center">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center p-1", t.dark ? "bg-white/10" : "bg-primary/5")}>
                        <Check className={cn("w-full h-full", t.dark ? "text-secondary-accent" : "text-primary")} />
                      </div>
                      <span className={cn("text-xs font-bold tracking-tight", t.dark ? "text-primary-on-container/80" : "text-on-surface-variant")}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={cn(
                  "w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all active:scale-[0.98]",
                  t.primary ? "bg-primary text-white hover:brightness-110" : (t.dark ? "bg-secondary-accent text-primary hover:brightness-110" : "bg-white border border-outline-variant text-primary hover:bg-surface-container")
                )}>
                  {t.button}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 lg:px-8 text-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
            Ready to stabilize <br /> your <span className="text-secondary-accent italic">advantage</span>?
          </h2>
          <p className="text-primary-on-container/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Join over 500 institutional managers using Cafe Capital to navigate the VN30 and global equity markets.
          </p>
          <button className="px-16 py-6 bg-white text-primary font-black text-xs uppercase tracking-[0.4em] rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all">
            Secure Member Invite
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface pt-32 pb-16 px-6 lg:px-8 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center p-2.5">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjuNW8xn30nA5F9o5LtMGs849HgVFEByui3jD97XVGz1rAdzKygSs8-BMyewArh0QkyF_qevyaOf3CXLAyZ-81zRoUw2_w0Xs6gErgy4hGW20YTbKW5FMElMQMVpo0h7-Cwouwog4EaJLcwiz1vUkD04RXAGbGuu6e_Ifcq_zcPiCAmFXtRaJq-ZsrQogou14L-858R_sIwoFrL1qFznWFPrfJ2tbs_5wHaFFQKbukvF26RkAQew5PHjtKi0VoYEmY5QuQ8Q5vyVhM" alt="Cafe Capital" className="w-full h-full object-contain brightness-0 invert" />
                </div>
                <div>
                  <h5 className="text-2xl font-black text-primary uppercase tracking-tighter leading-none">Cafe Capital</h5>
                  <p className="text-[10px] font-black text-secondary-accent uppercase tracking-[0.4em] mt-1">Intelligence Division</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-medium text-sm leading-relaxed max-w-sm mb-10">
                Premium institutional portal for market intelligence, risk management, and strategic asset research across Southeast Asian equity markets.
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Terminal'].map(social => (
                  <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary-accent transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { title: 'Intelligence', links: ['Market Ticker', 'Sector heatmap', 'AI Narrative', 'Execution'] },
                { title: 'Corporate', links: ['Our Research', 'Methodology', 'Press Kit', 'Career'] },
                { title: 'Logistics', links: ['Security', 'API Docs', 'Status', 'Contact'] }
              ].map(col => (
                <div key={col.title}>
                  <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">{col.title}</h6>
                  <ul className="space-y-4">
                    {col.links.map(link => (
                      <li key={link}><a href="#" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40">
            <span>© 2024 Cafe Capital Research & Intelligence. Licensed Institution.</span>
            <div className="flex gap-10">
              <a href="#" className="hover:text-primary transition-colors">Digital Shield</a>
              <a href="#" className="hover:text-primary transition-colors">Legal Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Execution Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


