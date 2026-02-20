// components/layout/AppLayout.tsx
"use client"

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Footer from "./footer";
import BottomNav from "./bottomnav";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Topbar />

      <div className="flex flex-1 pt-16"> 
        {!isMobile && <Sidebar />}

        <main className="flex-1">
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>

      {!isMobile && <Footer />}

      {isMobile && <BottomNav />}
    </div>
  );
};

export default AppLayout;