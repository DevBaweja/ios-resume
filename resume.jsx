import React from "react";

function Symbol({ name, className = "w-5 h-5" }) {
  // Minimal SF Symbols-like inline SVGs (not official assets)
  const common = "fill-current";
  switch (name) {
    case "phone.fill":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.52a1 1 0 0 1-1 1C11.3 22.84 1.16 12.7 1.16 1.99a1 1 0 0 1 1-1H5.7a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.4 2.4z" />
        </svg>
      );
    case "envelope.fill":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 5.4V5zm0 3.2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.2l-9.35 5.84a2 2 0 0 1-2.3 0L2 8.2z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M10.59 13.41a1.996 1.996 0 0 1 0-2.82l3.18-3.18a4 4 0 1 1 5.66 5.66l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a2 2 0 1 0-2.83-2.83l-3.18 3.18a2 2 0 0 0 0 2.83 1 1 0 1 1-1.41 1.41z" />
          <path d="M13.41 10.59a1.996 1.996 0 0 1 0 2.82l-3.18 3.18a4 4 0 1 1-5.66-5.66l1.41-1.41a1 1 0 1 1 1.41 1.41L6 10.35a2 2 0 1 0 2.83 2.83l3.18-3.18a2 2 0 0 0 0-2.83 1 1 0 1 1 1.41-1.41z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.27.82-.6v-2.1c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.1-.79.42-1.32.76-1.62-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.78.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.47 5.97.43.37.82 1.1.82 2.23v3.31c0 .33.22.7.82.6A12 12 0 0 0 12 .5z" />
        </svg>
      );
    case "location.fill":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M2.5 9.5a15 15 0 0 1 19 0 1 1 0 1 1-1.3 1.5 13 13 0 0 0-16.4 0A1 1 0 1 1 2.5 9.5zm3 4a10 10 0 0 1 13 0 1 1 0 1 1-1.3 1.5 8 8 0 0 0-10.4 0A1 1 0 0 1 5.5 13.5zm3 4a5 5 0 0 1 7 0 1 1 0 1 1-1.4 1.5 3 3 0 0 0-4.2 0A1 1 0 0 1 8.5 17.5z" />
        </svg>
      );
    case "cellular":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <rect x="3" y="14" width="3" height="7" rx="1" />
          <rect x="8.5" y="11" width="3" height="10" rx="1" />
          <rect x="14" y="8" width="3" height="13" rx="1" />
          <rect x="19.5" y="5" width="3" height="16" rx="1" />
        </svg>
      );
    case "battery":
      return (
        <svg viewBox="0 0 28 14" className={`${className} ${common}`} aria-hidden="true">
          <rect x="1" y="2" width="24" height="10" rx="2" />
          <rect x="25.5" y="5" width="2" height="4" rx="1" />
          <rect x="3" y="4" width="20" height="6" rx="1" className="fill-white" />
        </svg>
      );
    case "chevron.right":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <div className="relative z-20 flex items-center justify-between px-4 pt-3 text-[13px] text-white/90">
      <div className="font-medium tracking-tight">{time}</div>
      <div className="flex items-center gap-2">
        <Symbol name="cellular" className="w-4 h-4 text-white/80" />
        <Symbol name="wifi" className="w-4 h-4 text-white/80" />
        <Symbol name="battery" className="w-8 h-3.5 text-white/80" />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-10">
      <div className="absolute left-1/2 top-2 -translate-x-1/2 bg-black rounded-b-3xl rounded-t-3xl w-36 h-6" />
      <div className="backdrop-blur-md bg-[#1C1C1E]/70 border-b border-white/10 pt-6">
        <div className="px-4 pb-2">
          <div className="text-[11px] uppercase tracking-widest text-white/60">Profile</div>
          <div className="flex items-end justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Sonali</h1>
            <div className="text-[12px] text-white/60">iOS Software Engineer</div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <a href="mailto:sonali120920@gmail.com" className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-[12px] text-blue-400 transition active:scale-95">
              Email
            </a>
            <a href="https://www.linkedin.com/in/sonali-a989a8192/" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-[12px] text-blue-400 transition active:scale-95">
              LinkedIn
            </a>
            <a href="https://github.com/Sonali12920/" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-[12px] text-blue-400 transition active:scale-95">
              GitHub
            </a>
            <a href="tel:+919667150067" className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-[12px] text-blue-400 transition active:scale-95">
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group({ title, children }) {
  return (
    <section className="px-4">
      {title && <h2 className="px-2 pb-1.5 pt-3 text-[12px] font-medium tracking-wide text-white/55">{title}</h2>}
      <div className="rounded-2xl bg-[#2C2C2E] overflow-hidden ring-1 ring-white/10">
        {children}
      </div>
    </section>
  );
}

