"use client"

import type React from "react"
import { useState, useMemo } from "react"

const InteractiveSimulator: React.FC = () => {
  const [experts, setExperts] = useState(5)
  const [initialError, setInitialError] = useState(40)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<"adaboost" | "gradientboost" | "xgboost">("adaboost")

  const simulation = useMemo(() => {
    const rounds = Math.max(1, Math.min(experts, 20))
    const baseError = Math.max(10, Math.min(initialError, 50))

    const reductionRate: Record<string, number> = {
      adaboost: 0.15,
      gradientboost: 0.18,
      xgboost: 0.22,
    }

    const rate = reductionRate[selectedAlgorithm] || 0.15
    const data = []

    try {
      for (let i = 0; i <= rounds; i++) {
        const error = Math.max(0.1, baseError * Math.pow(1 - rate, i))
        if (!isFinite(error)) {
          throw new Error("Invalid calculation")
        }
        data.push({
          round: i,
          error: Number.parseFloat(error.toFixed(4)),
          experts: i,
        })
      }
    } catch (e) {
      console.error("[v0] Simulation error in calculation")
      return { data: [], finalError: 0, reduction: 0 }
    }

    return {
      data,
      finalError: data[data.length - 1]?.error || 0,
      reduction: ((baseError - (data[data.length - 1]?.error || 0)) / baseError) * 100,
    }
  }, [experts, initialError, selectedAlgorithm])

  const maxError = simulation.data.length > 0 
    ? Math.max(...simulation.data.map((d) => d.error), initialError) 
    : initialError

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">🎮 Interactive Simulator</h2>
        <p className="text-slate-300">Adjust parameters and watch error decrease in real-time</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        {/* Algorithm Selector */}
        <div>
          <label className="block text-white font-semibold mb-4">Choose Algorithm</label>
          <div className="space-y-2">
            {(["adaboost", "gradientboost", "xgboost"] as const).map((algo) => (
              <button
                key={algo}
                onClick={() => setSelectedAlgorithm(algo)}
                className={`w-full px-4 py-2 rounded-lg transition-all text-left font-medium ${
                  selectedAlgorithm === algo
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {algo === "adaboost" && "🏦 AdaBoost"}
                {algo === "gradientboost" && "📈 Gradient Boost"}
                {algo === "xgboost" && "⚡ XGBoost"}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Experts */}
        <div>
          <label className="block text-white font-semibold mb-4">
            Number of Experts: <span className="text-cyan-400">{experts}</span>
          </label>
          <input
            type="range"
            min="2"
            max="20"
            value={experts}
            onChange={(e) => setExperts(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <p className="text-slate-400 text-xs mt-2">More experts = more accurate but slower</p>
        </div>

        {/* Initial Error Rate */}
        <div>
          <label className="block text-white font-semibold mb-4">
            Initial Error Rate: <span className="text-cyan-400">{initialError}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="50"
            value={initialError}
            onChange={(e) => setInitialError(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <p className="text-slate-400 text-xs mt-2">Higher initial error = harder problem</p>
        </div>
      </div>

      {/* Visualization */}
      <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-6">Error Reduction Over Rounds</h3>
        {simulation.data.length > 0 && maxError > 0 ? (
          <div className="space-y-4">
            {/* Chart Container */}
            <div className="relative" style={{ height: "300px", minHeight: "300px" }}>
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-12 w-12 flex flex-col justify-between text-xs text-slate-400 pr-2">
                <span className="text-right">{maxError.toFixed(1)}%</span>
                <span className="text-right">0%</span>
              </div>
              
              {/* Chart Area */}
              <div className="ml-12 h-full flex items-end justify-between gap-1 px-2">
                {simulation.data.map((point) => {
                  const barHeightPercent = (point.error / maxError) * 100
                  const barHeight = Math.max(barHeightPercent, 1) // At least 1% height
                  
                  return (
                    <div
                      key={point.round}
                      className="flex-1 group relative flex flex-col items-center justify-end h-full"
                      style={{ maxWidth: "100px" }}
                    >
                      {/* Bar */}
                      <div
                        className="w-full bg-gradient-to-t from-cyan-500 via-cyan-400 to-cyan-300 rounded-t transition-all duration-300 hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/20 cursor-pointer relative"
                        style={{
                          height: `${barHeight}%`,
                          minHeight: "12px",
                        }}
                        title={`Round ${point.round}: ${point.error.toFixed(2)}% error`}
                      >
                        {/* Hover tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10 border border-slate-700">
                          {point.error.toFixed(2)}% error
                        </div>
                      </div>
                      
                      {/* X-axis label */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                        {point.round}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* X-axis labels */}
            <div className="ml-12 flex justify-between text-slate-400 text-xs px-2">
              <span>Round 0</span>
              <span>Round {simulation.data.length - 1}</span>
            </div>
          </div>
        ) : (
          <div className="h-80 flex items-center justify-center text-slate-400">
            <p>No data available. Please adjust the parameters.</p>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <p className="text-slate-400 text-sm mb-2">Initial Error</p>
          <p className="text-3xl font-bold text-cyan-400">{initialError.toFixed(1)}%</p>
          <p className="text-xs text-slate-500 mt-2">Starting point</p>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <p className="text-slate-400 text-sm mb-2">Final Error</p>
          <p className="text-3xl font-bold text-cyan-400">{simulation.finalError.toFixed(2)}%</p>
          <p className="text-xs text-slate-500 mt-2">After all experts</p>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/20 hover:border-green-500/50 transition-all">
          <p className="text-slate-400 text-sm mb-2">Improvement</p>
          <p className="text-3xl font-bold text-green-400">{simulation.reduction.toFixed(1)}%</p>
          <p className="text-xs text-slate-500 mt-2">Error reduction</p>
        </div>
      </div>

      {/* Insights */}
      <div className="p-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
        <h4 className="text-white font-bold mb-3">📊 What's Happening?</h4>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li>✓ Each bar represents one expert's contribution to reducing error</li>
          <li>✓ Taller bars = early experts make bigger improvements</li>
          <li>✓ Later experts make smaller but important refinements</li>
          <li>
            ✓{" "}
            {selectedAlgorithm === "xgboost"
              ? "XGBoost"
              : selectedAlgorithm === "gradientboost"
                ? "Gradient Boost"
                : "AdaBoost"}{" "}
            reduces errors most efficiently
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InteractiveSimulator
