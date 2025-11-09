"use client"

import type React from "react"
import { useState } from "react"
import InteractiveSimulator from "./InteractiveSimulator"
import ParameterTuningPlayground from "./ParameterTuningPlayground"
import AlgorithmComparison from "./AlgorithmComparison"

interface InteractiveSummaryPageProps {
  onBack: () => void
}

const InteractiveSummaryPage: React.FC<InteractiveSummaryPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "simulator" | "tuning" | "comparison">("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "simulator", label: "Interactive Simulator", icon: "🎮" },
    { id: "tuning", label: "Parameter Tuning", icon: "⚙️" },
    { id: "comparison", label: "Comparison Mode", icon: "🔄" },
  ]

  return (
    <div className="w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Boosting Algorithms: Complete Learning Experience</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            ← Back to Menu
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-slate-700/50 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? "border-cyan-500 text-cyan-400 bg-slate-800/50"
                  : "border-transparent text-slate-400 hover:text-white hover:bg-slate-800/30"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "simulator" && <InteractiveSimulator />}
        {activeTab === "tuning" && <ParameterTuningPlayground />}
        {activeTab === "comparison" && <AlgorithmComparison />}
      </div>
    </div>
  )
}

const OverviewTab: React.FC = () => (
  <div className="space-y-12">
    {/* Hero Section */}
    <section className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
        The Power of Teamwork in Decision Making
      </h2>
      <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-balance">
        Discover how three intelligent systems combine simple ideas into something powerful. Each specializes in solving
        problems the others struggle with, making better decisions together than any could alone.
      </p>
    </section>

    {/* Algorithm Cards */}
    <section>
      <h3 className="text-3xl font-bold text-white mb-8">Three Powerful Approaches</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AdaBoost Card */}
        <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl">⚡</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">AdaBoost</h4>
          <p className="text-cyan-300 text-sm font-semibold mb-4">Focus on Hard Cases</p>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Builds a team by giving extra attention to difficult cases. Each expert focuses on problems others got
            wrong.
          </p>
          <div className="space-y-2 text-xs text-slate-400">
            <p>✓ Clear & Explainable</p>
            <p>✓ Fast Training</p>
            <p>✓ Good for Classification</p>
          </div>
        </div>

        {/* Gradient Boosting Card */}
        <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl">📈</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Gradient Boost</h4>
          <p className="text-cyan-300 text-sm font-semibold mb-4">Step-by-Step Improvement</p>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Each expert focuses on fixing errors from the previous expert. Creates gradual, steady improvement.
          </p>
          <div className="space-y-2 text-xs text-slate-400">
            <p>✓ Flexible & Versatile</p>
            <p>✓ High Accuracy</p>
            <p>✓ Works with Many Problems</p>
          </div>
        </div>

        {/* XGBoost Card */}
        <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl">🚀</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">XGBoost</h4>
          <p className="text-cyan-300 text-sm font-semibold mb-4">Super-Fast & Smart</p>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Advanced version optimized for speed and scale. Includes built-in safeguards against over-learning.
          </p>
          <div className="space-y-2 text-xs text-slate-400">
            <p>✓ Lightning Fast</p>
            <p>✓ Prevents Over-learning</p>
            <p>✓ Industry Standard</p>
          </div>
        </div>
      </div>
    </section>

    {/* Key Benefits */}
    <section>
      <h3 className="text-3xl font-bold text-white mb-8">Why Boosting Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
          <h4 className="font-bold text-white mb-3">Better Accuracy</h4>
          <p className="text-slate-400 text-sm">
            Multiple experts catch mistakes individuals miss. Combined decisions are far more accurate.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
          <h4 className="font-bold text-white mb-3">Handles Complexity</h4>
          <p className="text-slate-400 text-sm">
            By combining many simple experts, we solve problems too complicated for any single expert.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
          <h4 className="font-bold text-white mb-3">Prevents Over-Learning</h4>
          <p className="text-slate-400 text-sm">
            The system learns real patterns, not tricks that only work on training data.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
          <h4 className="font-bold text-white mb-3">Builds Gradually</h4>
          <p className="text-slate-400 text-sm">
            Experts added one at a time, each learning from previous mistakes. More efficient approach.
          </p>
        </div>
      </div>
    </section>

    {/* Real-World Applications */}
    <section>
      <h3 className="text-3xl font-bold text-white mb-8">Real-World Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
          <h4 className="font-bold text-white mb-4">AdaBoost</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• Spam Detection</li>
            <li>• Face Recognition</li>
            <li>• Medical Screening</li>
            <li>• Fraud Prevention</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
          <h4 className="font-bold text-white mb-4">Gradient Boost</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• Sales Forecasting</li>
            <li>• Customer Churn</li>
            <li>• Risk Assessment</li>
            <li>• Demand Forecasting</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
          <h4 className="font-bold text-white mb-4">XGBoost</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• Banking Systems</li>
            <li>• Recommendations</li>
            <li>• Kaggle Competitions</li>
            <li>• Ad Targeting</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default InteractiveSummaryPage
