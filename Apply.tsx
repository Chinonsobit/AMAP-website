import React, { useState } from 'react';
import { Calendar, FileText, UserCheck, Send } from 'lucide-react';

const Apply: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This will open the user's email client to send an email to AMAP
      window.location.href = `mailto:amapprogram2025@gmail.com?subject=Join AMAP Waitlist&body=I would like to join the waitlist for the next cohort. My email is: ${email}`;
    }
  };

  return (
    <div className="bg-amap-green min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Apply to Join AMAP</h1>
          <p className="text-xl text-green-50">Take the first step toward becoming part of Africa's next generation of economic analysts.</p>
        </div>

        {/* Status Box */}
        <div className="bg-white border-l-4 border-amap-gold p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-4">
            <Calendar className="text-amap-gold w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold text-amap-black">Next Cohort: February 2025</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Applications will open in the coming weeks. Join our waitlist to be notified immediately.
          </p>
          <form className="flex gap-4" onSubmit={handleJoinWaitlist}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 bg-white border-2 border-amap-green rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amap-green"
              required
            />
            <button type="submit" className="bg-amap-green text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition">
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Eligibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Who Can Apply?</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
             <div className="flex items-start">
               <UserCheck className="w-5 h-5 text-amap-green mt-1 mr-3" />
               <p className="text-gray-800"><span className="font-bold">African Student:</span> Currently enrolled or recently graduated from a university/college anywhere in Africa.</p>
             </div>
             <div className="flex items-start">
               <UserCheck className="w-5 h-5 text-amap-green mt-1 mr-3" />
               <p className="text-gray-800"><span className="font-bold">Academic Interest:</span> Demonstrated interest in economics, policy, or development (degree not required).</p>
             </div>
             <div className="flex items-start">
               <UserCheck className="w-5 h-5 text-amap-green mt-1 mr-3" />
               <p className="text-gray-800"><span className="font-bold">Commitment:</span> Able to dedicate time to the 8-week intensive program.</p>
             </div>
             <div className="flex items-start">
               <UserCheck className="w-5 h-5 text-amap-green mt-1 mr-3" />
               <p className="text-gray-800"><span className="font-bold">Technology Access:</span> Reliable internet connection and device for online learning.</p>
             </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Application Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">CV / Resume</h3>
              <p className="text-sm text-gray-600">Highlighting academic background and achievements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">Cover Letter</h3>
              <p className="text-sm text-gray-600">500-750 words explaining your interest and goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">Assessment</h3>
              <p className="text-sm text-gray-600">Behavioral questions assessing critical thinking.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Selection Process</h2>
          <div className="relative border-l-2 border-green-400/50 ml-4 space-y-10">
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold border-2 border-amap-green"></div>
              <h3 className="font-bold text-lg text-white">1. Application Submission</h3>
              <p className="text-green-100">Submit complete documents through our online portal.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold border-2 border-amap-green"></div>
              <h3 className="font-bold text-lg text-white">2. Holistic Evaluation</h3>
              <p className="text-green-100">Review of academic strength, writing quality, and passion for Africa's development.</p>
            </div>
             <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold border-2 border-amap-green"></div>
              <h3 className="font-bold text-lg text-white">3. Selection & Diversity</h3>
              <p className="text-green-100">Final selection of 100 scholars balancing merit and regional diversity.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Apply;