"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-xl border-b border-blue-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Site Logo"
                width={60}
                height={60}
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h1 className="ml-3 text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-sm">
              Dynamic360 Events
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#events"
                className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 transition-all duration-300 backdrop-blur-sm"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-blue-800/50 to-blue-900/50 border-t border-blue-700/50 backdrop-blur-sm">
          <a
            href="#home"
            className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#events"
            className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
