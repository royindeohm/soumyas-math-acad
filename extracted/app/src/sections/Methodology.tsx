import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Lightbulb, Target, ClipboardCheck, Users } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    iconBg: '#dbeafe',
    title: 'Concept Clarity',
    description:
      "Every topic is broken down to its fundamental concepts. Students understand the 'why' before the 'how'.",
  },
  {
    icon: Target,
    iconBg: '#ede9fe',
    title: 'Structured Practice',
    description:
      'Graduated problem sets build from basic to advanced. Regular assignments reinforce classroom learning.',
  },
  {
    icon: ClipboardCheck,
    iconBg: '#d1fae5',
    title: 'Regular Assessment',
    description:
      'Weekly tests and monthly evaluations track progress. Detailed feedback helps identify and address weak areas.',
  },
  {
    icon: Users,
    iconBg: '#fee2e2',
    title: 'Personal Attention',
    description:
      'Small batch sizes ensure every student receives individual guidance. Doubt-clearing sessions are always available.',
  },
];

export default function Methodology() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      id="methodology"
      ref={sectionRef}
      className="w-full py-16 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">TEACHING METHODOLOGY</p>
          <h2 className="heading-2">Our Learning Approach</h2>
        </div>

        {/* 3D Rotating Cube */}
        <div
          className={`flex justify-center my-20 transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: 300, perspective: 800 }}
        >
          <div
            className="cube relative"
            style={{ width: 200, height: 200, transformStyle: 'preserve-3d' }}
          >
            <div className="face face-1">UNDERSTAND</div>
            <div className="face face-2">PRACTICE</div>
            <div className="face face-3">ASSESS</div>
            <div className="face face-4">IMPROVE</div>
            <div className="face face-5">REVIEW</div>
            <div className="face face-6">EXCEL</div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto mt-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex gap-5 transition-all duration-500 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[30px]'
              }`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: feature.iconBg }}
              >
                <feature.icon size={28} className="text-[#6366f1]" />
              </div>

              {/* Text */}
              <div>
                <h4 className="font-['Poppins'] font-semibold text-[20px] text-[#1a1a2e] mb-2">
                  {feature.title}
                </h4>
                <p className="font-['Inter'] text-[16px] text-[#4a5568] leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
