"use client"

import React, { useEffect, useState } from "react";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Favorite,
  Copyright
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Don't render on mobile
  if (isMobile) return null;

  const socialLinks = [
    { icon: <GitHub />, href: "#", label: "GitHub" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Email />, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Home</a>
          <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Projects</a>
          <a href="/blogs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Blogs</a>
          <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</a>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
          <Copyright fontSize="small" />
          <span>{currentYear} CommonGenius. All rights reserved.</span>
        </div>

        {/* Made with love */}
        <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-500 mt-2">
          <span>Made with</span>
          <Favorite className="text-red-500" fontSize="small" />
          <span>by CommonGenius</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;