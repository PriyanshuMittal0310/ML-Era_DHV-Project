"use client"

import type React from "react"
import { useState } from "react"

interface EnhancedSummaryPageProps {
  onBack: () => void
  onNavigate: (view: string) => void
}

const EnhancedSummaryPage: React.FC<EnhancedSummaryPageProps> = ({ onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "comparison" | "simulator" | "tuning">("overview")

  const algorithms = [
    {
      id: "adaboost",
      name: "AdaBoost",
      subtitle: 'The "Focus on the Mistakes" Manager',
      description:
        "Builds a team by giving extra attention to the hard cases nobody else can solve. Each new expert focuses on the mistakes previous experts made.",
      icon: "⚡",
      features: ["Focus on Hard Cases", "Clear & Explainable", "Yes or No Decisions"],
      speed: 60,
      accuracy: 75,
      complexity: 40,
      bestFor: "Clear, understandable decisions with balanced data",
      applications: ["Spam detection", "Face recognition", "Medical screening", "Fraud prevention"],
    },
    {
      id: "gradientboost",
      name: "Gradient Boosting",
      subtitle: 'The "Step-by-Step Improvement" Manager',
      description:
        "Each expert focuses specifically on fixing the errors the previous expert made, creating a gradual improvement process.",
      icon: "📈",
      features: ["Targeted Fixes", "Flexible & Versatile", "Continuous Building"],
      speed: 70,
      accuracy: 85,
      complexity: 60,
      bestFor: "High precision with flexible problem types",
      applications: ["Sales forecasting", "Customer churn", "Risk assessment", "Demand forecasting"],
    },
    {
      id: "xgboost",
      name: "XGBoost",
      subtitle: 'The "Super-Fast & Smart" Manager',
      description:
        "The most advanced version optimized for speed and real-world use. Includes built-in safeguards to prevent over-learning.",
      icon: "🚀",
      features: ["Prevents Overthinking", "Lightning Fast", "Industry Standard"],
      speed: 95,
      accuracy: 90,
      complexity: 85,
      bestFor: "Speed and scale matter with massive datasets",
      applications: ["Banking systems", "Recommendations", "Kaggle competitions", "Ad targeting"],
    },
  ]

  return (
    <div className="w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Complete Learning Experience</h1>
            <button
              onClick={onBack}
              className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
            >
              ← Back
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: "overview", label: "Overview" },
              { id: "comparison", label: "Compare" },
              { id: "simulator", label: "Simulator" },
              { id: "tuning", label: "Tune Parameters" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-cyan-500/30 border border-cyan-500 text-cyan-300"
                    : "bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            {/* Hero */}
            <section className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">The Power of Teamwork in Decision Making</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Discover how three intelligent systems combine simple ideas into something powerful. Each specializes in
                solving problems the others struggle with.
              </p>
            </section>

            {/* Algorithm Cards */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {algorithms.map((algo) => (
                <div
                  key={algo.id}
                  className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{algo.icon}</span>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">{algo.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{algo.name}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed font-semibold text-sm">{algo.subtitle}</p>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">{algo.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {algo.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-slate-700">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Speed</span>
                        <span className="text-cyan-300">{algo.speed}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-full"
                          style={{ width: `${algo.speed}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Accuracy</span>
                        <span className="text-cyan-300">{algo.accuracy}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-full"
                          style={{ width: `${algo.accuracy}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Complexity</span>
                        <span className="text-cyan-300">{algo.complexity}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-red-400 h-full rounded-full"
                          style={{ width: `${algo.complexity}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-700">
                    <p className="font-semibold text-cyan-300 mb-2">Applications:</p>
                    <ul className="space-y-1">
                      {algo.applications.map((app, i) => (
                        <li key={i}>• {app}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate(algo.id)}
                    className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    Explore {algo.name} →
                  </button>
                </div>
              ))}
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits of Boosting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Better Accuracy",
                    desc: "Multiple experts catch mistakes that individual systems miss",
                  },
                  {
                    title: "Handles Complex Problems",
                    desc: "Solves problems too complicated for any single expert",
                  },
                  {
                    title: "Prevents Over-Learning",
                    desc: "Learns real patterns instead of just tricks that work on training data",
                  },
                  {
                    title: "Builds Gradually",
                    desc: "Experts added one at a time, each learning from previous mistakes",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all"
                  >
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* COMPARISON TAB */}
        {activeTab === "comparison" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 border-b border-slate-700">
                    <th className="px-6 py-4 text-left font-semibold text-white">Feature</th>
                    {algorithms.map((algo) => (
                      <th key={algo.id} className="px-6 py-4 text-left font-semibold text-cyan-300">
                        {algo.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Main Strategy",
                      values: ["Focus on hard cases", "Fix errors gradually", "Advanced + optimized"],
                    },
                    { feature: "Speed", values: ["Moderate", "Good", "Excellent"] },
                    { feature: "Accuracy", values: ["High", "Very High", "Excellent"] },
                    { feature: "Complexity", values: ["Simple", "Moderate", "Complex"] },
                    { feature: "Best Dataset Size", values: ["Small to Medium", "Medium to Large", "Very Large"] },
                    { feature: "Parallel Processing", values: ["Limited", "Limited", "Full"] },
                    { feature: "Industry Adoption", values: ["Research", "Growing", "Widespread"] },
                    { feature: "Learning Curve", values: ["Easy", "Moderate", "Steep"] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-slate-200 font-medium">{row.feature}</td>
                      {row.values.map((value, j) => (
                        <td key={j} className="px-6 py-4 text-slate-400">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comparison Summary */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <h3 className="font-bold text-white mb-4 text-lg">Choosing the Right Algorithm</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">Choose AdaBoost when:</p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• You need interpretability</li>
                    <li>• Working with smaller datasets</li>
                    <li>• Binary classification needed</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">Choose Gradient Boost when:</p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• You need flexibility</li>
                    <li>• Working with mixed data types</li>
                    <li>• Regression or classification</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">Choose XGBoost when:</p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Speed is critical</li>
                    <li>• Working with large data</li>
                    <li>• Production systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR TAB */}
        {activeTab === "simulator" && <InteractiveSimulator algorithms={algorithms} />}

        {/* TUNING TAB */}
        {activeTab === "tuning" && <ParameterTuningPlayground algorithms={algorithms} />}
      </div>
    </div>
  )
}

// Interactive Simulator Component
const InteractiveSimulator: React.FC<{ algorithms: typeof EnhancedSummaryPage }> = ({ algorithms }) => {
  const [selectedAlgo, setSelectedAlgo] = useState(0)
  const [numExperts, setNumExperts] = useState(5)
  const [errorRate, setErrorRate] = useState(30)
  const [results, setResults] = useState<{ expert: number; error: number }[]>([])

  const runSimulation = () => {
    const newResults = []
    let currentError = errorRate

    for (let i = 0; i < numExperts; i++) {
      currentError = Math.max(5, currentError * (1 - 0.15 - Math.random() * 0.1))
      newResults.push({ expert: i + 1, error: Math.round(currentError) })
    }
    setResults(newResults)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Interactive Algorithm Simulator</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="p-8 rounded-lg bg-slate-800/50 border border-slate-700 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Select Algorithm:</label>
            <div className="space-y-2">
              {algorithms.map((algo, i) => (
                <button
                  key={algo.id}
                  onClick={() => setSelectedAlgo(i)}
                  className={`w-full p-3 text-left rounded-lg transition-all ${
                    selectedAlgo === i
                      ? "bg-cyan-500/30 border border-cyan-500 text-white"
                      : "bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <div className="font-semibold">{algo.name}</div>
                  <div className="text-xs mt-1">{algo.subtitle}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Number of Experts: <span className="text-cyan-300">{numExperts}</span>
            </label>
            <input
              type="range"
              min="2"
              max="20"
              value={numExperts}
              onChange={(e) => setNumExperts(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Initial Error Rate: <span className="text-cyan-300">{errorRate}%</span>
            </label>
            <input
              type="range"
              min="10"
              max="50"
              value={errorRate}
              onChange={(e) => setErrorRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <button
            onClick={runSimulation}
            className="w-full px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 hover:bg-cyan-500/30 rounded-lg font-semibold transition-all duration-300"
          >
            Run Simulation
          </button>
        </div>

        {/* Results */}
        <div className="p-8 rounded-lg bg-slate-800/50 border border-slate-700">
          <h3 className="font-bold text-white mb-6 text-lg">Error Reduction Over Rounds</h3>
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.expert}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Expert {result.expert}</span>
                    <span className="text-cyan-300 font-mono">{result.error}% Error</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${100 - result.error}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-600">
                <p className="text-slate-400 text-sm">
                  <strong>Final Accuracy:</strong>{" "}
                  <span className="text-cyan-300 font-semibold">
                    {results.length > 0 ? 100 - results[results.length - 1].error : 0}%
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-slate-400 text-center py-8">Click "Run Simulation" to see results</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Parameter Tuning Playground
const ParameterTuningPlayground: React.FC<{ algorithms: typeof EnhancedSummaryPage }> = ({ algorithms }) => {
  const [selectedAlgo, setSelectedAlgo] = useState(0)
  const [learningRate, setLearningRate] = useState(0.1)
  const [maxDepth, setMaxDepth] = useState(5)
  const [numRounds, setNumRounds] = useState(100)
  const [regularization, setRegularization] = useState(0.5)
  const [prediction, setPrediction] = useState<number | null>(null)

  const generatePrediction = () => {
    const baseAccuracy = [0.75, 0.85, 0.9][selectedAlgo]
    const tuningEffect = (learningRate * maxDepth) / (numRounds * regularization)
    const finalAccuracy = Math.min(0.99, Math.max(0.5, baseAccuracy + tuningEffect * 0.2))
    setPrediction(Math.round(finalAccuracy * 100))
  }

  const algo = algorithms[selectedAlgo]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Parameter Tuning Playground</h2>
      <p className="text-slate-400 max-w-3xl">
        Experiment with different parameters to understand how they affect algorithm performance. Each parameter has a
        specific impact on learning speed and accuracy.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Parameter Controls */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 rounded-lg bg-slate-800/50 border border-slate-700 space-y-8">
            {/* Algorithm Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Select Algorithm:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {algorithms.map((a, i) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAlgo(i)}
                    className={`p-3 text-left rounded-lg transition-all ${
                      selectedAlgo === i
                        ? "bg-cyan-500/30 border border-cyan-500 text-white"
                        : "bg-slate-700/50 border border-slate-600 text-slate-300"
                    }`}
                  >
                    <div className="font-semibold text-sm">{a.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Learning Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Learning Rate:</label>
                <span className="text-cyan-300 font-mono bg-slate-700/50 px-3 py-1 rounded text-sm">
                  {learningRate.toFixed(3)}
                </span>
              </div>
              <input
                type="range"
                min="0.001"
                max="0.5"
                step="0.01"
                value={learningRate}
                onChange={(e) => setLearningRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-xs text-slate-400 mt-2">
                Controls how quickly the algorithm learns. Lower = slower learning, Higher = faster but riskier
              </p>
            </div>

            {/* Max Depth */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Tree Depth:</label>
                <span className="text-cyan-300 font-mono bg-slate-700/50 px-3 py-1 rounded text-sm">{maxDepth}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={maxDepth}
                onChange={(e) => setMaxDepth(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-xs text-slate-400 mt-2">
                Controls complexity of individual experts. Deeper = more complex patterns, but risk of over-learning
              </p>
            </div>

            {/* Num Rounds */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Number of Rounds:</label>
                <span className="text-cyan-300 font-mono bg-slate-700/50 px-3 py-1 rounded text-sm">{numRounds}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={numRounds}
                onChange={(e) => setNumRounds(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-xs text-slate-400 mt-2">
                Number of experts to build. More experts = better but slower and more training data needed
              </p>
            </div>

            {/* Regularization */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Regularization (Safeguard):</label>
                <span className="text-cyan-300 font-mono bg-slate-700/50 px-3 py-1 rounded text-sm">
                  {regularization.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={regularization}
                onChange={(e) => setRegularization(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-xs text-slate-400 mt-2">
                Prevents over-learning by penalizing complexity. Higher = more cautious, Lower = more aggressive
              </p>
            </div>

            <button
              onClick={generatePrediction}
              className="w-full px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 hover:bg-cyan-500/30 rounded-lg font-semibold transition-all duration-300"
            >
              Predict Performance
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 space-y-6">
          <div>
            <h3 className="font-bold text-white mb-4">Current Algorithm</h3>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">
                <strong className="text-slate-300">{algo.name}</strong>
              </p>
              <p className="text-xs text-slate-500">{algo.subtitle}</p>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-6">
            <h3 className="font-bold text-white mb-4">Predicted Performance</h3>
            {prediction !== null ? (
              <div className="space-y-4">
                <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-center">
                  <p className="text-5xl font-bold text-cyan-300 mb-2">{prediction}%</p>
                  <p className="text-sm text-slate-400">Expected Accuracy</p>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <p>
                    <strong>Learning Rate:</strong> {learningRate > 0.2 ? "Aggressive" : "Conservative"}
                  </p>
                  <p>
                    <strong>Complexity:</strong> {maxDepth > 10 ? "High" : maxDepth > 5 ? "Medium" : "Low"}
                  </p>
                  <p>
                    <strong>Safeguard Level:</strong> {regularization > 0.7 ? "Strong" : "Moderate"}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-slate-400 text-center py-8">Click "Predict Performance" to see results</p>
            )}
          </div>

          <div className="border-t border-cyan-500/20 pt-6 text-xs text-slate-400 space-y-2">
            <p className="font-semibold text-slate-300 mb-2">Pro Tips:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Start with default settings</li>
              <li>Adjust learning rate first</li>
              <li>Increase safeguard if over-learning occurs</li>
              <li>More rounds help with complex problems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedSummaryPage
