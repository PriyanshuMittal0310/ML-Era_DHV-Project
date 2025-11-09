"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface BuilderStep {
  id: number
  name: string
  focus: string
  explanation: string
  boostingConcept: string
}

export const SpecialistTeamAnimation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const steps: BuilderStep[] = [
    {
      id: 1,
      name: "Foundation Specialist",
      focus: "Building Base",
      explanation:
        "The first specialist creates a basic starting point but will make mistakes. Think of this as the first attempt at solving a problem. It's not perfect, but it gives us a foundation to build on.",
      boostingConcept: "First Expert",
    },
    {
      id: 2,
      name: "Correction Specialist",
      focus: "Learning from Errors",
      explanation:
        "The second specialist looks at what the first one got wrong and tries to fix those specific mistakes. Instead of starting from scratch, they focus only on the hard cases the first specialist struggled with.",
      boostingConcept: "Error Fixer #1",
    },
    {
      id: 3,
      name: "Refinement Specialist",
      focus: "Continuous Improvement",
      explanation:
        "The third specialist catches more remaining problems and makes additional fixes. The team keeps getting better and better with each new member who joins. It's an ongoing process of improvement.",
      boostingConcept: "Error Fixer #2",
    },
    {
      id: 4,
      name: "Optimization Specialist",
      focus: "Fine-Tuning",
      explanation:
        "The fourth specialist polishes the final details and makes everything work smoothly. By now, the team has practiced so much that they're really good at their job. Small improvements still help, but big gains are done.",
      boostingConcept: "Error Fixer #3",
    },
    {
      id: 5,
      name: "Complete Team",
      focus: "Team Power",
      explanation:
        "All specialists work together as one team. Each person brings different skills and knowledge. Together, they can solve problems that no single person could solve alone. This is the power of teamwork.",
      boostingConcept: "Final Team",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4500)
    return () => clearTimeout(timer)
  }, [currentStep, isAutoPlay, steps.length])

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
    setIsAutoPlay(false)
  }

  const renderPremiumCar = () => {
    const completionPhase = currentStep
    const opacity = {
      chassis: completionPhase >= 0 ? 1 : 0.3,
      wheels: completionPhase >= 1 ? 1 : 0.2,
      body: completionPhase >= 2 ? 1 : 0.2,
      details: completionPhase >= 3 ? 1 : 0.2,
      glow: completionPhase >= 4 ? 1 : 0,
    }

    return (
      <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={opacity.body} />
            <stop offset="100%" stopColor="#0891b2" stopOpacity={opacity.body} />
          </linearGradient>

          <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={opacity.wheels} />
            <stop offset="100%" stopColor="#164e63" stopOpacity={opacity.wheels} />
          </linearGradient>

          <filter id="carGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="headlightGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="200" cy="260" rx="140" ry="15" fill="#000000" opacity="0.15" />

        {/* Car Body - Premium 3D perspective */}
        <g filter={completionPhase >= 4 ? "url(#carGlow)" : ""}>
          {/* Main chassis - 3D perspective */}
          <path
            d="M 80 160 L 320 160 L 330 140 L 70 140 Z"
            fill="url(#carBodyGrad)"
            stroke="#06b6d4"
            strokeWidth="2"
            opacity={opacity.body}
            className="transition-all duration-700"
          />

          {/* Car body with windshield */}
          <path
            d="M 100 140 L 300 140 Q 310 130 310 100 L 90 100 Q 90 130 100 140"
            fill="url(#carBodyGrad)"
            stroke="#06b6d4"
            strokeWidth="2"
            opacity={opacity.body}
            className="transition-all duration-700"
          />

          {/* Roof */}
          <path
            d="M 110 100 L 290 100 L 280 70 L 120 70 Z"
            fill="url(#carBodyGrad)"
            stroke="#06b6d4"
            strokeWidth="2"
            opacity={opacity.body}
            className="transition-all duration-700"
          />

          {/* Front windshield */}
          <path
            d="M 90 100 L 110 100 L 120 70 L 85 85 Z"
            fill="#e0f2fe"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity={opacity.details * 0.6}
            className="transition-all duration-700"
          />

          {/* Rear windshield */}
          <path
            d="M 290 100 L 310 100 L 315 85 L 280 70 Z"
            fill="#e0f2fe"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity={opacity.details * 0.6}
            className="transition-all duration-700"
          />

          {/* Side windows */}
          <rect
            x="130"
            y="85"
            width="35"
            height="25"
            fill="#e0f2fe"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity={opacity.details * 0.6}
            className="transition-all duration-700"
          />
          <rect
            x="235"
            y="85"
            width="35"
            height="25"
            fill="#e0f2fe"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity={opacity.details * 0.6}
            className="transition-all duration-700"
          />
        </g>

        {/* Wheels */}
        <g opacity={opacity.wheels} className="transition-all duration-700">
          {/* Left wheel */}
          <g>
            <circle cx="120" cy="165" r="30" fill="url(#wheelGrad)" stroke="#0891b2" strokeWidth="2" />
            <circle cx="120" cy="165" r="22" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
            <circle cx="120" cy="165" r="14" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
            <line x1="120" y1="151" x2="120" y2="179" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
            <line x1="106" y1="165" x2="134" y2="165" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
          </g>

          {/* Right wheel */}
          <g>
            <circle cx="280" cy="165" r="30" fill="url(#wheelGrad)" stroke="#0891b2" strokeWidth="2" />
            <circle cx="280" cy="165" r="22" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
            <circle cx="280" cy="165" r="14" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
            <line x1="280" y1="151" x2="280" y2="179" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
            <line x1="266" y1="165" x2="294" y2="165" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
          </g>
        </g>

        {/* Headlights - Premium glow effect */}
        <g
          opacity={opacity.details}
          className="transition-all duration-700"
          filter={completionPhase >= 3 ? "url(#headlightGlow)" : ""}
        >
          <circle cx="75" cy="115" r="8" fill="#fbbf24" opacity={completionPhase >= 3 ? 0.9 : 0} />
          <circle cx="75" cy="130" r="8" fill="#fbbf24" opacity={completionPhase >= 3 ? 0.9 : 0} />
          <circle
            cx="75"
            cy="115"
            r="8"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            opacity={completionPhase >= 3 ? 0.6 : 0}
          />
          <circle
            cx="75"
            cy="130"
            r="8"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            opacity={completionPhase >= 3 ? 0.6 : 0}
          />
        </g>

        {/* Completion aura - shows when ensemble is complete */}
        {completionPhase >= 4 && (
          <circle
            cx="200"
            cy="140"
            r="160"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1"
            opacity="0.3"
            className="animate-pulse"
          />
        )}

        {/* Progress indicator at bottom */}
        <text x="200" y="220" textAnchor="middle" className="text-sm" fill="#cbd5e1" fontSize="16" fontWeight="600">
          Stage {currentStep + 1} of {steps.length}
        </text>
      </svg>
    )
  }

  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-300 uppercase tracking-widest">
            How Experts Work Together
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Building a Super Team
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-black">
              Step by Step
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Watch how a team of specialists learns from each other's mistakes and keeps getting better. Each person adds
            their own strength until the group becomes truly excellent. This is how the best boosting systems work.
          </p>
        </div>

        {/* Main Animation Container */}
        <div className="relative p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-900/40 rounded-3xl border border-cyan-500/20 backdrop-blur-2xl shadow-2xl">
          {/* Premium Car Visualization */}
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-2xl h-72 bg-gradient-to-b from-slate-800/20 to-slate-900/40 rounded-2xl border border-cyan-500/10 flex items-center justify-center overflow-hidden">
              {renderPremiumCar()}
            </div>
          </div>

          {/* Expert Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Specialist Details */}
            <div className="space-y-6 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                    <span className="text-2xl font-bold text-white">{steps[currentStep].id}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{steps[currentStep].name}</h3>
                  <p className="text-sm text-cyan-400 font-semibold mt-1">Phase {currentStep + 1}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                  {steps[currentStep].focus}
                </p>
                <p className="text-slate-300 leading-relaxed">{steps[currentStep].explanation}</p>
              </div>
            </div>

            {/* Right: Boosting Concept Explanation */}
            <div className="space-y-6 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Boosting Concept</div>
                <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg mb-4">
                  <span className="text-cyan-300 font-semibold text-lg">{steps[currentStep].boostingConcept}</span>
                </div>
              </div>

              {/* Algorithm Breakdown */}
              <div className="space-y-3">
                {currentStep === 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-cyan-300">First Expert</span> starts with a simple approach
                      and makes their first attempt at solving the problem.
                    </p>
                  </div>
                )}
                {currentStep === 1 && (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-cyan-300">Error Fixing</span> happens when the next expert
                      focuses on the specific cases the previous expert got wrong.
                    </p>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-cyan-300">Repeated Fixes</span> continue as each new team
                      member fixes what's still broken, step by step.
                    </p>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-cyan-300">Final Polish</span> happens when the team fine-tunes
                      everything to work as smoothly as possible.
                    </p>
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-emerald-400">Team Complete</span> The whole team combines
                      their knowledge and makes decisions together.
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Each person's unique skills come together to create something much better than any one person
                      could do alone.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12 space-y-3 px-8">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Overall Progress</span>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-4 bg-slate-700/50 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-700 shadow-lg rounded-full"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStep(idx)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-300 rounded-full border ${
                  idx === currentStep
                    ? "px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400 text-white text-sm font-semibold"
                    : "w-3 h-3 bg-slate-600 hover:bg-slate-500 border-slate-600 hover:border-slate-500"
                }`}
                aria-label={`Go to stage ${idx + 1}`}
                title={step.name}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-white transition-all duration-200 border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl"
              aria-label="Previous stage"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold transition-all duration-200 shadow-lg hover:shadow-xl uppercase text-sm tracking-wider"
            >
              {isAutoPlay ? "Pause" : "Play"}
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-white transition-all duration-200 border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl"
              aria-label="Next stage"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The Power of Teamwork</h3>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Smart systems work just like great teams. By combining many people (or models) who each focus on what the
            previous person did wrong, you create something incredibly powerful and smart.
          </p>
        </div>
      </div>
    </div>
  )
}
