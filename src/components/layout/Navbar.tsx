"use client";

import { getAllCategories } from "@/lib/mockData";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get the first category by order
  const firstCategory = useMemo(() => {
    const categories = getAllCategories();
    return categories.sort((a, b) => a.order - b.order)[0];
  }, []);

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "VOTACION", href: `/voting/${firstCategory?.slug || ""}` },
    { name: "CATEGORIAS", href: "/categories" },
    { name: "FAQ", href: "/faq" },
    { name: "EL TIM", href: "/team" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-secondary-900 via-secondary-800 to-secondary-900 backdrop-blur-md border-b border-primary-500/30 shadow-lg shadow-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-white font-bold text-xl hidden sm:block">
                  AWARDS
                </span>
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-primary-400 text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Right side buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="bg-linear-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-primary-300 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMenu}
        />
        <div
          className={`fixed top-0 left-0 bottom-0 w-80 bg-linear-to-b from-secondary-900 via-secondary-800 to-secondary-900 shadow-2xl shadow-primary-500/20 border-r border-primary-500/20 transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-secondary-700/50 bg-secondary-900/50 backdrop-blur-sm">
            <h2 className="text-white text-xl font-bold">AWARDS</h2>
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-primary-300 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-6">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-white/90 hover:text-primary-400 text-lg font-medium transition-all duration-300 hover:translate-x-2 hover:bg-primary-500/10 px-4 py-2 rounded-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-secondary-700/50">
              <Link
                href="/auth/signin"
                onClick={toggleMenu}
                className="block w-full bg-linear-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white text-center px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105"
              >
                Sign In
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-secondary-700/50">
              <p className="text-secondary-400 text-sm font-medium mb-4">
                FOLLOW US
              </p>
              <div className="flex space-x-4">
                {/* Placeholder for social icons */}
                <div className="w-10 h-10 bg-secondary-700/50 rounded border border-secondary-600/50 hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 bg-secondary-700/50 rounded border border-secondary-600/50 hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 bg-secondary-700/50 rounded border border-secondary-600/50 hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 bg-secondary-700/50 rounded border border-secondary-600/50 hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"></div>
                <div className="w-10 h-10 bg-secondary-700/50 rounded border border-secondary-600/50 hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
