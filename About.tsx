import React from 'react';
import { Target, Users, BookOpen, Heart, ShieldCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-amap-green text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amap-green to-green-900/30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Africa's Economic Intelligence</h1>
          <p className="text-xl max-w-3xl text-green-50">
            AMAP exists to transform how emerging African students understand, analyze, and respond to 
            the macroeconomic forces shaping our continent's future.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-amap-black mb-6">Why AMAP Was Founded</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Africa's economic potential is undeniable. With the world's youngest population, abundant 
              natural resources, and growing regional integration, our continent is poised for unprecedented 
              growth. Yet, this potential can only be realized with skilled economic analysts who understand 
              the unique challenges and opportunities facing African nations.
            </p>
            <p className="text-xl font-medium text-amap-green mb-6">
              AMAP was founded on a simple but powerful belief: Africa's economic future must be shaped by Africans.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Too often, critical economic decisions affecting our communities are made without sufficient 
              input from homegrown analysts who deeply understand local contexts, cultural nuances, and the 
              interconnected nature of African economies. We created AMAP to equip a new generation with 
              world-class skills.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-amap-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Target className="text-amap-gold w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in curriculum design, facilitator selection, and scholar development.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <MapPin className="text-amap-green w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Pan-African Unity</h3>
              <p className="text-gray-600">We celebrate Africa's diversity while fostering collaboration and knowledge-sharing across all 54 nations.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Users className="text-amap-gold w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Practical Impact</h3>
              <p className="text-gray-600">Our focus is on real-world application of macroeconomic skills that translate directly into policy impact.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Heart className="text-amap-green w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Accessibility</h3>
              <p className="text-gray-600">Economic education should not be a privilege. AMAP is free and accessible to talented students regardless of background.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <BookOpen className="text-amap-gold w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Data-Driven Thinking</h3>
              <p className="text-gray-600">We train scholars to base their analysis and recommendations on empirical evidence, not assumptions.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <ShieldCheck className="text-amap-green w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-amap-black">Ethical Leadership</h3>
              <p className="text-gray-600">We cultivate analysts who understand their responsibility to serve the public good and advance sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMAP Difference */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-12">
             <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-amap-black mb-8">What Sets AMAP Apart</h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-xl font-bold text-amap-green mb-2">Africa-Centered Curriculum</h3>
                   <p className="text-gray-600">Unlike generic programs, we focus on dynamics relevant to African contexts—from commodity price volatility to regional trade agreements.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-amap-green mb-2">Expert Practitioner Faculty</h3>
                   <p className="text-gray-600">Our facilitators are seasoned economists from central banks, finance ministries, and international organizations.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-amap-green mb-2">No Cost Barrier</h3>
                   <p className="text-gray-600">By making the program completely free, we ensure that talent and commitment determine who accesses world-class training.</p>
                 </div>
               </div>
             </div>
             <div className="lg:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="African Collaboration" 
                  className="rounded-xl shadow-lg w-full h-auto object-cover" 
                />
                <div className="absolute -bottom-6 -left-6 bg-amap-gold p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                  <p className="text-amap-black font-bold">"Together, we're building an Africa where economic policy is informed by rigorous analysis."</p>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;