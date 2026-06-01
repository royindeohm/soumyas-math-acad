import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { ref: sectionRef, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    board: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', grade: '', board: '', message: '' });
  };

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

          {/* Right: Contact Form */}
          <div
            className={`w-full md:w-1/2 transition-all duration-600 ease-out ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[30px]'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="flex flex-col items-center mb-6">
              <a href="https://wa.me/916291210836" target="_blank" rel="noopener noreferrer" className="btn-primary-sm w-full md:w-auto text-center flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
            {/* Enquiry form removed; contact via WhatsApp above */}
          </div>
        </div>
      </div>
    </section>
  );
}