function Cell({ leading, title, subtitle, trailing, onClick, children, compact = false }) {
  return (
    <div
      onClick={onClick}
      className={`flex ${compact ? "py-2" : "py-2.5"} px-4 items-start gap-3 hover:bg-white/5 active:scale-[0.995] transition cursor-pointer ios-tap-effect`}
    >
      {leading && <div className="mt-0.5 text-white/80 flex-shrink-0">{leading}</div>}
      <div className="flex-1 min-w-0">
        {title && <div className="text-[14px] leading-tight font-medium">{title}</div>}
        {subtitle && <div className="text-[12px] text-white/60 mt-0.5">{subtitle}</div>}
        {children}
      </div>
      {trailing && <div className="self-center ml-2 text-white/40 flex-shrink-0">{trailing}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="relative">
        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-b from-white/10 to-transparent rounded-[64px]" />
        {/* iPhone frame */}
        <div className="relative rounded-[56px] bg-black border border-white/10 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
          <div className="rounded-[48px] bg-black ring-1 ring-white/10 p-2">
            {/* Screen */}
            <div className="relative rounded-[40px] overflow-hidden bg-[#1C1C1E] w-[min(26rem,90vw)] h-[min(54rem,90vh)] ios-glow">
              <div className="absolute inset-0 flex flex-col">
                <StatusBar />
                <NavBar />
                <div className="flex-1 overflow-y-auto scroll-smooth pb-10 ios-scrollbar">
                  {/* Contact & Summary */}
                  <Group title="Contact & Summary">
                    <div className="divide-y divide-white/10">
                      <Cell
                        leading={<Symbol name="phone.fill" className="w-4 h-4 text-green-400" />}
                        title="+91 9667150067"
                        subtitle="Mobile"
                        compact
                      />
                      <Cell
                        leading={<Symbol name="envelope.fill" className="w-4 h-4 text-blue-400" />}
                        title="sonali120920@gmail.com"
                        subtitle="Email"
                        compact
                      />
                      <Cell
                        leading={<Symbol name="location.fill" className="w-4 h-4 text-red-400" />}
                        title="Gurugram, Delhi"
                        subtitle="India"
                        compact
                      />
                      <Cell>
                        <p className="text-[13px] leading-5 text-white/90">
                          iOS Software Engineer with 3 years of experience delivering scalable, high-performance apps at OYO. Skilled
                          in Swift, SwiftUI, and UIKit, with a strong grasp of the full software development lifecycle—from
                          problem-solving and architecture to integration, testing, and release. Proven track record of shipping features
                          that enhanced user growth, engagement, and app stability.
                        </p>
                      </Cell>
                    </div>
                  </Group>

                  {/* Skills */}
                  <Group title="Skills">
                    <div className="divide-y divide-white/10">
                      <Cell title="Programming Languages" subtitle="Swift, Objective-C, C++, SwiftUI" compact />
                      <Cell title="iOS Frameworks & Design Patterns" subtitle="UIKit, SwiftUI, CoreData, VIPER, MVVM, MVC, Singleton, Delegate" compact />
                      <Cell title="Tools & Platforms" subtitle="Xcode, Git, Firebase, Jira, Postman, Sourcetree, Charles Proxy" compact />
                      <Cell title="Core Concepts" subtitle="Object-Oriented Programming (OOP), Data Structures & Algorithms, Operating Systems, DBMS" compact />
                    </div>
                  </Group>

                  {/* Experience */}
                  <Group title="Work Experience">
                    <div className="divide-y divide-white/10">
                      <Cell
                        title="Software Development Engineer (iOS)"
                        subtitle="OYO Rooms • Gurugram • Jul 2022 – Present"
                      >
                        <ul className="mt-2 list-disc pl-4 space-y-1.5 text-[12px] leading-5 text-white/90">
                          <li>
                            Contributed to reducing app build time by over 80% (40 mins → 5 mins) and app size by nearly 50% (212MB →
                            116MB) by modularizing targets, optimizing assets, and helping eliminate redundant build phases.
                          </li>
                          <li>
                            Created a unit test build-breaker workflow in CI to enforce minimum test coverage and prevent untested code
                            merges, improving code reliability and reducing regressions by 25%.
                          </li>
                          <li>
                            Built a centralized Resolver using protocol-oriented design to separate OYO, My6, and Check-In logic within a
                            unified iOS codebase—enhancing modularity and reducing duplicate code by 40%.
                          </li>
                          <li>
                            Developed complete authentication for Check-In app (email, guest, OAuth) and gallery view in SwiftUI, ensuring a
                            secure and consistent UX.
                          </li>
                          <li>
                            Built My6 app’s login and listing UI, improving reliability and boosting user retention.
                          </li>
                          <li>
                            Created a multimedia SOB landing page with circular stories and videos, enhancing booking journey and increasing
                            feature interaction time by 22%.
                          </li>
                          <li>
                            Optimized homepage widgets using deep linking and caching, improving load time by 35% and boosting
                            personalization-based engagement.
                          </li>
                          <li>
                            Built dynamic filter system separating supported/unsupported filters, improving response time by 40% and
                            reducing backend errors.
                          </li>
                          <li>
                            Launched quick check-in campaigns and deep links, contributing to a 12% spike in bookings during key periods.
                          </li>
                          <li>
                            Migrated app from Xcode 14 to 15 and implemented privacy manifest, achieving 100% App Store compliance.
                          </li>
                          <li>
                            Integrated Belvilla OVH with deep linking and login support, increasing Belvilla DAU by 13–15%.
                          </li>
                          <li>
                            Revamped search with City Tiles and locality filters, boosting conversions by 12%.
                          </li>
                          <li>
                            Implemented pre/post-tax price visibility, aligning with MMT/Agoda and driving 8% DAU growth.
                          </li>
                          <li>
                            Resolved key crashes via systematic analysis, raising crash-free user rate from 99.86% to 99.93%.
                          </li>
                          <li>
                            Added detailed event tracking across flows, enabling granular product analytics and experimentation.
                          </li>
                          <li>
                            Mentored 4 iOS interns and led campus technical interviews, accelerating onboarding and strengthening hiring
                            pipeline.
                          </li>
                        </ul>
                      </Cell>

                      <Cell
                        title="Software Engineer Intern"
                        subtitle="OYO Rooms • Gurugram • Jan 2022 – Jul 2022"
                      >
                        <ul className="mt-2 list-disc pl-4 space-y-1.5 text-[12px] leading-5 text-white/90">
                          <li>Contributed to Design 2.0 by revamping the app’s UI, improving user experience.</li>
                          <li>Designed feedback sheets and integrated in-app prompts to enhance booking experience and gather user feedback.</li>
                          <li>Built a full-stack web application using React for internal job postings management at OYO.</li>
                        </ul>
                      </Cell>

                      <Cell
                        title="Product Intern"
                        subtitle="Adobe • Noida • May 2021 – Aug 2021"
                      >
                        <ul className="mt-2 list-disc pl-4 space-y-1.5 text-[12px] leading-5 text-white/90">
                          <li>Collaborated with CCX Team to add color effects to video frames and make the RUSH web features available for
                          video editing.</li>
                        </ul>
                      </Cell>
                    </div>
                  </Group>

                  {/* Education */}
                  <Group title="Education">
                    <div className="divide-y divide-white/10">
                      <Cell
                        title="Indira Gandhi Delhi Technical University for Women"
                        subtitle="Delhi, India"
                      >
                        <div className="mt-2 space-y-1">
                          <div className="text-[13px] leading-5 text-white/90">
                            <span className="font-medium">BTech, Information Technology</span>
                            <span className="text-white/60"> • 2018-2022</span>
                          </div>
                          <div className="text-[12px] text-white/80 font-medium">
                            Aggregate Percentage: 80.63%
                          </div>
                        </div>
                      </Cell>
                    </div>
                  </Group>

                  {/* Footer spacing */}
                  <div className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

