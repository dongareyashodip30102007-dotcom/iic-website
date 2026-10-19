"use client";

import { useState } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Glow Effects Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-purple-500/30">
              IIC
            </div>
            <span className="text-white font-bold tracking-wide text-lg hidden sm:block">
              I2IT Pune
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#initiatives" className="hover:text-white transition-colors">Initiatives</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a 
              href="https://www.instagram.com/iic_i2it" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all"
            >
              Join Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Ministry of Education Innovation Cell
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Igniting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span> <br className="hidden md:block"/> & Entrepreneurship.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The Institution's Innovation Council (IIC) at I²IT Pune is the epicenter of student-led startups, cutting-edge research, and disruptive ideas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#initiatives" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
              Explore Ecosystem
            </a>
            <a href="https://www.linkedin.com/company/iic-i2it" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
              Latest Updates
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Marquee */}
      <div className="border-y border-white/10 bg-white/[0.02] py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite] text-sm font-semibold text-gray-500 uppercase tracking-widest">
          <span>• Startup Incubation</span>
          <span>• IPR & Patents</span>
          <span>• Hackathons</span>
          <span>• Entrepreneurship Development Cell</span>
          <span>• Smart India Hackathon</span>
          <span>• Startup Incubation</span>
          <span>• IPR & Patents</span>
          <span>• Hackathons</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Building the <span className="text-purple-400">Next Generation</span> of Creators.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              IIC I2IT provides a platform for aspiring entrepreneurs and innovators to turn their ideas into reality. Through mentorship, funding opportunities, and state-of-the-art facilities, we bridge the gap between academic learning and real-world impact.
            </p>
            <ul className="space-y-4">
              {[
                "Guidance from industry experts and angel investors",
                "Access to prototyping labs and research facilities",
                "Participation in national-level innovation challenges"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-[#111] border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">EDC Collaboration</h4>
                  <p className="text-sm text-gray-500">Entrepreneurship Development Cell</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <h4 className="text-white font-bold mb-2">MoE Innovation Cell</h4>
              <p className="text-sm text-gray-400 mb-6">
                Aligned with the Ministry of Education's guidelines to foster a culture of innovation and startup creation across all higher education institutions in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events / Initiatives Section */}
      <section id="initiatives" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flagship Initiatives</h2>
            <p className="text-gray-400">Where ideas compete and brilliance shines.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Event 1 */}
            <div className="group relative bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-4">Upcoming Event</span>
              <h3 className="text-2xl font-bold text-white mb-2">ECC 2025-26</h3>
              <p className="text-gray-400 mb-6">Entrepreneurship Challenge Competition. Pitch your ideas, win prizes worth ₹30,000+, and network with industry experts.</p>
              <a href="https://www.linkedin.com/company/iic-i2it" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                Register Now 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

            {/* Event 2 */}
            <div className="group relative bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4">Ongoing</span>
              <h3 className="text-2xl font-bold text-white mb-2">Student Startup Incubation</h3>
              <p className="text-gray-400 mb-6">Get access to institutional resources, mentorship from seasoned entrepreneurs, and workspace to build your MVP.</p>
              <a href="https://www.isquareit.edu.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-bold text-xl tracking-wider">IIC I²IT</span>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-sm">
              International Institute of Information Technology, Pune. Fostering innovation and entrepreneurship.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
             <a href="https://www.instagram.com/iic_i2it" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
             <a href="https://www.linkedin.com/company/iic-i2it" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="https://linktr.ee/iic2023" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Linktree</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} IIC I2IT. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Designed & Engineered by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-sm ml-1">
              i guess you will never know ;)
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}