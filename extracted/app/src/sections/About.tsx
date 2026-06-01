import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GraduationCap, BookOpen, FlaskConical, MapPin } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, text: 'M.Sc in Mathematics' },
  { icon: BookOpen, text: 'Specialization: Applied Mathematics' },
  { icon: FlaskConical, text: 'Subjects: Mathematics, Physics, Chemistry' },
  { icon: MapPin, text: 'Mode: Offline Classes Only' },
];

export default function About() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-16 md:py-28 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Text Content */}
          <div
            className={`w-full md:w-[45%] transition-all duration-700 ease-out ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="section-label mb-4">ABOUT THE EDUCATOR</p>
            <h2 className="heading-2 mb-6">Meet Soumyadip Biswas</h2>
            <p className="font-['Inter'] text-[18px] text-[#4a5568] leading-[1.7] mb-8">
              With a Master's degree in Mathematics and years of dedicated teaching
              experience, I specialize in making complex mathematical concepts simple
              and intuitive. My approach combines conceptual clarity with rigorous
              practice, ensuring every student builds a strong foundation. Located in
              Narayanpur, Kankinara, I provide personalized offline coaching for
              students from Class VI to XII across WB Board, ICSE, and CBSE curricula.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 transition-all duration-500 ease-out ${
                    isInView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                    <cred.icon size={20} className="text-[#6366f1]" />
                  </div>
                  <span className="font-['Inter'] font-medium text-[16px] text-[#1a1a2e]">
                    {cred.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div
            className={`w-full md:w-[50%] relative transition-all duration-700 ease-out flex justify-center ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="relative group max-w-[420px] w-full">
              {/* Outer offset borders for styling */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#6366f1] to-[#a5b4fc] opacity-20 blur-lg group-hover:opacity-30 transition duration-500" />
              <div className="absolute inset-0 rounded-2xl border-2 border-[#6366f1]/20 translate-x-3 translate-y-3 -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(99,102,241,0.08)] border border-[#e2e8f0] bg-white aspect-[4/5]">
                <img
                  src="/images/img-1.jpg"
                  alt="Soumyadip Biswas - M.Sc Mathematics educator and mentor at Soumya's Mathematics Academy in Kankinara"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback layout if img-1 is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#ede9fe] flex flex-col items-center justify-center p-6 text-center -z-10">
                  <div className="w-20 h-20 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#6366f1] mb-4 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <h4 className="font-['Poppins'] font-bold text-lg text-[#1a1a2e]">Soumyadip Biswas</h4>
                  <p className="font-['Inter'] text-sm text-[#6366f1] font-medium mt-1">M.Sc Mathematics</p>
                </div>
              </div>

              {/* Floating Credential Tag */}
              <div className="absolute bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-[#e2e8f0] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-[#ede9fe] flex items-center justify-center text-[#6366f1]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="font-['Poppins'] font-bold text-[13px] text-[#1a1a2e] leading-tight">M.Sc Math</p>
                  <p className="font-['Inter'] text-[11px] text-[#4a5568] mt-0.5">Academy Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
