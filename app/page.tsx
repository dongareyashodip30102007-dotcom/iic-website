"use client";

import { useState } from "react";

export default function Home() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen bg-[#e9ebee] text-[#1c1e21] font-sans">
      
      {/* Top Navbar (Classic Facebook Style) */}
      <nav className="bg-[#3b5998] text-white h-12 flex items-center px-4 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tight cursor-pointer">theIIC.</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Network</button>
          <button 
            onClick={() => setJoined(!joined)}
            className={`px-2 py-1 rounded-[2px] border ${
              joined ? "bg-[#42b72a] border-[#36a420]" : "bg-[#4267B2] border-[#29487d]"
            }`}
          >
            {joined ? "✓ Joined IIC" : "Join IIC"}
          </button>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-[960px] mx-auto pt-4 flex gap-4 px-2">
        
        {/* Left Sidebar (Profile) */}
        <div className="w-[200px] hidden md:block shrink-0">
          <div className="bg-white border border-[#dddfe2] p-2">
            <div className="w-full aspect-square bg-gray-300 border border-gray-400 flex items-center justify-center text-gray-500 text-4xl font-bold mb-2">
              YD
            </div>
            <h2 className="text-sm font-bold text-[#3b5998] hover:underline cursor-pointer">
              Annoymous
            </h2>
            <p className="text-[11px] text-gray-500 mt-1 border-t border-[#dddfe2] pt-2">
              Frontend Developer<br/>
              IIC I²IT Pune
            </p>
          </div>
          
          <div className="bg-white border border-[#dddfe2] p-2 mt-4 text-[11px]">
            <h3 className="font-bold text-gray-500 mb-2">Navigation</h3>
            <ul className="space-y-1 text-[#3b5998] font-bold">
              <li className="hover:underline cursor-pointer">News Feed</li>
              <li className="hover:underline cursor-pointer">Initiatives</li>
              <li className="hover:underline cursor-pointer">Events</li>
              <li className="hover:underline cursor-pointer">Members</li>
            </ul>
          </div>
        </div>

        {/* Main Feed */}
        <div className="flex-1 max-w-[500px]">
          
          {/* Status Box / Hero */}
          <div className="bg-white border border-[#dddfe2] p-4 mb-4">
            <h1 className="text-lg font-bold text-[#3b5998] mb-2">
              Institution's Innovation Council
            </h1>
            <p className="text-[13px] mb-3">
              Igniting Innovation & Entrepreneurship at I²IT Pune. A platform for student-led startups, research, and disruptive ideas.
            </p>
            <div className="bg-[#f0f2f5] p-2 border border-[#dddfe2] text-[12px] text-gray-600">
              <strong>Ministry of Education Innovation Cell</strong>
              <br />
              Aligned with MoE guidelines.
            </div>
          </div>

          {/* Feed Items (Initiatives) */}
          <div className="bg-white border border-[#dddfe2] p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-200 border border-blue-400 flex items-center justify-center font-bold text-blue-800 text-xs">IIC</div>
              <div>
                <h3 className="text-sm font-bold text-[#3b5998] hover:underline cursor-pointer">ECC 2025-26</h3>
                <p className="text-[10px] text-gray-500">Upcoming Event</p>
              </div>
            </div>
            <p className="text-[13px]">
              Entrepreneurship Challenge Competition. Pitch your ideas, win prizes worth ₹30,000+, and network with industry experts.
            </p>
            <div className="mt-3 pt-2 border-t border-[#dddfe2] text-[11px] text-[#3b5998] font-bold">
              <a href="https://www.linkedin.com/company/iic-i2it" target="_blank" rel="noreferrer" className="hover:underline">Register Now</a>
            </div>
          </div>

          <div className="bg-white border border-[#dddfe2] p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-200 border border-green-400 flex items-center justify-center font-bold text-green-800 text-xs">EDC</div>
              <div>
                <h3 className="text-sm font-bold text-[#3b5998] hover:underline cursor-pointer">Student Startup Incubation</h3>
                <p className="text-[10px] text-gray-500">Ongoing Program</p>
              </div>
            </div>
            <p className="text-[13px]">
              Get access to institutional resources, mentorship from seasoned entrepreneurs, and workspace to build your MVP.
            </p>
            <div className="mt-3 pt-2 border-t border-[#dddfe2] text-[11px] text-[#3b5998] font-bold">
              <a href="https://www.isquareit.edu.in" target="_blank" rel="noreferrer" className="hover:underline">Learn More</a>
            </div>
          </div>

        </div>

        {/* Right Sidebar (Empty for now, classic FB feel) */}
        <div className="w-[200px] hidden lg:block shrink-0">
          <div className="bg-white border border-[#dddfe2] p-2 text-[11px] text-gray-500">
            <p className="font-bold text-gray-700 mb-1">Sponsored</p>
            <div className="w-full h-24 bg-gray-100 border border-gray-300 mb-2 flex items-center justify-center text-gray-400">
              Ad Space
            </div>
            Build your startup with IIC.
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-[960px] mx-auto mt-8 pb-8 text-[11px] text-gray-500 flex justify-between border-t border-[#dddfe2] pt-4 px-2">
        <div>
          IIC I²IT Pune © 2024<br/>
          <span className="text-[#3b5998] hover:underline cursor-pointer">About</span> · <span className="text-[#3b5998] hover:underline cursor-pointer">Privacy</span> · <span className="text-[#3b5998] hover:underline cursor-pointer">Terms</span>
        </div>
        <div className="text-right">
          Designed & Engineered by <br/>
          <strong className="text-[#3b5998]">u will never know</strong>
        </div>
      </footer>

    </div>
  );
}