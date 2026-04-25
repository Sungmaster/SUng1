import React from 'react';
import { motion } from 'motion/react';
import { Filter, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: 'Oct 24, 2023',
    tag: 'Macro',
    title: 'Global Supply Chain Resilience in Q4',
    description: 'An in-depth analysis of emerging logistical bottlenecks and strategic pivots among top-tier manufacturers as they prepare for end-of-year demand spikes.',
    accent: 'border-primary'
  },
  {
    date: 'Oct 23, 2023',
    tag: 'Tech',
    title: 'AI Infrastructure Capital Expenditure Forecast',
    description: 'Projecting the CAPEX requirements for hyperscalers over the next 24 months, focusing on cooling technologies and next-generation silicon allocation.',
    border: 'border-t-4 border-secondary-accent'
  },
  {
    date: 'Oct 21, 2023',
    tag: 'Equities',
    title: 'Emerging Markets: The Yield Hunt',
    description: 'Evaluating dividend sustainability and growth potential across select Latin American and Southeast Asian equities amidst fluctuating currency valuations.',
  },
  {
    date: 'Oct 18, 2023',
    tag: 'Energy',
    title: 'Transitional Energy Commodities Pricing',
    description: 'A closer look at copper and lithium spot price volatility and long-term contract structures for battery manufacturers.',
  }
];

export const MarketNews = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-5xl mx-auto"
    >
      <header className="mb-12 flex justify-between items-end border-b border-outline-variant pb-8">
        <div>
          <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-2">News & Insights</h2>
          <p className="text-on-surface-variant/80 text-lg">Curated market intelligence and strategic analysis.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 border border-outline font-bold text-sm uppercase tracking-widest rounded hover:bg-surface-container transition-colors">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </header>

      <div className="flex flex-col gap-6">
        {newsItems.map((item, i) => (
          <motion.article 
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              flex flex-col md:flex-row gap-8 p-8 border border-outline-variant bg-surface-container-lowest rounded-xl 
              hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden
              ${item.border || ''}
            `}
          >
            <div className="md:w-48 shrink-0">
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-3">{item.date}</p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded">
                {item.tag}
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary-accent transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center md:items-start pt-1">
              <ArrowRight className="w-6 h-6 text-outline group-hover:text-primary transition-all group-hover:translate-x-2" />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-10 py-3 border border-secondary text-secondary font-black text-xs uppercase tracking-[0.3em] rounded hover:bg-secondary/5 transition-all">
          Load More Insights
        </button>
      </div>
    </motion.div>
  );
};
