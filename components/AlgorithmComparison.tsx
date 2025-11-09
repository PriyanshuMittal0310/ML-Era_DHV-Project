"use client"

import type React from "react"
import { useState } from "react"

interface ComparisonMetric {
  name: string
  adaboost: number | string
  gradientboost: number | string
  xgboost: number | string
  description: string
}

const AlgorithmComparison: React.FC = () => {
  const [compareMode, setCompareMode] = useState<"metrics" | "applications" | "difficulty">("metrics")

  const metrics: ComparisonMetric[] = [
    {
      name: "Accuracy",
      adaboost: 85,
      gradientboost: 92,
      xgboost: 95,
      description: "How often it makes correct predictions",
    },
    {
      name: "Training Speed",
      adaboost: 90,
      gradientboost: 70,
      xgboost: 85,
      description: "How fast it learns from data (higher = faster)",
    },
    {
      name: "Handles Large Data",
      adaboost: 70,
      gradientboost: 80,
      xgboost: 95,
      description: "Ability to process huge datasets",
    },
    {
      name: "Prevents Over-learning",
      adaboost: 75,
      gradientboost: 85,
      xgboost: 95,
      description: "Built-in protection against learning tricks",
    },
    {
      name: "Ease of Understanding",
      adaboost: 95,
      gradientboost: 75,
      xgboost: 55,
      description: "How easy to understand and explain",
    },
    {
      name: "Flexibility",
      adaboost: 70,
      gradientboost: 90,
      xgboost: 95,
      description: "Works with different types of problems",
    },
  ]

  const applications = [
    {
      name: "Spam Detection",
      adaboost: "Excellent",
      gradientboost: "Good",
      xgboost: "Overkill",
    },
    {
      name: "Sales Forecasting",
      adaboost: "Fair",
      gradientboost: "Excellent",
      xgboost: "Excellent",
    },
    {
      name: "Real-time Decisions",
      adaboost: "Good",
      gradientboost: "Fair",
      xgboost: "Excellent",
    },
    {
      name: "Medical Diagnosis",
      adaboost: "Good",
      gradientboost: "Excellent",
      xgboost: "Excellent",
    },
    {
      name: "Simple Problems",
      adaboost: "Excellent",
      gradientboost: "Good",
      xgboost: "Fair",
    },
    {
      name: "Complex Patterns",
      adaboost: "Fair",
      gradientboost: "Excellent",
      xgboost: "Excellent",
    },
  ]

  const renderBar = (value: number | string) => {
    if (typeof value === "string") return null
    return (
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: `${value}%` }} />
        </div>
        <span className="text-cyan-400 font-bold text-sm w-8 text-right">{value}%</span>
      </div>
    )
  }

  const getQualityBadge = (quality: string) => {
    const colors: Record<string, string> = {
      Excellent: "bg-green-500/20 text-green-300 border-green-500/30",
      Good: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      Fair: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      Overkill: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    }
    return `px-3 py-1 rounded text-xs font-semibold border ${colors[quality] || colors.Fair}`
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Compare Algorithms Side-by-Side</h2>
        <p className="text-slate-300">Understand the strengths and weaknesses of each approach</p>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-4 justify-center flex-wrap">
        {(["metrics", "applications", "difficulty"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setCompareMode(mode)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              compareMode === mode ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {mode === "metrics" && "Performance Metrics"}
            {mode === "applications" && "Best Use Cases"}
            {mode === "difficulty" && "Learning Difficulty"}
          </button>
        ))}
      </div>

      {/* Metrics Comparison */}
      {compareMode === "metrics" && (
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white">{metric.name}</h3>
                  <p className="text-slate-400 text-sm">{metric.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-cyan-300 font-semibold mb-3">AdaBoost</p>
                  {renderBar(metric.adaboost as number)}
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold mb-3">Gradient Boost</p>
                  {renderBar(metric.gradientboost as number)}
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold mb-3">XGBoost</p>
                  {renderBar(metric.xgboost as number)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Applications Comparison */}
      {compareMode === "applications" && (
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-700">
                <th className="px-6 py-4 text-left font-semibold text-white">Use Case</th>
                <th className="px-6 py-4 text-center font-semibold text-cyan-300">AdaBoost</th>
                <th className="px-6 py-4 text-center font-semibold text-cyan-300">Gradient Boost</th>
                <th className="px-6 py-4 text-center font-semibold text-cyan-300">XGBoost</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.name} className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">{app.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={getQualityBadge(app.adaboost)}>{app.adaboost}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={getQualityBadge(app.gradientboost)}>{app.gradientboost}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={getQualityBadge(app.xgboost)}>{app.xgboost}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Learning Difficulty Comparison */}
      {compareMode === "difficulty" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-4">AdaBoost</h3>
            <div className="space-y-4">
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Learning Difficulty</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 2 ? "bg-green-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Easy to understand</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Implementation</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 2 ? "bg-green-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Straightforward to code</p>
              </div>
              <div className="p-4 bg-cyan-500/10 rounded border border-cyan-500/30">
                <p className="text-cyan-300 text-xs font-semibold">Best For Beginners</p>
                <p className="text-slate-300 text-xs mt-2">Start here to understand boosting fundamentals</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Gradient Boost</h3>
            <div className="space-y-4">
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Learning Difficulty</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 3 ? "bg-yellow-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Medium complexity</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Implementation</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 3 ? "bg-yellow-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Moderate complexity to code</p>
              </div>
              <div className="p-4 bg-cyan-500/10 rounded border border-cyan-500/30">
                <p className="text-cyan-300 text-xs font-semibold">Most Practical</p>
                <p className="text-slate-300 text-xs mt-2">Good balance of power and understandability</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-4">XGBoost</h3>
            <div className="space-y-4">
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Learning Difficulty</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 5 ? "bg-red-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Complex theory</p>
              </div>
              <div>
                <p className="text-cyan-300 font-semibold text-sm mb-2">Implementation</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-2 w-4 rounded ${i <= 4 ? "bg-yellow-500" : "bg-slate-700"}`} />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">Usually use libraries</p>
              </div>
              <div className="p-4 bg-cyan-500/10 rounded border border-cyan-500/30">
                <p className="text-cyan-300 text-xs font-semibold">Most Powerful</p>
                <p className="text-slate-300 text-xs mt-2">Use for production systems and competitions</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Decision Guide */}
      <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
        <h3 className="text-white font-bold mb-4">Quick Decision Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded bg-slate-900/50">
            <p className="font-bold text-cyan-300 mb-2">Choose AdaBoost if...</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>✓ Learning boosting for the first time</li>
              <li>✓ Need explainable decisions</li>
              <li>✓ Working with balanced binary data</li>
            </ul>
          </div>
          <div className="p-4 rounded bg-slate-900/50">
            <p className="font-bold text-cyan-300 mb-2">Choose Gradient Boost if...</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>✓ Need high accuracy</li>
              <li>✓ Working with various data types</li>
              <li>✓ Balance of performance & understanding</li>
            </ul>
          </div>
          <div className="p-4 rounded bg-slate-900/50">
            <p className="font-bold text-cyan-300 mb-2">Choose XGBoost if...</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>✓ Need maximum performance</li>
              <li>✓ Working with massive datasets</li>
              <li>✓ Building production systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmComparison
