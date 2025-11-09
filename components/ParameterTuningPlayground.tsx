"use client"

import type React from "react"
import { useState } from "react"

interface AlgorithmParams {
  learningRate: number
  treeDepth: number
  rounds: number
  regularization: number
}

const ParameterTuningPlayground: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<"adaboost" | "gradientboost" | "xgboost">("gradientboost")
  const [params, setParams] = useState<AlgorithmParams>({
    learningRate: 0.1,
    treeDepth: 5,
    rounds: 100,
    regularization: 0.5,
  })

  const predictPerformance = () => {
    const baseAccuracy = 70
    const learningBoost = params.learningRate * 100
    const depthPenalty = Math.max(0, (params.treeDepth - 10) * 2)
    const roundsBoost = Math.min(15, params.rounds / 10)
    const regularizationBoost = params.regularization * 20

    let accuracy = baseAccuracy + learningBoost + roundsBoost + regularizationBoost - depthPenalty

    if (algorithm === "xgboost") accuracy += 8
    if (algorithm === "gradientboost") accuracy += 4

    return Math.min(99.9, Math.max(70, accuracy))
  }

  const updateParam = (key: keyof AlgorithmParams, value: number) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const predictedAccuracy = predictPerformance()
  const trainingTime = params.rounds * 0.1 * (params.treeDepth / 5)

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Experiment with Parameters</h2>
        <p className="text-slate-300">Adjust settings and see predicted performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Parameter Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Algorithm Selection */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-white font-bold mb-4">Select Algorithm</h3>
            <div className="grid grid-cols-3 gap-4">
              {(["adaboost", "gradientboost", "xgboost"] as const).map((algo) => (
                <button
                  key={algo}
                  onClick={() => setAlgorithm(algo)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    algorithm === algo ? "bg-cyan-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {algo === "adaboost" && "AdaBoost"}
                  {algo === "gradientboost" && "Gradient"}
                  {algo === "xgboost" && "XGBoost"}
                </button>
              ))}
            </div>
          </div>

          {/* Parameter Sliders */}
          <div className="space-y-6">
            {/* Learning Rate */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Learning Rate</label>
                <span className="text-cyan-400 font-bold">{params.learningRate.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.5"
                step="0.01"
                value={params.learningRate}
                onChange={(e) => updateParam("learningRate", Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-slate-400 text-xs mt-3">
                <strong>How it affects:</strong> Controls how much each expert learns. Higher = faster learning but more
                risk of mistakes
              </p>
            </div>

            {/* Tree Depth */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Tree Depth (Complexity)</label>
                <span className="text-cyan-400 font-bold">{params.treeDepth}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={params.treeDepth}
                onChange={(e) => updateParam("treeDepth", Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-slate-400 text-xs mt-3">
                <strong>How it affects:</strong> Controls how complex each expert is. Higher = more powerful but slower
                and risk of over-learning
              </p>
            </div>

            {/* Number of Rounds */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Number of Rounds (Experts)</label>
                <span className="text-cyan-400 font-bold">{params.rounds}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={params.rounds}
                onChange={(e) => updateParam("rounds", Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-slate-400 text-xs mt-3">
                <strong>How it affects:</strong> More rounds = more experts = better accuracy but much slower training
              </p>
            </div>

            {/* Regularization */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Regularization (Prevent Over-learning)</label>
                <span className="text-cyan-400 font-bold">{params.regularization.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={params.regularization}
                onChange={(e) => updateParam("regularization", Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-slate-400 text-xs mt-3">
                <strong>How it affects:</strong> Higher = more protection against tricks. Lower = more raw power but
                risky
              </p>
            </div>
          </div>
        </div>

        {/* Performance Predictions */}
        <div className="space-y-6">
          {/* Predicted Accuracy */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-cyan-500/30 sticky top-32">
            <h3 className="text-white font-bold mb-4">Predicted Performance</h3>

            {/* Accuracy Gauge */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Accuracy</span>
                <span className="text-cyan-400 font-bold">{predictedAccuracy.toFixed(1)}%</span>
              </div>
              <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${predictedAccuracy}%` }}
                />
              </div>
            </div>

            {/* Training Time */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Training Time (relative)</span>
                <span className="text-cyan-400 font-bold">{trainingTime.toFixed(1)}x</span>
              </div>
              <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                  style={{ width: `${Math.min(100, trainingTime * 10)}%` }}
                />
              </div>
            </div>

            {/* Complexity Risk */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm">Complexity Risk</span>
                <span className="text-cyan-400 font-bold">
                  {params.treeDepth > 10 ? "High" : params.treeDepth > 5 ? "Medium" : "Low"}
                </span>
              </div>
              <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-red-500"
                  style={{ width: `${Math.min(100, (params.treeDepth / 15) * 100)}%` }}
                />
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 p-4 bg-cyan-500/10 rounded border border-cyan-500/30">
              <p className="text-cyan-300 text-xs font-semibold mb-2">Recommendation:</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                {params.learningRate > 0.3 && "⚠️ High learning rate - may overfit"}
                {params.learningRate <= 0.3 && params.learningRate >= 0.05 && "✓ Good learning rate"}
                {params.learningRate < 0.05 && "⚠️ Low learning rate - training may be slow"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
        <h3 className="text-white font-bold mb-4">Parameter Tuning Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
          <div>
            <p className="font-semibold text-cyan-300 mb-1">Start Conservative</p>
            <p>Begin with moderate values and gradually adjust to find the sweet spot</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-300 mb-1">Watch for Over-learning</p>
            <p>High tree depth + low regularization = risk of learning tricks instead of patterns</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-300 mb-1">Balance Speed & Accuracy</p>
            <p>More rounds always improve accuracy but with diminishing returns and slower training</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-300 mb-1">Regularization is Key</p>
            <p>It's your safeguard - helps ensure the model works well on new, unseen data</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParameterTuningPlayground
