"use client"

import React, { useState } from "react";
import {
  Home as HomeIcon,
  Work as ProjectsIcon,
  Article as BlogsIcon,
  ContactPage as ContactIcon,
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  Close
} from "@mui/icons-material";

interface TopbarProps {
  className?: string;
}

const Topbar: React.FC<TopbarProps> = ({ className = "" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", icon: <HomeIcon />, label: "Home", href: "/" },
    { id: "projects", icon: <ProjectsIcon />, label: "Projects", href: "/projects" },
    { id: "blogs", icon: <BlogsIcon />, label: "Blogs", href: "/blogs" },
    { id: "contact", icon: <ContactIcon />, label: "Contact", href: "/contact" },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Topbar */}
      <header
        className={`
          fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 
          backdrop-blur-xl border-b border-gray-200 dark:border-gray-800
          z-50
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white hidden sm:block">
                CommonGenius
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleTabClick(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-xl
                    transition-all duration-200
                    ${activeTab === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
              >
                {darkMode ? <LightMode /> : <DarkMode />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
              >
                {mobileMenuOpen ? <Close /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <nav className="absolute top-16 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl p-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleTabClick(item.id)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${activeTab === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }
                `}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
            
            {/* Mobile Dark Mode Toggle */}
            <div className="border-t border-gray-200 dark:border-gray-800 mt-2 pt-2">
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
              >
                <span>{darkMode ? <LightMode /> : <DarkMode />}</span>
                <span className="text-sm font-medium">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Spacer for fixed topbar */}
      <div className="h-16" />
    </>
  );
};

export default Topbar;