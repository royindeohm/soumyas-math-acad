const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#1a1a2e] pt-[60px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366f1] to-[#a5b4fc] flex items-center justify-center text-white font-bold text-lg shadow-[0_4px_12px_rgba(99,102,241,0.2)] overflow-hidden border border-[rgba(255,255,255,0.1)]">
                <img
                  src="images/logo.png"
                  alt="SMA Logo"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-['Poppins'] select-none">∑</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Poppins'] font-bold text-[18px] text-white leading-tight tracking-wide">
                  SOUMYA'S
                </span>
                <span className="font-['Poppins'] font-semibold text-[10px] text-[#a5b4fc] tracking-[0.12em] uppercase">
                  Math Academy
                </span>
              </div>
            </div>
            <p className="font-['Inter'] text-[14px] text-[rgba(255,255,255,0.5)] leading-[1.7] max-w-[280px]">
              Building mathematical excellence through personalized offline
              coaching in Kankinara since 2012.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-[16px] text-white mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-['Inter'] text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-['Poppins'] font-semibold text-[16px] text-white mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:6291210836"
                className="font-['Inter'] text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
              >
                6291210836
              </a>
              <a
                href="mailto:soumyadip.biswas16@gmail.com"
                className="font-['Inter'] text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors break-all"
              >
                soumyadip.biswas16@gmail.com
              </a>
              <p className="font-['Inter'] text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.6]">
                Narayanpur, Jhilbagan, Kankinara,
                <br />
                West Bengal – 743126
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] mt-10 pt-6 text-center">
          <p className="font-['Inter'] text-[14px] text-[rgba(255,255,255,0.4)]">
            &copy; 2025 Soumya's Mathematics Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
