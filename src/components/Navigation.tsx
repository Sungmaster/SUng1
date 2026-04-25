import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Wallet, 
  Newspaper, 
  Search, 
  Binary, 
  Activity, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  TrendingUp,
  LayoutDashboard,
  Home,
  Info,
  Mail,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Info, label: 'About', to: '/about' },
  { icon: Mail, label: 'Contact', to: '/contact' },
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: Wallet, label: 'Portfolio', to: '/portfolio' },
  { icon: Newspaper, label: 'Market News', to: '/news' },
  { icon: Activity, label: 'Analytics', to: '/analytics' },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setIsOpen(false);

  // Handle window resize to close sidebar if it was open on mobile but user resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] lg:hidden p-2 bg-primary text-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/50 z-[50] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <nav className={cn(
        "fixed left-0 h-full w-64 border-r border-primary-container/20 bg-primary dark:bg-black flex flex-col z-[55] overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-primary-container/20 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjuNW8xn30nA5F9o5LtMGs849HgVFEByui3jD97XVGz1rAdzKygSs8-BMyewArh0QkyF_qevyaOf3CXLAyZ-81zRoUw2_w0Xs6gErgy4hGW20YTbKW5FMElMQMVpo0h7-Cwouwog4EaJLcwiz1vUkD04RXAGbGuu6e_Ifcq_zcPiCAmFXtRaJq-ZsrQogou14L-858R_sIwoFrL1qFznWFPrfJ2tbs_5wHaFFQKbukvF26RkAQew5PHjtKi0VoYEmY5QuQ8Q5vyVhM" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-sans font-black text-white uppercase tracking-tighter text-sm leading-tight">Cafe Capital</h1>
              <p className="text-[10px] text-secondary-container/80 uppercase tracking-widest font-bold">Institutional Portal</p>
            </div>
          </div>
        </div>

        <div className="flex-1 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeSidebar}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-6 py-4 font-sans text-[10px] uppercase tracking-widest font-semibold transition-all duration-200 border-r-4",
                isActive 
                  ? "bg-primary-container text-secondary-accent border-secondary-accent" 
                  : "text-white/60 hover:text-white hover:bg-primary-container/50 border-transparent"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="p-6 mt-auto border-t border-primary-container/20">
          <button className="w-full py-3 bg-secondary-accent text-primary font-bold text-[10px] uppercase tracking-widest rounded-sm hover:brightness-110 transition-all active:scale-[0.98]">
            Upgrade to Pro
          </button>
          <div className="mt-6 flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors py-2 group">
              <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] uppercase font-bold tracking-widest">Support</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors py-2 group">
              <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] uppercase font-bold tracking-widest">Sign Out</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export const TopBar = () => {
  return (
    <header className="h-16 w-full border-b border-outline-variant/10 bg-surface flex justify-between items-center px-4 lg:px-8 sticky top-0 z-40">
      <div className="flex-1 flex items-center">
        <div className="ml-12 lg:ml-0 relative group max-w-xs w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search markets..." 
            className="pl-10 pr-4 py-2 w-full bg-white border border-outline-variant rounded-full text-xs outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors group hidden sm:block">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-accent rounded-full border-2 border-surface"></span>
        </button>
        <div className="h-8 w-px bg-outline-variant hidden sm:block"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">Dr. J. Vance</p>
            <p className="text-[9px] text-on-surface-variant font-medium uppercase tracking-tighter">Institutional Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors overflow-hidden shrink-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2XDXl2EXQn9lk0raqOWPA0pkZ2jj_WW2H2UrCDVu_5AkdYU3ciyXJ5dm2btblUh_43e_UBG4jBruU35tpIxyUQ452B8h-cOVYy_JNBBNCXA_4_kXww6gztzVsHbB1rm58X7HI7rOGW2zyufheyoT4fHLBQ7QuAi5oJJviKghJWXV2SJj_KD5qxki99PylG683gmRjFzmLvTVNhsZL7oGXRHCjytShcYhAlE3UY4afExAVaCMPShUJJjyPfGPP4IWsaTbAjNW0KcID" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
