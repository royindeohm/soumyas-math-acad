import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, Calculator, BookOpen, GraduationCap } from 'lucide-react';

export default function Courses() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courseData = [
    {
      id: 'middle-school',
      title: 'Secondary Division',
      classes: 'Classes VI - X',
      board: 'West Bengal Board',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      icon: GraduationCap,
      color: 'from-[#dbeafe] to-[#bfdbfe]',
      highlights: [
        'Fundamental concept building from basic arithmetic to algebra',
        'Chapter-wise custom worksheets and daily practice task sheets',
        'Weekly assessment tests with detailed tutor evaluation',
        'Interactive small batches ensuring personal attention to every student',
        'Doubt-clearing sessions tailored around board exams'
      ]
    },
    {
      id: 'higher-secondary',
      title: 'Higher Secondary Division',
      classes: 'Classes XI - XII',
      board: 'West Bengal Board',
      subjects: ['Mathematics', 'Biology'],
      icon: BookOpen,
      color: 'from-[#ede9fe] to-[#ddd6fe]',
      highlights: [
        'Rigorous study of Advanced Algebra, Calculus, and Trigonometry',
        'Comprehensive syllabus coverage of West Bengal Board (WBCHSE)',
        'Extensive practice of Previous Years Question Papers (PYQs)',
        'Regular mock board exams simulating actual exam conditions',
        'Special board answer writing guidelines to score 90%+'
      ]
    },
    {
      id: 'national-boards',
      title: 'National Boards Division',
      classes: 'Classes X - XII',
      board: 'ICSE & CBSE Boards',
      subjects: ['Mathematics'],
      icon: Calculator,
      color: 'from-[#d1fae5] to-[#a7f3d0]',
      highlights: [
        'Customized coaching for ICSE, ISC, and CBSE mathematics syllabus',
        'Structured problem-solving strategies for higher-tier questions',
        'Regular mock tests tracking student performance and progress',
        'Detailed evaluation sessions to clear doubts and rectify errors',
        'Exam-focused training with special tips and speed formulas'
      ]
    }
  ];

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="w-full py-16 md:py-28 bg-[#f8fafc]"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">COURSES OFFERED</p>
          <h2 className="heading-2 mb-4">Comprehensive Academic Programs</h2>
          <p className="font-['Inter'] text-[#4a5568] max-w-[600px] mx-auto text-[16px] md:text-[18px]">
            Explore our curriculum structured to deliver high-quality, concept-based coaching across different class divisions.
          </p>
        </div>

        {/* Tabs Section */}
        <div
          className={`transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="middle-school" className="w-full">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full bg-[#ede9fe]/30 border border-[#e2e8f0] p-1.5 rounded-2xl mb-12 gap-2">
              {courseData.map((course) => (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className="py-3 px-2 md:py-4 rounded-xl text-center font-['Poppins'] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 data-[state=active]:bg-[#6366f1] data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  <span className="hidden sm:inline-block mr-2">
                    <course.icon size={16} />
                  </span>
                  {course.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {courseData.map((course) => {
              const Icon = course.icon;
              return (
                <TabsContent key={course.id} value={course.id} className="outline-none">
                  <div className="bg-white rounded-[24px] p-8 md:p-12 border border-[#e2e8f0] shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-10 items-start">
                    
                    {/* Card Left Info */}
                    <div className="w-full md:w-[40%]">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${course.color} flex items-center justify-center mb-6`}>
                        <Icon size={28} className="text-[#6366f1]" />
                      </div>
                      
                      <p className="font-['Poppins'] font-bold text-xs uppercase tracking-wider text-[#6366f1] mb-2">
                        {course.board}
                      </p>
                      
                      <h3 className="font-['Poppins'] font-bold text-2xl md:text-3xl text-[#1a1a2e] mb-4">
                        {course.classes}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {course.subjects.map((sub, i) => (
                          <span
                            key={i}
                            className="font-['Inter'] font-semibold text-xs px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={scrollToContact}
                        className="btn-primary-sm w-full md:w-auto text-center"
                      >
                        Enquire About Batches
                      </button>
                    </div>

                    {/* Card Right Highlights */}
                    <div className="w-full md:w-[60%] border-t md:border-t-0 md:border-l border-[#e2e8f0] pt-8 md:pt-0 md:pl-10">
                      <h4 className="font-['Poppins'] font-semibold text-[15px] text-[#1a1a2e] uppercase tracking-wider mb-6">
                        Course Features & Highlights
                      </h4>
                      <ul className="flex flex-col gap-4">
                        {course.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#d1fae5] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="text-[#059669]" />
                            </div>
                            <span className="font-['Inter'] text-[15px] md:text-[16px] text-[#4a5568] leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

      </div>
    </section>
  );
}
