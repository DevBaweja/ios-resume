import React from "react";

function AdobeSymbol({ name, className = "w-5 h-5" }) {
  const common = "fill-current";
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.52a1 1 0 0 1-1 1C11.3 22.84 1.16 12.7 1.16 1.99a1 1 0 0 1 1-1H5.7a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.4 2.4z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 5.4V5zm0 3.2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.2l-9.35 5.84a2 2 0 0 1-2.3 0L2 8.2z" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.27.82-.6v-2.1c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.1-.79.42-1.32.76-1.62-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.78.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.47 5.97.43.37.82 1.1.82 2.23v3.31c0 .33.22.7.82.6A12 12 0 0 0 12 .5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    default:
      return null;
  }
}

function AdobeHeader() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-1">Sonali</h1>
            <p className="text-lg text-white/90 mb-3">iOS Software Engineer</p>
            <div className="flex flex-wrap gap-2">
              <a href="mailto:sonali120920@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                <AdobeSymbol name="email" className="w-3.5 h-3.5" />
                <span className="text-xs">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/sonali-a989a8192/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                <AdobeSymbol name="linkedin" className="w-3.5 h-3.5" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a href="https://github.com/Sonali12920/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                <AdobeSymbol name="github" className="w-3.5 h-3.5" />
                <span className="text-xs">GitHub</span>
              </a>
              <a href="tel:+919667150067" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                <AdobeSymbol name="phone" className="w-3.5 h-3.5" />
                <span className="text-xs">Call</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdobeSection({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-red-500 pb-1">{title}</h2>
      {children}
    </section>
  );
}

function AdobeCard({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-4 ${className}`}>
      {children}
    </div>
  );
}

export default function AdobeResume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdobeHeader />
      
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Summary */}
        <AdobeSection title="Professional Summary">
          <AdobeCard>
            <p className="text-gray-700 leading-relaxed text-base">
              iOS Software Engineer with 3 years of experience delivering scalable, high-performance apps at OYO. Skilled
              in Swift, SwiftUI, and UIKit, with a strong grasp of the full software development lifecycle—from
              problem-solving and architecture to integration, testing, and release. Proven track record of shipping features
              that enhanced user growth, engagement, and app stability. Eager to take on greater product ownership and
              contribute to large-scale system design and development.
            </p>
          </AdobeCard>
        </AdobeSection>

        {/* Skills */}
        <AdobeSection title="Skills">
          <div className="grid md:grid-cols-2 gap-4">
            <AdobeCard>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Swift", "Objective-C", "C++", "SwiftUI"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </AdobeCard>
            
            <AdobeCard>
              <h3 className="text-base font-semibold text-gray-800 mb-2">iOS Frameworks & Design Patterns</h3>
              <div className="flex flex-wrap gap-2">
                {["UIKit", "SwiftUI", "CoreData", "VIPER", "MVVM", "MVC", "Singleton", "Delegate"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </AdobeCard>
            
            <AdobeCard>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["Xcode", "Git", "Firebase", "Jira", "Postman", "Sourcetree", "Charles Proxy"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </AdobeCard>
            
            <AdobeCard>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Core Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "Operating Systems", "DBMS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </AdobeCard>
          </div>
        </AdobeSection>

        {/* Experience */}
        <AdobeSection title="Work Experience">
          <div className="space-y-4">
            <AdobeCard>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Software Development Engineer (iOS)</h3>
                  <p className="text-base text-red-600 font-semibold">OYO Rooms</p>
                  <p className="text-sm text-gray-600">Gurugram • Jul 2022 – Present</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    Current
                  </span>
                </div>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
                <li>• Contributed to reducing app build time by over 80% (40 mins → 5 mins) and app size by nearly 50% (212MB → 116MB) by modularizing targets, optimizing assets, and helping eliminate redundant build phases.</li>
                <li>• Created a unit test build-breaker workflow in CI to enforce minimum test coverage and prevent untested code merges, improving code reliability and reducing regressions by 25%.</li>
                <li>• Built a centralized Resolver using protocol-oriented design to separate OYO, My6, and Check-In logic within a unified iOS codebase—enhancing modularity and reducing duplicate code by 40%.</li>
                <li>• Developed complete authentication for Check-In app (email, guest, OAuth) and gallery view in SwiftUI, ensuring a secure and consistent UX.</li>
                <li>• Built My6 app's login and listing UI, improving reliability and boosting user retention.</li>
                <li>• Created a multimedia SOB landing page with circular stories and videos, enhancing booking journey and increasing feature interaction time by 22%.</li>
                <li>• Optimized homepage widgets using deep linking and caching, improving load time by 35% and boosting personalization-based engagement.</li>
                <li>• Built dynamic filter system separating supported/unsupported filters, improving response time by 40% and reducing backend errors.</li>
                <li>• Launched quick check-in campaigns and deep links, contributing to a 12% spike in bookings during key periods.</li>
                <li>• Migrated app from Xcode 14 to 15 and implemented privacy manifest, achieving 100% App Store compliance.</li>
                <li>• Integrated Belvilla OVH with deep linking and login support, increasing Belvilla DAU by 13–15%.</li>
                <li>• Revamped search with City Tiles and locality filters, boosting conversions by 12%.</li>
                <li>• Implemented pre/post-tax price visibility, aligning with MMT/Agoda and driving 8% DAU growth.</li>
                <li>• Resolved key crashes via systematic analysis, raising crash-free user rate from 99.86% to 99.93%.</li>
                <li>• Added detailed event tracking across flows, enabling granular product analytics and experimentation.</li>
                <li>• Mentored 4 iOS interns and led campus technical interviews, accelerating onboarding and strengthening hiring pipeline.</li>
              </ul>
            </AdobeCard>

            <AdobeCard>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Software Engineer Intern</h3>
                  <p className="text-base text-purple-600 font-semibold">OYO Rooms</p>
                  <p className="text-sm text-gray-600">Gurugram • Jan 2022 – Jul 2022</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
                <li>• Contributed to Design 2.0 by revamping the app's UI, improving user experience.</li>
                <li>• Designed feedback sheets and integrated in-app prompts to enhance booking experience and gather user feedback.</li>
                <li>• Built a full-stack web application using React for internal job postings management at OYO.</li>
              </ul>
            </AdobeCard>

            <AdobeCard>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Product Intern</h3>
                  <p className="text-base text-blue-600 font-semibold">Adobe</p>
                  <p className="text-sm text-gray-600">Noida • May 2021 – Aug 2021</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
                <li>• Collaborated with CCX Team to add color effects to video frames and make the RUSH web features available for video editing.</li>
              </ul>
            </AdobeCard>
          </div>
        </AdobeSection>

        {/* Education */}
        <AdobeSection title="Education">
          <AdobeCard>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Indira Gandhi Delhi Technical University for Women</h3>
                <p className="text-base text-gray-600">Delhi, India</p>
                <p className="text-sm text-gray-700">BTech, Information Technology • 2018-2022</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-700">80.63%</div>
                <div className="text-xs text-gray-500">Aggregate</div>
              </div>
            </div>
          </AdobeCard>
        </AdobeSection>
      </div>
    </div>
  );
}
