import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-white overflow-hidden pt-28 pb-16">
      {/* Floating Math Symbols Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] text-[20px] md:text-[24px] font-semibold text-[#818cf8]/10 animate-float-slow">∫ dy = y + C</div>
        <div className="absolute top-[60%] left-[8%] text-[24px] md:text-[28px] font-bold text-[#6366f1]/10 animate-float-delayed">∑ x_i</div>
        <div className="absolute top-[15%] right-[12%] text-[28px] md:text-[32px] font-bold text-[#818cf8]/15 animate-float-reverse">π ≈ 3.14159</div>
        <div className="absolute top-[50%] right-[15%] text-[22px] md:text-[26px] font-semibold text-[#6366f1]/10 animate-float-slow">f'(x) = lim...</div>
        <div className="absolute bottom-[10%] left-[25%] text-[18px] md:text-[22px] font-semibold text-[#6366f1]/10 animate-float-delayed">√x² + y²</div>
        <div className="absolute bottom-[20%] right-[30%] text-[26px] md:text-[30px] font-bold text-[#818cf8]/10 animate-float-reverse">E = mc²</div>
      </div>

      {/* SVG Text Stroke Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70" aria-hidden="true">
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full max-w-[1200px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <style>
              {`
                .stroke-char {
                  fill: none;
                  stroke: hsla(239, 84%, 67%, 0.08);
                  stroke-width: 0.4px;
                  stroke-linecap: round;
                  font-family: 'Poppins', sans-serif;
                  font-weight: 700;
                  animation: drawStroke 8s ease-in-out infinite;
                }
              `}
            </style>
          </defs>

          {/* Row 1 - MATH at y=38 */}
          <text x="10" y="38" fontSize="28" className="stroke-char">
            <tspan style={{ animationDelay: '0s' }}>M</tspan>
            <tspan dx="4" style={{ animationDelay: '0.4s' }}>A</tspan>
            <tspan dx="4" style={{ animationDelay: '0.8s' }}>T</tspan>
            <tspan dx="4" style={{ animationDelay: '1.2s' }}>H</tspan>
          </text>

          {/* Row 2 - ACADEMY at y=80 */}
          <text x="10" y="80" fontSize="28" className="stroke-char">
            <tspan style={{ animationDelay: '1.8s' }}>A</tspan>
            <tspan dx="4" style={{ animationDelay: '2.2s' }}>C</tspan>
            <tspan dx="4" style={{ animationDelay: '2.6s' }}>A</tspan>
            <tspan dx="4" style={{ animationDelay: '3.0s' }}>D</tspan>
            <tspan dx="4" style={{ animationDelay: '3.4s' }}>E</tspan>
            <tspan dx="4" style={{ animationDelay: '3.8s' }}>M</tspan>
            <tspan dx="4" style={{ animationDelay: '4.2s' }}>Y</tspan>
          </text>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-[650px] text-left">
          {/* Label */}
          <div
            className={`inline-flex items-center gap-2 bg-[#ede9fe] text-[#6366f1] px-4 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase mb-6 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></span>
            M.SC MATHEMATICS · OFFLINE COACHING
          </div>

          {/* Headline */}
          <h1
            className={`heading-1 text-[#1a1a2e] mb-6 transition-all duration-800 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '0.4s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Master Mathematics
            <br />
            <span className="text-[#6366f1]">with Confidence</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`font-['Inter'] text-[18px] md:text-[20px] text-[#4a5568] leading-relaxed mb-8 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Professional academic mentoring for West Bengal Board, ICSE &amp; CBSE students. Special classes for Grades VI to XII.
          </p>

          {/* CTA & Phone */}
          <div
            className={`flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <button onClick={scrollToContact} className="btn-primary">
              Book a Free Trial Class
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#6366f1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#718096] uppercase tracking-wider">Call for Queries</p>
                <a
                  href="tel:6291210836"
                  className="font-['Poppins'] font-bold text-[18px] text-[#1a1a2e] hover:text-[#6366f1] transition-colors"
                >
                  +91 62912 10836
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
