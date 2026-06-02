import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Star } from 'lucide-react';

export default function Contact() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-16 md:py-28 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: Contact Info */}
          <div
            className={`w-full md:w-1/2 transition-all duration-600 ease-out ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-[30px]'
            }`}
          >
            <p className="section-label mb-4">GET IN TOUCH</p>
            <h2 className="heading-2 mb-8">
              Start Your Journey to Mathematical Excellence
            </h2>

            {/* Contact Details */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#6366f1]" />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[14px] text-[#4a5568] mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:6291210836"
                    className="font-['Poppins'] font-semibold text-[20px] text-[#1a1a2e] hover:text-[#6366f1] transition-colors"
                  >
                    6291210836
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#6366f1]" />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[14px] text-[#4a5568] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:soumyadip.biswas16@gmail.com"
                    className="font-['Poppins'] font-semibold text-[18px] text-[#1a1a2e] hover:text-[#6366f1] transition-colors break-all"
                  >
                    soumyadip.biswas16@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d1fae5] flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#6366f1]" />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[14px] text-[#4a5568] mb-1">
                    Visit Us
                  </p>
                  <p className="font-['Poppins'] font-semibold text-[18px] text-[#1a1a2e]">
                    Narayanpur, Jhilbagan, Kankinara,
                    <br />
                    West Bengal – 743126
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d88.39!3d22.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU2JzI0LjAiTiA4OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="280"
                style={{ border: 0, filter: 'grayscale(0.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Soumya's Mathematics Academy Location - Kankinara"
              />
            </div>
          </div>

          {/* Right: WhatsApp CTA & Interactive Elements */}
          <div
            className={`w-full md:w-1/2 transition-all duration-600 ease-out ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[30px]'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            {/* WhatsApp CTA Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#075e54] to-[#128c7e] p-8 md:p-10 text-white overflow-hidden mb-8 group">
              {/* Decorative circles */}
              <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] rounded-full bg-white/10 animate-pulse" />
              <div className="absolute bottom-[-30px] left-[-30px] w-[90px] h-[90px] rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {/* WhatsApp icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-bold text-[22px] leading-tight">Chat with Us</h3>
                    <p className="font-['Inter'] text-[14px] text-white/80">Instant replies on WhatsApp</p>
                  </div>
                </div>

                <p className="font-['Inter'] text-[16px] text-white/90 leading-relaxed mb-6">
                  Have questions about admissions, batch timings, or course fees? Send us a message and get a quick response.
                </p>

                <a
                  href="https://wa.me/916291210836?text=Hi%2C%20I%20am%20interested%20in%20joining%20Soumya%27s%20Mathematics%20Academy.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#075e54] font-['Poppins'] font-bold text-[16px] px-8 py-4 rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn"
                >
                  <MessageCircle size={22} />
                  Start WhatsApp Chat
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center">
                  <Clock size={20} className="text-[#6366f1]" />
                </div>
                <h4 className="font-['Poppins'] font-bold text-[16px] text-[#1a1a2e]">Class Timings</h4>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-2 border-b border-[#e2e8f0] last:border-0">
                  <span className="font-['Inter'] text-[14px] text-[#4a5568]">Monday – Friday</span>
                  <span className="font-['Poppins'] font-semibold text-[14px] text-[#1a1a2e]">4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#e2e8f0] last:border-0">
                  <span className="font-['Inter'] text-[14px] text-[#4a5568]">Saturday</span>
                  <span className="font-['Poppins'] font-semibold text-[14px] text-[#1a1a2e]">10:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-['Inter'] text-[14px] text-[#4a5568]">Sunday</span>
                  <span className="font-['Poppins'] font-semibold text-[14px] text-[#ef4444]">Closed</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#faf5ff] to-[#ede9fe] p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <span className="font-['Inter'] font-semibold text-[14px] text-[#4a5568]">Trusted by 250+ families</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 rounded-xl p-4 text-center border border-white/50">
                  <p className="font-['Poppins'] font-bold text-[24px] text-[#6366f1]">6+</p>
                  <p className="font-['Inter'] text-[12px] text-[#4a5568] mt-1">Years Teaching</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center border border-white/50">
                  <p className="font-['Poppins'] font-bold text-[24px] text-[#6366f1]">250+</p>
                  <p className="font-['Inter'] text-[12px] text-[#4a5568] mt-1">Students Mentored</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center border border-white/50">
                  <p className="font-['Poppins'] font-bold text-[24px] text-[#6366f1]">3</p>
                  <p className="font-['Inter'] text-[12px] text-[#4a5568] mt-1">Boards Covered</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center border border-white/50">
                  <p className="font-['Poppins'] font-bold text-[24px] text-[#6366f1]">95%</p>
                  <p className="font-['Inter'] text-[12px] text-[#4a5568] mt-1">Success Rate</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
