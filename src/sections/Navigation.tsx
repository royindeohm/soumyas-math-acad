import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(248,250,252,0.92)] backdrop-blur-[12px] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0f2b5c] to-[#1d6fc4] flex items-center justify-center text-white font-bold text-lg shadow-[0_4px_12px_rgba(15,43,92,0.2)] overflow-hidden border border-[#dbeafe]/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src="images/logo.png"
              alt="SMA Logo"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback Icon */}
            <span className="font-['Poppins'] select-none">∑</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Poppins'] font-bold text-[18px] text-[#0f2b5c] leading-tight tracking-wide group-hover:text-[#1d6fc4] transition-colors">
              SOUMYA'S
            </span>
            <span className="font-['Poppins'] font-semibold text-[10px] text-[#1d6fc4] tracking-[0.12em] uppercase">
              Math Academy
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="font-['Inter'] font-medium text-[15px] text-[#4a5568] hover:text-[#1d6fc4] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#contact');
          }}
          className="hidden md:inline-flex btn-primary-sm"
        >
          Enquire Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-[#0f2b5c]"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[rgba(248,250,252,0.98)] backdrop-blur-[12px] border-t border-[#e2e8f0] py-6 px-6 md:hidden shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-['Inter'] font-medium text-[16px] text-[#4a5568] hover:text-[#1d6fc4] transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-primary-sm mt-2 w-full text-center"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
