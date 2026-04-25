import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar, TopBar } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Portfolio } from './pages/Portfolio';
import { MarketNews } from './pages/MarketNews';
import { MarketAnalysis } from './pages/MarketAnalysis';
import { ResearchDetail } from './pages/ResearchDetail';
import { StockDetail } from './pages/StockDetail';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/' || location.pathname === '/home';

  if (isLandingPage) {
    return <main className="min-h-screen bg-surface">{children}</main>;
  }

  return (
    <div className="flex min-h-screen bg-surface selection:bg-primary selection:text-white">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <TopBar />
        <main className="flex-1 relative">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<MarketNews />} />
          <Route path="/analytics" element={<MarketAnalysis />} />
          <Route path="/research" element={<ResearchDetail />} />
          <Route path="/stock/:symbol" element={<StockDetail />} />
          {/* Fallback to dashboard for demo purposes if route not found but sidebar clicked */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
