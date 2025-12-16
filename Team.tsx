import React from 'react';
import { TeamMember } from '../types';

const LEADERSHIP: TeamMember[] = [
  {
    name: "Eze Uchechukwu",
    role: "Executive Director & Founder",
    email: "uchechukwue300@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420277/Eze_Uchechukwu__Profile_-_Uchechukwu_Eze_1_ofjcru.jpg",
    bio: "The visionary founder of AMAP. He provides strategic leadership, leads resource mobilization, and builds strategic partnerships with institutions across the continent."
  },
  {
    name: "Nwanosike Chinonso Amos",
    role: "Director of Programs",
    email: "chinonsoamos22@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420304/Chinonso_Amos_s1uv1m.png",
    bio: "Curates AMAP's expert network and ensures program design is grounded in current trends. He leads curriculum delivery and participant progress tracking."
  },
  {
    name: "Edwin-Ugodu Stephen Chidi",
    role: "Director of Operations",
    email: "steven360chi@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420398/Stephen_Chidi_Edwin-Ugodu_qirxej.jpg",
    bio: "Oversees the operational backbone, from logistics to weekly assessments. He tracks KPIs and leads planning for each program cycle."
  },
  {
    name: "Ezeh Patrick",
    role: "Director of Media & Communications",
    email: "saintpatrickforchrist@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420383/Ezeh_Patrick_pqo84f.jpg",
    bio: "Manages AMAP's voice and external communications. He oversees media strategy to strengthen AMAP's visibility and reputation across Africa."
  },
  {
    name: "Egwuchukwu Maryann",
    role: "Programme Manager – Content & Delivery",
    email: "egwuchukwuemmauella024@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420329/chiamaka_egwuchukwu_pglwgi.png",
    bio: "Leads content creation and supports project planning. She ensures learning materials are academically rigorous and practically applicable."
  },
  {
    name: "Nwankwo Esther Chioma",
    role: "Human Resources Manager",
    email: "beautychiest25@gmail.com",
    image: "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420360/Chioma_Esther_lhhfds.jpg",
    bio: "Manages scholar recruitment and staff coordination. She serves as the primary liaison for scholars, ensuring a supportive and inclusive environment."
  }
];

const Team: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-amap-green text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">The Pioneers Behind AMAP</h1>
        <p className="text-xl max-w-2xl mx-auto text-green-100">
          Meet the dedicated team of leaders, educators, and visionaries working to transform economic education across Africa.
        </p>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amap-black mb-12 border-l-4 border-amap-gold pl-4">Our Leadership</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {LEADERSHIP.map((leader, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amap-black mb-1">{leader.name}</h3>
                <p className="text-amap-green font-medium text-sm mb-4 uppercase tracking-wide">{leader.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">{leader.bio}</p>
                <a 
                  href={`mailto:${leader.email}`} 
                  className="text-amap-gold hover:text-yellow-600 text-sm font-semibold flex items-center"
                >
                  Contact via Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Advisory Board Placeholder */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4">
           <h2 className="text-2xl font-bold mb-4">Advisory Board</h2>
           <p className="text-gray-600 mb-8">
             AMAP is building an Advisory Board composed of senior economists and policy experts.
             Interested in joining?
           </p>
           <a href="mailto:amapprogram2025@gmail.com" className="bg-amap-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
             Contact Us
           </a>
        </div>
      </section>
    </div>
  );
};

export default Team;