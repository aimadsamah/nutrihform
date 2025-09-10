"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Dumbbell, User, Mail } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/", icon: <Home size={18} /> },
    { name: "Programmes", path: "/programmes", icon: <Dumbbell size={18} /> },
    { name: "Coach", path: "/coach", icon: <User size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed  top-0 left-0 right-0  z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="  max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-700"
        >
          NUTRI H FORM
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group flex items-center gap-2"
            >
              {link.icon}
              <Link href={link.path}>{link.name}</Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div
          className="md:hidden text-gray-900 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md border-t border-gray-200"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link, i) => (
                <li key={i} onClick={() => setMenuOpen(false)}>
                  <Link
                    href={link.path}
                    className="text-gray-800 font-medium flex items-center gap-2 hover:text-gray-900 transition"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
