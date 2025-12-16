import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe2, GraduationCap, Laptop, Lightbulb, CheckCircle } from 'lucide-react';

const VIDEO_URL = "https://res.cloudinary.com/dttoqt6w7/video/upload/v1765422243/Generated_File_December_11_2025_-_4_02AM_lv4rts.mp4";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Since there is no backend, we open a mailto link to the program email
      window.location.href = `mailto:amapprogram2025@gmail.com?subject=Join AMAP Waitlist&body=I would like to join the waitlist for the next cohort. My email is: ${email}`;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="object-cover w-full h-full opacity-100"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
          {/* Overlay - Brightened to bg-black/40 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Empowering Africa's Next Generation of <span className="text-white">Economic Analysts</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            A free, intensive 8-week online program equipping emerging African students with advanced 
            macroeconomic analysis skills, policy expertise, and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply" 
              className="px-8 py-4 bg-amap-green text-white rounded-md font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
            >
              Get Notified for Next Cohort
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-md font-bold text-lg hover:bg-white/20 transition"
            >
              Learn More About AMAP
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amap-black mb-4">Our Vision & Mission</h2>
            <div className="h-1 w-24 bg-amap-gold mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-amap-green shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-amap-gold w-8 h-8" />
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To equip emerging African students with advanced skills in macroeconomic analysis, 
                data-driven policy insights, and economic intelligence, empowering students to 
                think critically about global and Economic issues and their implication for 
                governments and societies.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-amap-gold shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="text-amap-green w-8 h-8" />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower emerging African students with the technical expertise, critical thinking 
                skills and data-driven analytical tools required to understand, interpret and respond 
                to macroeconomic trends shaping Africa and local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMAP Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Graph showing African Economic Growth" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amap-black mb-6">Why Africa Needs Economic Analysts Now</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Africa stands at a critical economic crossroads. With a young, dynamic population and rapidly 
                evolving economies, our continent needs skilled analysts who understand the complexities of 
                monetary policy, fiscal strategies, external sector dynamics, and sustainable development.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                AMAP bridges the gap between academic theory and real-world economic challenges, preparing 
                scholars to become the policy advisors, researchers, and economic thought leaders Africa needs.
              </p>
              <Link to="/about" className="text-amap-green font-semibold flex items-center hover:underline">
                Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-amap-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Makes AMAP Different</h2>
            <p className="text-green-100">Unique features of our program</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-amap-green font-bold text-lg">0%</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amap-black">100% Free</h3>
              <p className="text-gray-600 text-sm">No tuition fees. Selection based purely on merit and commitment to Africa's economic future.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe2 className="text-amap-green w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amap-black">Pan-African</h3>
              <p className="text-gray-600 text-sm">Connect with fellow emerging economists from across all African nations in a collaborative environment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-amap-green w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amap-black">Expert-Led</h3>
              <p className="text-gray-600 text-sm">Learn from seasoned economists, policy experts, and practitioners with real-world experience.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-amap-green w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amap-black">Practical Skills</h3>
              <p className="text-gray-600 text-sm">Gain hands-on experience in economic modeling, policy writing, and data-driven analysis.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Laptop className="text-amap-green w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amap-black">Online & Flexible</h3>
              <p className="text-gray-600 text-sm">Access world-class training from anywhere in Africa through our fully online, interactive 8-week program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amap-black">Ready to Shape Africa's Economic Future?</h2>
          <p className="text-xl mb-8 text-gray-600">Our next cohort begins in February 2025.</p>
          <div className="bg-slate-100 border border-gray-200 p-8 rounded-xl shadow-sm">
             <h3 className="text-xl font-semibold mb-4 text-amap-black">Be First to Know When Applications Open</h3>
             <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleNotify}>
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email address" 
                 className="flex-grow px-4 py-3 rounded-md text-gray-900 bg-white border-2 border-amap-green focus:outline-none focus:ring-2 focus:ring-amap-green"
                 required
               />
               <button type="submit" className="bg-amap-green text-white px-6 py-3 rounded-md font-bold hover:bg-green-800 transition-colors">
                 Notify Me
               </button>
             </form>
             {submitted && (
                <div className="mt-4 text-amap-green flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  <span>Preparing email draft...</span>
                </div>
             )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;