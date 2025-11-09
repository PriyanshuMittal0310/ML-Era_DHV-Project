"use client"

import type React from "react"
import { useState, useEffect } from "react"

const XGBoostVisuals: React.FC<{ scene: number }> = ({ scene }) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(0)
    const timer = setInterval(() => setProgress((p) => Math.min(p + 1, 4)), 400)
    return () => clearInterval(timer)
  }, [])

  if (scene === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8 max-w-2xl">
        <div className="text-6xl mb-4">⚡</div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">XGBoost</h3>
          <p className="text-slate-300 text-lg">Faster & Smarter</p>
        </div>
      </div>
    )
  }

  if (scene === 1) {
    return (
      <div className="flex flex-col items-center gap-8 p-8 max-w-3xl">
        <p className="text-sm font-semibold text-slate-300 text-center mb-2">PARALLEL PROCESSING: All at Once!</p>

        {/* Side by side comparison */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Sequential */}
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/50">
            <p className="text-xs font-bold text-red-300 mb-3 text-center">Gradient Boost</p>
            <p className="text-xs text-red-200 mb-3 text-center font-semibold">One at a Time</p>
            <div className="space-y-2">
              {["Score", "Income", "Debt", "Job"].map((f, i) => (
                <div key={f} className="flex items-center gap-2">
                  <div
                    className={`transition-all duration-500 ${progress > i ? "bg-red-500 w-16" : "bg-slate-600 w-4"} h-5 rounded`}
                  ></div>
                  <span className="text-xs text-red-300 font-mono">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-400 mt-4 text-center font-bold">4 STEPS</p>
          </div>

          {/* Parallel */}
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/50">
            <p className="text-xs font-bold text-green-300 mb-3 text-center">XGBoost</p>
            <p className="text-xs text-green-200 mb-3 text-center font-semibold">All at Once</p>
            <div className="space-y-2">
              {["Score", "Income", "Debt", "Job"].map(() => (
                <div key={Math.random()} className="flex items-center gap-2">
                  <div
                    className={`transition-all duration-300 ${progress > 0 ? "bg-green-500 w-16" : "bg-slate-600 w-4"} h-5 rounded`}
                  ></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-green-400 mt-4 text-center font-bold">1 STEP = 10x FASTER</p>
          </div>
        </div>
      </div>
    )
  }

  if (scene === 2) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <p className="text-sm font-semibold text-slate-300 text-center mb-2">SMART PRUNING: Avoid Overfitting</p>

        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Overfitted */}
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/50">
            <p className="text-xs font-bold text-red-300 mb-3 text-center">Too Complex</p>
            <div className="text-center h-24 flex items-center justify-center">
              <div className="text-3xl">🌳 (tangled)</div>
            </div>
            <p className="text-xs text-red-200 mt-2 text-center">Remembers training data</p>
            <p className="text-xs text-red-400 text-center font-bold">Fails on new data</p>
          </div>

          {/* Pruned */}
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/50">
            <p className="text-xs font-bold text-green-300 mb-3 text-center">Just Right</p>
            <div className="text-center h-24 flex items-center justify-center">
              <div className="text-3xl">🌳 (clean)</div>
            </div>
            <p className="text-xs text-green-200 mt-2 text-center">Learns patterns</p>
            <p className="text-xs text-green-400 text-center font-bold">Works on new data</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center bg-slate-800 p-3 rounded">
          XGBoost removes unnecessary complexity automatically
        </p>
      </div>
    )
  }

  if (scene === 3) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <p className="text-sm font-semibold text-slate-300 text-center mb-2">WHY XGBOOST WINS</p>

        <div className="space-y-3 w-full">
          <div className="bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-lg font-bold text-yellow-400">10x FASTER</p>
            <p className="text-xs text-yellow-200">All features processed together</p>
          </div>

          <div className="bg-cyan-900/30 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-lg font-bold text-cyan-400">MORE ACCURATE</p>
            <p className="text-xs text-cyan-200">Smart pruning prevents cheating</p>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-lg font-bold text-green-400">HANDLES ANYTHING</p>
            <p className="text-xs text-green-200">Built-in safety features</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default XGBoostVisuals
