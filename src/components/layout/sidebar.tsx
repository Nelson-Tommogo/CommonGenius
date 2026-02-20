"use client"

import React, { useState } from "react";
import {
  Home as HomeIcon,
  Work as ProjectsIcon,
  Article as BlogsIcon,
  ContactPage as ContactIcon,
  ChevronLeft,
  ChevronRight,
  DarkMode,
  LightMode,
  Menu as MenuIcon
} from "@mui/icons-material";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { icon: <HomeIcon />, label: "Home", href: "/", active: true },
    { icon: <ProjectsIcon />, label: "Projects", href: "/projects" },
    { icon: <BlogsIcon />, label: "Blogs", href: "/blogs" },
    { icon: <ContactIcon />, label: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <aside
      className={`
        h-screen bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transition-all duration-300 ease-in-out
        flex flex-col
        ${collapsed ? 'w-20' : 'w-64'}
        ${className}
      `}
    >
      {/* Header with Logo and Toggle */}
      <div className={`
        flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800
        ${collapsed ? 'justify-center' : 'justify-between'}
      `}>
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CG</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              CommonGenius
            </span>
          </div>
        )}
        
        {collapsed && (
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CG</span>
          </div>
        )}
        
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Main Navigation - 4 Items */}
      <nav className="flex-1 px-3 py-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                flex items-center px-3 py-3 rounded-xl
                transition-all duration-200
                ${item.active 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                }
                ${collapsed ? 'justify-center' : 'justify-start space-x-4'}
              `}
            >
              <span className={item.active ? 'text-blue-600' : ''}>
                {item.icon}
              </span>
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Footer with Dark Mode Toggle */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <button
          onClick={toggleDarkMode}
          className={`
            flex items-center w-full px-3 py-3 rounded-xl
            text-gray-600 dark:text-gray-400 
            hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white
            transition-all duration-200
            ${collapsed ? 'justify-center' : 'justify-start space-x-4'}
          `}
        >
          <span>
            {darkMode ? <LightMode /> : <DarkMode />}
          </span>
          {!collapsed && (
            <span className="text-sm font-medium">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;