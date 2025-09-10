'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/LOGO.png"
                    alt="KF Distribution Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105">Home</a>
                  <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105">About Us</a>
                  <a href="/products" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105">Our Products</a>
                  <a href="/support" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105">Get in Touch</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  +92 306 2393268
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
                  >
                    <svg
                      className={`block h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              <a href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200">About Us</a>
              <a href="/products" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200">Our Products</a>
              <a href="/support" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200">Get in Touch</a>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-center mt-4">
                +92 306 2393268
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
