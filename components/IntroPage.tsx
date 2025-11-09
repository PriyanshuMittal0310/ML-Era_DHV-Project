"use client"

import type React from "react"
import { SpecialistTeamAnimation } from "./SpecialistTeamAnimation"

interface IntroPageProps {
  onStart: () => void
  onInteractiveSummary?: () => void
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart, onInteractiveSummary }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-sm font-medium text-cyan-300">Interactive Learning Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Art of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Boosting</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover how the world's most powerful machine learning algorithms work through an interactive story about
            building the ultimate team of loan decision-makers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30"
            >
              <span>Start Learning</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            {onInteractiveSummary && (
              <button
                onClick={onInteractiveSummary}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-slate-600"
              >
                <span>📊 Full Overview</span>
              </button>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Specialist Team Animation Section */}
      <SpecialistTeamAnimation />

      {/* Features Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What You'll Learn</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AdaBoost</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Learn how to build a team by focusing on the hardest cases. Each team member learns from the mistakes of
                others.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10h8M13 14h8M13 18h8M5 10h.01M5 14h.01M5 18h.01M3 21h18a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gradient Boost</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Understand how to step-by-step improve predictions by having experts fix mistakes one after another.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">XGBoost</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Master the super-fast version that powers real-world systems and competitions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Boosting Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-lg bg-slate-700/30 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Why Learn About Boosting?</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              These algorithms are used by banks, tech companies, and hospitals to make smart decisions. They take
              multiple simple ideas and combine them into one powerful system—just like building an expert team.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-slate-300">Powers real-world AI systems</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-slate-300">Used by top companies</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-slate-300">Easier to understand than it sounds</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-slate-300">Learn a skill that matters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPage
