"use client"

import type React from "react"

interface AdaBoostTechnicalDashboardProps {
  onBack: () => void
}

const AdaBoostTechnicalDashboard: React.FC<AdaBoostTechnicalDashboardProps> = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">AdaBoost: Mathematical Deep Dive</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Algorithm Overview */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Algorithm Overview</h2>
          <div className="p-8 rounded-lg bg-slate-800/50 border border-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">What is AdaBoost?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                AdaBoost (Adaptive Boosting) is a meta-algorithm that combines multiple weak classifiers to create a
                strong classifier. It works by assigning weights to training examples and adapting these weights based
                on misclassifications.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The key innovation of AdaBoost is its adaptive nature - it focuses on examples that previous classifiers
                misclassified, forcing subsequent classifiers to concentrate on hard cases.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700/50 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-4">Final Prediction Formula</h4>
                <div className="bg-slate-800/50 p-4 rounded border border-slate-700 mb-4">
                  <p className="text-slate-300 text-sm mb-3">
                    The final prediction combines all classifiers with weights:
                  </p>
                  <p className="font-mono text-white text-base">H(x) = sign(Σ αₜ × hₜ(x))</p>
                  <p className="text-slate-400 text-xs mt-3">where each α is calculated as: αₜ = 0.5 × ln((1-εₜ)/εₜ)</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-blue-900/30 border border-blue-500/30 rounded text-center">
                    <p className="text-xs text-blue-300 font-bold mb-1">H(x)</p>
                    <p className="text-xs text-slate-300">Final strong classifier</p>
                  </div>
                  <div className="p-3 bg-cyan-900/30 border border-cyan-500/30 rounded text-center">
                    <p className="text-xs text-cyan-300 font-bold mb-1">αₜ</p>
                    <p className="text-xs text-slate-300">Weight of classifier t</p>
                  </div>
                  <div className="p-3 bg-purple-900/30 border border-purple-500/30 rounded text-center">
                    <p className="text-xs text-purple-300 font-bold mb-1">hₜ(x)</p>
                    <p className="text-xs text-slate-300">Weak classifier t</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-4">Weight Update Rule</h4>
                <div className="bg-slate-800/50 p-4 rounded border border-slate-700 mb-4">
                  <p className="text-slate-300 text-sm mb-3">
                    Weights are updated after each iteration to emphasize misclassified examples:
                  </p>
                  <p className="font-mono text-white text-base">Wₜ₊₁(i) = Wₜ(i) × exp(-αₜ × yᵢ × hₜ(xᵢ))</p>
                  <p className="text-slate-400 text-xs mt-2">Then normalized: Wₜ₊₁(i) = Wₜ₊₁(i) / Z</p>
                </div>
                <div className="bg-orange-900/20 border border-orange-500/30 rounded p-4">
                  <p className="text-orange-300 text-sm font-bold mb-2">🔑 Key Insight:</p>
                  <p className="text-slate-300 text-sm">
                    When a classifier gets an example wrong, that example's weight INCREASES. This forces the next
                    classifier to pay more attention to hard cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Concepts with Visuals */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Mathematical Concepts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-4">Weak Learner (hₜ)</h3>
              <div className="space-y-3">
                <p className="text-slate-300 text-sm leading-relaxed">
                  A classifier that performs slightly better than random guessing (accuracy &gt;50%). Usually decision
                  stumps or simple classifiers.
                </p>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-2">Error Rate Constraint:</p>
                  <p className="font-mono text-cyan-300">ε &lt; 0.5</p>
                  <p className="text-xs text-slate-400 mt-2">Error must be below 50% (better than random)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-4">Training Weights (Wₜ)</h3>
              <div className="space-y-3">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Distribution over training examples. Initially uniform (1/N). Updated after each iteration to
                  emphasize misclassified examples.
                </p>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-2">Normalization Constraint:</p>
                  <p className="font-mono text-cyan-300">Σ Wₜ(i) = 1</p>
                  <p className="text-xs text-slate-400 mt-2">Weights always sum to 1</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-4">Weighted Error (εₜ)</h3>
              <div className="space-y-3">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Error rate of classifier hₜ on weighted training set. Measures how well the current classifier
                  performs on important examples.
                </p>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-2">Formula:</p>
                  <p className="font-mono text-cyan-300">εₜ = Σ Wₜ(i) × [yᵢ ≠ hₜ(xᵢ)]</p>
                  <p className="text-xs text-slate-400 mt-2">Sum of weights where prediction is wrong</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-4">Classifier Weight (αₜ)</h3>
              <div className="space-y-3">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Importance of each classifier in the final vote. Better classifiers (lower error) get higher weights.
                </p>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-2">Formula:</p>
                  <p className="font-mono text-cyan-300">αₜ = 0.5 × ln((1-εₜ)/εₜ)</p>
                  <p className="text-xs text-slate-400 mt-2">Higher accuracy → Higher weight (always ≥ 0)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Algorithm Steps */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Algorithm Steps</h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Initialize Weights",
                desc: "Set W₁(i) = 1/N for all training examples",
                visual: "📊 Start with equal importance",
              },
              {
                step: 2,
                title: "Train Weak Learner",
                desc: "Train classifier hₜ on weighted dataset using distribution Wₜ",
                visual: "🎯 Fit to weighted data",
              },
              {
                step: 3,
                title: "Compute Classifier Weight",
                desc: "Calculate weight αₜ based on classifier's accuracy",
                visual: "⚖️ Measure performance",
              },
              {
                step: 4,
                title: "Update Weights",
                desc: "Increase weights on misclassified examples",
                visual: "🔴 Focus on mistakes",
              },
              {
                step: 5,
                title: "Repeat",
                desc: "Continue for T iterations until convergence",
                visual: "🔄 Build ensemble",
              },
              {
                step: 6,
                title: "Final Prediction",
                desc: "Combine all classifiers using weighted majority voting",
                visual: "💪 Strong classifier",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50">
                      <span className="text-cyan-300 font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-2">{item.desc}</p>
                    <p className="text-slate-400 text-xs">{item.visual}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Properties & Characteristics */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Key Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-900/20 to-slate-800 border border-green-500/20">
              <h3 className="font-semibold text-green-300 mb-4">✓ Advantages</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Simple and easy to understand</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Fast training and prediction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Works with any weak learner</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Proven theoretical guarantees</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">→</span>
                  <span>No hyperparameter tuning needed</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-red-900/20 to-slate-800 border border-red-500/20">
              <h3 className="font-semibold text-red-300 mb-4">✗ Limitations</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">→</span>
                  <span>Sensitive to outliers and noise</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">→</span>
                  <span>Sequential training (cannot parallelize)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">→</span>
                  <span>Can overfit with noisy data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">→</span>
                  <span>All weak learners must be independent</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">→</span>
                  <span>Requires careful choice of iterations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Complexity Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Computational Complexity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Training Time</h3>
              <p className="font-mono text-white text-lg mb-2">O(T × N × M)</p>
              <p className="text-slate-400 text-xs leading-relaxed">T iterations × N samples × M learner complexity</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Prediction Time</h3>
              <p className="font-mono text-white text-lg mb-2">O(T × M)</p>
              <p className="text-slate-400 text-xs leading-relaxed">Must evaluate all T classifiers sequentially</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Memory Usage</h3>
              <p className="font-mono text-white text-lg mb-2">O(N + T × M)</p>
              <p className="text-slate-400 text-xs leading-relaxed">Training weights + T stored classifiers</p>
            </div>
          </div>
        </section>

        {/* Learning Theory */}
        <section className="p-10 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Theoretical Guarantees</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Training Error Bound</h3>
              <div className="bg-slate-800/30 p-4 rounded border border-slate-700/50 mb-3">
                <p className="font-mono text-white text-base">Training Error ≤ exp(-2T × γ²)</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                The training error exponentially decreases with iterations. The margin γ (edge of weak learner over
                random guessing) controls the decay rate.
              </p>
            </div>
            <div className="border-t border-cyan-500/30 pt-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Generalization Error</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                AdaBoost has proven generalization bounds that depend on the margin - the minimum confidence in any
                correct prediction. Larger margins lead to better generalization despite using many weak learners. This
                explains why AdaBoost rarely overfits despite boosting many classifiers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdaBoostTechnicalDashboard
