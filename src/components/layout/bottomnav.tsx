"use client"

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  Home,
  Person,
  Work,
  Message
} from "@mui/icons-material";

const BottomNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    return "home"; 
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());
  const [clickedTab, setClickedTab] = useState<string | null>(null);

  const handleTabClick = (tabId: string, path: string) => {
    setClickedTab(tabId);
    setTimeout(() => setClickedTab(null), 200);
    setActiveTab(tabId);
    router.push(path);
  };

  const tabs = [
    { id: "home", icon: <Home sx={{ fontSize: 20 }} />, label: "Home", path: "/" },
    { id: "about", icon: <Person sx={{ fontSize: 20 }} />, label: "About", path: "/about" },
    { id: "projects", icon: <Work sx={{ fontSize: 20 }} />, label: "Projects", path: "/projects" },
    { id: "contact", icon: <Message sx={{ fontSize: 20 }} />, label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#00356B] shadow-2xl z-50">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>
      
      {/* Main navigation container */}
      <div className="flex justify-around items-center px-4 py-1 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.path)}
            className={`
              flex flex-col items-center justify-center
              px-3 py-2 rounded-2xl transition-all duration-300
              relative overflow-hidden group
              min-w-[64px]
              ${activeTab === tab.id 
                ? 'text-white' 
                : 'text-white/60 hover:text-white/90'
              }
              ${clickedTab === tab.id ? 'scale-95' : 'hover:scale-105'}
            `}
          >
            {/* Background effects */}
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-2xl"></span>
            
            {/* Active tab background */}
            {activeTab === tab.id && (
              <span className="absolute inset-0 bg-white/10 rounded-2xl"></span>
            )}
            
            {/* Active indicator dot */}
            {activeTab === tab.id && (
              <>
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
              </>
            )}
            
            {/* Click ripple effect */}
            {clickedTab === tab.id && (
              <span className="absolute inset-0 bg-white/20 animate-pulse rounded-2xl"></span>
            )}
            
            {/* Icon container */}
            <span className={`
              transform transition-all duration-300
              ${activeTab === tab.id ? 'scale-110 translate-y-[-2px]' : ''}
              ${clickedTab === tab.id ? 'scale-90' : ''}
              mb-0.5
            `}>
              {tab.icon}
            </span>
            
            {/* Label */}
            <span className={`
              text-[11px] font-medium tracking-wide
              transition-all duration-300
              ${activeTab === tab.id ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-0'}
            `}>
              {tab.label}
            </span>

            {/* Bottom indicator line for active tab */}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
      
      {/* Safe area for modern phones (iPhone home indicator) */}
      <div className="h-2 bg-transparent"></div>
    </nav>
  );
};

export default BottomNav;