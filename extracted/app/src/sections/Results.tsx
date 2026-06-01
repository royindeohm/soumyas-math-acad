import { useEffect, useRef, useState, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const stats = [
  { value: 500, suffix: '+', label: 'Students Mentored' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Boards Covered' },
];

const testimonials = [
  {
    quote:
      "Sir made mathematics so simple for my son. His grades improved from 65% to 92% in just one year.",
    author: 'Parent of Class X student',
    board: 'WB Board',
  },
  {
    quote:
      'The personal attention and structured approach helped me score 95 in Maths in my ICSE boards.',
    author: 'Former student',
    board: 'Class X',
  },
  {
    quote:
      'Best mathematics teacher in Kankinara area. My daughter actually enjoys solving problems now.',
    author: 'Parent of Class VIII student',
    board: '',
  },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInView, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: 1.5 + Math.random() * 1.5,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    initParticles(rect.width, rect.height);

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // IntersectionObserver for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const animate = () => {
      if (isVisibleRef.current) {
        const w = rect.width;
        const h = rect.height;
        ctx.clearRect(0, 0, w, h);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;

          // Mouse repulsion
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            const force = (200 - dist) / 200 * 0.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(165, 180, 252, 0.6)';
          ctx.fill();

          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const ddx = p.x - p2.x;
            const ddy = p.y - p2.y;
            const d = Math.sqrt(ddx * ddx + ddy * ddy);
            if (d < 150) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(165, 180, 252, ${(1 - d / 150) * 0.15})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

export default function Results() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative w-full py-16 md:py-28 bg-[#1e1b4b] overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4" style={{ color: '#a5b4fc' }}>
            TRACK RECORD
          </p>
          <h2 className="heading-2 text-white">Proven Results, Year After Year</h2>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-12 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-600 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[30px]'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-[#a5b4fc]">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="font-['Inter'] text-[16px] text-[rgba(255,255,255,0.7)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 transition-all duration-600 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[40px]'
              }`}
              style={{ transitionDelay: `${0.4 + i * 0.2}s` }}
            >
              <p className="font-['Inter'] text-[16px] text-[rgba(255,255,255,0.85)] italic leading-[1.7]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-['Inter'] font-medium text-[14px] text-[#a5b4fc] mt-4">
                {testimonial.author}
                {testimonial.board && (
                  <span className="text-[rgba(255,255,255,0.5)]">
                    {' '}
                    · {testimonial.board}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
