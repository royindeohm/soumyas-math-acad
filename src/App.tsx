import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Courses from '@/sections/Courses';
import Methodology from '@/sections/Methodology';
import Results from '@/sections/Results';
import Gallery from '@/sections/Gallery';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Courses />
        <Methodology />
        <Results />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
