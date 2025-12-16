import React from 'react';
import { Book, TrendingUp, DollarSign, PieChart, PenTool, CheckCircle } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-amap-green text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">A Transformative 8-Week Journey</h1>
          <p className="text-xl max-w-3xl text-green-50">
            Master the skills African economies need most from monetary policy to economic modeling 
            in an intensive free online program.
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-amap-gold">8 Weeks</p>
            <p className="text-gray-600">Intensive Online Training</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amap-gold">100%</p>
            <p className="text-gray-600">Free of Cost</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amap-gold">Interactive</p>
            <p className="text-gray-600">Live Sessions & Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amap-gold">Feb 2025</p>
            <p className="text-gray-600">Next Cohort Begins</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Curriculum That Matters for Africa</h2>

          <div className="space-y-12">
            {/* Module 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 p-4 rounded-full">
                <DollarSign className="w-8 h-8 text-amap-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amap-black mb-3">Monetary Policy Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Understand how central banks manage inflation, stabilize currencies, and promote economic growth in African contexts.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Central banking in African economies</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Inflation targeting and price stability</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Currency dynamics & FX markets</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Global monetary trends impact</li>
                </ul>
              </div>
            </div>

            {/* Module 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-yellow-100 p-4 rounded-full">
                <TrendingUp className="w-8 h-8 text-amap-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amap-black mb-3">Fiscal Policy & Development</h3>
                <p className="text-gray-600 mb-4">
                  Master government spending, taxation, and budget management to address poverty and infrastructure gaps.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Taxation policy and compliance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Budget deficits & debt sustainability</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Public investment spending</li>
                </ul>
              </div>
            </div>

            {/* Module 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 p-4 rounded-full">
                <PieChart className="w-8 h-8 text-amap-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amap-black mb-3">Economic Modeling & Forecasting</h3>
                <p className="text-gray-600 mb-4">
                  Develop technical skills in using data to predict economic trends and evaluate policy scenarios.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Forecasting GDP, inflation, unemployment</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Building simple macroeconomic models</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-gold rounded-full mr-2"></span>Scenario analysis</li>
                </ul>
              </div>
            </div>
            
             {/* Module 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-yellow-100 p-4 rounded-full">
                <PenTool className="w-8 h-8 text-amap-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amap-black mb-3">Policy Writing & Communication</h3>
                <p className="text-gray-600 mb-4">
                  Transform complex analysis into clear, actionable policy recommendations for decision-makers.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Writing effective policy briefs</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Evidence-based argumentation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-amap-green rounded-full mr-2"></span>Building persuasive economic narratives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills You'll Gain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Understand Macroeconomic Dynamics in African contexts",
              "Analyze Economic Data with technical proficiency",
              "Write Policy Recommendations that are actionable",
              "Build Economic Models and run scenarios",
              "Think Critically about complex economic challenges",
              "Communicate Effectively to technical and non-technical audiences"
            ].map((skill, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-amap-green mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;