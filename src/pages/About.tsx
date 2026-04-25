import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Globe, Award, Landmark, BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';

const values = [
  {
    icon: ShieldCheck,
    title: 'Fiduciary Integrity',
    desc: 'Unwavering commitment to client interests through transparent, conflict-free advisory services.'
  },
  {
    icon: Target,
    title: 'Alpha Generation',
    desc: 'Rigorous quantitative and qualitative methodologies designed to deliver market-leading risk-adjusted returns.'
  },
  {
    icon: Award,
    title: 'Institutional Excellence',
    desc: 'Setting the standard for capital allocation through disciplined research and surgical execution.'
  }
];

export const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-12 lg:py-20"
    >
      <header className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <Landmark className="w-6 h-6 text-secondary-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/60">Our Heritage</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-primary tracking-tighter mb-8 leading-[0.9]">
          Pioneering the Future of <br />
          <span className="text-secondary-accent">Capital Intelligence.</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Founded on the principle of analytical rigor, Cafe Capital provides institutional-grade market intelligence and strategic research for the modern investor.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjuNW8xn30nA5F9o5LtMGs849HgVFEByui3jD97XVGz1rAdzKygSs8-BMyewArh0QkyF_qevyaOf3CXLAyZ-81zRoUw2_w0Xs6gErgy4hGW20YTbKW5FMElMQMVpo0h7-Cwouwog4EaJLcwiz1vUkD04RXAGbGuu6e_Ifcq_zcPiCAmFXtRaJq-ZsrQogou14L-858R_sIwoFrL1qFznWFPrfJ2tbs_5wHaFFQKbukvF26RkAQew5PHjtKi0VoYEmY5QuQ8Q5vyVhM" 
            alt="Office" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-12 flex flex-col justify-end">
            <p className="text-white text-3xl font-black tracking-tight leading-tight">
              Headquartered in the <br /> Heart of the District.
            </p>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black text-primary mb-6 tracking-tight">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              To democratize institutional-grade data and provide the clarity required to navigate volatile global markets. We believe that superior information is the ultimate competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
            <div>
              <div className="text-4xl font-black text-primary">$4.2B+</div>
              <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mt-1">AUM Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary">15+</div>
              <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mt-1">Years Average Exp.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-center text-4xl font-black text-primary mb-20 tracking-tight">The Cafe Capital Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-10 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm hover:border-secondary-accent/50 transition-all group">
              <v.icon className="w-10 h-10 text-secondary-accent mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black text-primary mb-4">{v.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-12 lg:p-20 bg-primary rounded-3xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-accent/10 blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight italic">"The market is a system of information. We are the decoders."</h2>
          <div className="text-secondary-accent font-black text-xs uppercase tracking-[0.3em]">Jonathan Vance — Chief Strategist</div>
        </div>
      </section>
    </motion.div>
  );
};
