import React from "react";
import { Routes, Route } from "react-router-dom";
import IOSResume from "./resume.jsx";
import AdobeResume from "./src/components/AdobeResume";
import ExpediaResume from "./src/components/ExpediaResume";

export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<IOSResume />} />
        <Route path="/adobe" element={<AdobeResume />} />
        <Route path="/expedia" element={<ExpediaResume />} />
        <Route path="/netflix" element={<div className="flex items-center justify-center min-h-screen bg-black text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">🎬 Netflix Theme</h1>
            <p className="text-xl text-gray-400">Coming Soon...</p>
          </div>
        </div>} />
      </Routes>
    </div>
  );
}
