"use client"

import type React from "react"
import type { AlgorithmView } from "../types"

interface AlgorithmMenuProps {
  onNavigate: (view: AlgorithmView) => void
  onBack: () => void
}

const AlgorithmMenu: React.FC<AlgorithmMenuProps> = ({ onNavigate, onBack }) => {
  const algorithms = [
    {
      id: "adaboost" as AlgorithmView,
      title: "AdaBoost",
      subtitle: "Focus on the Mistakes Manager",
      description: "Learn how AdaBoost focuses on hard cases to build better predictions",
      visual: true,
      technical: "adaboost-technical" as AlgorithmView,
    },
    {
      id: "gradientboost" as AlgorithmView,
      title: "Gradient Boosting",
      subtitle: "Let's Fix the Error Manager",
      description: "Understand step-by-step error correction through residuals",
      visual: true,
      technical: "gradientboost-technical" as AlgorithmView,
    },
    {
      id: "xgboost" as AlgorithmView,
      title: "XGBoost",
      subtitle: "High-Performance Manager",
      description: "Explore the optimized, production-ready boosting algorithm",
      visual: true,
      technical: "xgboost-technical" as AlgorithmView,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Choose Your Learning Path</h1>
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate("interactive-summary" as any)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              🎯 Interactive Summary
            </button>
            <button
              onClick={onBack}
              className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner for Interactive Summary */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate("interactive-summary" as any)}
          className="w-full p-8 rounded-lg bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-2 border-cyan-500/50 hover:border-cyan-400 hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 text-left group"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                🎓 Complete Learning Experience
              </h2>
              <p className="text-slate-300 mt-2 max-w-3xl">
                Explore all three algorithms with interactive simulations, parameter tuning, comparison tools, and
                detailed explanations. Perfect for understanding how boosting works in practice.
              </p>
            </div>
            <svg className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-xl font-bold text-white mb-8">Or choose a specific algorithm:</h3>

        <div className="space-y-8">
          {algorithms.map((algo) => (
            <div
              key={algo.id}
              className="p-8 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{algo.title}</h2>
                  <p className="text-cyan-400 text-lg mb-3">{algo.subtitle}</p>
                  <p className="text-slate-300">{algo.description}</p>
                </div>
              </div>

              {/* Learning Path Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-slate-700">
                <button
                  onClick={() => onNavigate(algo.id)}
                  className="flex-1 px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30 rounded-lg transition-all duration-300 font-semibold"
                >
                  Visual Learning
                </button>
                <button
                  onClick={() => onNavigate(algo.technical)}
                  className="flex-1 px-6 py-3 bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30 rounded-lg transition-all duration-300 font-semibold"
                >
                  Deep Dive Mathematics
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 p-8 rounded-lg bg-slate-800/30 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">How to Use This Learning Platform</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <p className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <span>
                <strong>Visual Learning:</strong> Start here for intuitive, easy-to-understand explanations with
                interactive visuals
              </span>
            </p>
            <p className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>
                <strong>Deep Dive Mathematics:</strong> For technical details, formulas, complexity analysis, and
                theoretical foundations
              </span>
            </p>
            <p className="flex gap-3">
              <span className="text-slate-400 font-bold">→</span>
              <span>
                <strong>Best Practice:</strong> Complete Visual Learning first, then explore Mathematics for deeper
                understanding
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmMenu
