import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const row1 = [
  { name: 'Algebra', formula: 'a² - b² = (a-b)(a+b)' },
  { name: 'Calculus', formula: '∫ f(x) dx' },
  { name: 'Trigonometry', formula: 'sin²θ + cos²θ = 1' },
  { name: 'Coordinate Geometry', formula: 'y = mx + c' },
  { name: 'Matrices', formula: 'det(A) = ad - bc' },
  { name: 'Probability', formula: 'P(A|B) = P(A∩B)/P(B)' },
  { name: 'Set Theory', formula: 'A ∪ B' },
];

const row2 = [
  { name: 'Geometry', formula: 'a² + b² = c²' },
  { name: 'Arithmetic', formula: 'a_n = a_1 + (n-1)d' },
  { name: 'Statistics', formula: 'σ² = ∑(x-μ)²/N' },
  { name: 'Vectors', formula: 'u · v = |u||v|cosθ' },
  { name: 'Linear Programming', formula: 'Max Z = cx' },
  { name: 'Differential Equations', formula: 'dy/dx + Py = Q' },
  { name: 'Number Theory', formula: 'a ≡ b (mod m)' },
];

export default function Gallery() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="focus-areas"
      className="w-full py-16 md:py-28 bg-white overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <p className="section-label mb-4">OUR FOCUS AREAS</p>
        <h2 className="heading-2 mb-4">
          Every Branch of Mathematics, Mastered
        </h2>
        <p className="font-['Inter'] text-[#4a5568] max-w-[600px] mx-auto text-[16px] md:text-[18px]">
          We provide rigorous and conceptual coaching across all domains of school-level and higher-secondary mathematics.
        </p>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div
        className={`flex flex-col gap-6 w-full select-none transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Row 1: Left to Right */}
        <div className="flex w-full overflow-hidden py-2 mask-gradient">
          <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused] cursor-pointer">
            {row1.map((item, i) => (
              <div
                key={i}
                className="mx-4 flex flex-col justify-center bg-[#f8fafc] border border-[#e2e8f0] px-8 py-5 rounded-2xl shadow-sm hover:border-[#6366f1] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 min-w-[220px]"
              >
                <span className="font-['Poppins'] font-bold text-[18px] text-[#1a1a2e]">
                  {item.name}
                </span>
                <span className="font-mono text-[12px] text-[#6366f1] mt-1.5 opacity-80">
                  {item.formula}
                </span>
              </div>
            ))}
            {/* Clone for Infinite Loop */}
            {row1.map((item, i) => (
              <div
                key={`clone-${i}`}
                className="mx-4 flex flex-col justify-center bg-[#f8fafc] border border-[#e2e8f0] px-8 py-5 rounded-2xl shadow-sm hover:border-[#6366f1] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 min-w-[220px]"
              >
                <span className="font-['Poppins'] font-bold text-[18px] text-[#1a1a2e]">
                  {item.name}
                </span>
                <span className="font-mono text-[12px] text-[#6366f1] mt-1.5 opacity-80">
                  {item.formula}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-full overflow-hidden py-2 mask-gradient">
          <div className="flex w-max animate-marquee-rtl hover:[animation-play-state:paused] cursor-pointer">
            {row2.map((item, i) => (
              <div
                key={i}
                className="mx-4 flex flex-col justify-center bg-[#f8fafc] border border-[#e2e8f0] px-8 py-5 rounded-2xl shadow-sm hover:border-[#6366f1] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 min-w-[220px]"
              >
                <span className="font-['Poppins'] font-bold text-[18px] text-[#1a1a2e]">
                  {item.name}
                </span>
                <span className="font-mono text-[12px] text-[#6366f1] mt-1.5 opacity-80">
                  {item.formula}
                </span>
              </div>
            ))}
            {/* Clone for Infinite Loop */}
            {row2.map((item, i) => (
              <div
                key={`clone-${i}`}
                className="mx-4 flex flex-col justify-center bg-[#f8fafc] border border-[#e2e8f0] px-8 py-5 rounded-2xl shadow-sm hover:border-[#6366f1] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 min-w-[220px]"
              >
                <span className="font-['Poppins'] font-bold text-[18px] text-[#1a1a2e]">
                  {item.name}
                </span>
                <span className="font-mono text-[12px] text-[#6366f1] mt-1.5 opacity-80">
                  {item.formula}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
