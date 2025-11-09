"use client"

import type React from "react"

interface XGBoostTechnicalDashboardProps {
  onBack: () => void
}

const XGBoostTechnicalDashboard: React.FC<XGBoostTechnicalDashboardProps> = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">XGBoost: Mathematical Deep Dive</h1>
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
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">What is XGBoost?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                XGBoost (eXtreme Gradient Boosting) is an optimized, production-ready implementation of Gradient
                Boosting. It improves upon standard Gradient Boosting through second-order Taylor approximation,
                regularization, and parallel processing capabilities.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Designed for speed, scalability, and accuracy, XGBoost uses second-order information (Hessian) for
                better optimization and includes built-in regularization to prevent overfitting.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Core Objective Function</h4>
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div>
                  <p className="text-cyan-300 mb-2">Regularized Objective:</p>
                  <p className="text-white">Obj(t) = Σ l(yᵢ, ŷᵢ⁽ᵗ⁾) + Σ Ω(fₜ)</p>
                  <p className="text-slate-400 text-xs mt-1">Loss on data + Regularization on trees</p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-cyan-300 mb-2">Gain for Split:</p>
                  <p className="text-white">Gain = ½[G_L²/(H_L+λ) + G_R²/(H_R+λ) - (G_L+G_R)²/(H_L+H_R+λ)] - γ</p>
                  <p className="text-slate-400 text-xs mt-1">Second-order approximation with regularization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Mathematical Concepts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Gradient (G)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                First-order derivative of loss function. Points in direction of steepest increase in loss.
              </p>
              <p className="text-slate-400 text-xs font-mono">gᵢ = ∂l(yᵢ, ŷᵢ)/∂ŷᵢ</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Hessian (H)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Second-order derivative. Provides curvature information for better optimization.
              </p>
              <p className="text-slate-400 text-xs font-mono">hᵢ = ∂²l(yᵢ, ŷᵢ)/∂ŷᵢ²</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Regularization Ω(f)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Penalizes model complexity. Prevents overfitting by controlling tree structure.
              </p>
              <p className="text-slate-400 text-xs font-mono">Ω(f) = γT + ½λ||w||²</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Split Gain</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Measures improvement from splitting a node. Uses second-order approximation for accuracy.
              </p>
              <p className="text-slate-400 text-xs font-mono">Higher gain → better split</p>
            </div>
          </div>
        </section>

        {/* Algorithm Steps */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">XGBoost Algorithm</h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Initialize Model",
                desc: "Start with initial prediction, typically 0.5 for classification",
                formula: "ŷᵢ⁽⁰⁾ = initial_score",
              },
              {
                step: 2,
                title: "Compute Gradients and Hessians",
                desc: "Calculate first and second derivatives of loss for each sample",
                formula: "gᵢ = ∂l/∂ŷᵢ⁽ᵗ⁻¹⁾, hᵢ = ∂²l/∂ŷᵢ⁽ᵗ⁻¹⁾²",
              },
              {
                step: 3,
                title: "Grow Tree Greedily",
                desc: "Build tree recursively using gain-based splitting with second-order info",
                formula: "Split feature and threshold that maximize Gain",
              },
              {
                step: 4,
                title: "Prune Tree",
                desc: "Remove splits with negative gain after growth to improve generalization",
                formula: "If Gain < γ for any split, prune it",
              },
              {
                step: 5,
                title: "Calculate Leaf Weights",
                desc: "Compute optimal weight for each leaf using Newton step",
                formula: "w* = -G/(H+λ)",
              },
              {
                step: 6,
                title: "Update Predictions",
                desc: "Add scaled predictions from new tree to ensemble",
                formula: "ŷᵢ⁽ᵗ⁾ = ŷᵢ⁽ᵗ⁻¹⁾ + η × fₜ(xᵢ)",
              },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50">
                      <span className="text-cyan-300 font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-2">{item.desc}</p>
                    <p className="text-slate-400 text-xs font-mono">{item.formula}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* XGBoost Advantages */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Key Advantages of XGBoost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Speed & Scalability</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Parallel tree building on GPUs/CPUs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Cache optimization for CPU efficiency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Handles millions of rows efficiently</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Out-of-core computation for huge datasets</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Regularization & Control</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>L1 and L2 regularization built-in</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Tree pruning prevents overfitting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Column subsampling adds robustness</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Cross-validation built-in</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Flexibility</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom loss functions supported</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Works on classification and regression</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Handles ranking and pairwise losses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Feature importance calculation</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Robustness</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Handles missing values automatically</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Sparse data support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Monotonic constraints for domain knowledge</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Distributed computing support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hyperparameters */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Important Hyperparameters</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Tree Control</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-white font-mono">max_depth</span> - Maximum tree depth (3-8 typical)
                </p>
                <p>
                  <span className="text-white font-mono">min_child_weight</span> - Minimum sum of weights in leaf (1-5)
                </p>
                <p>
                  <span className="text-white font-mono">gamma</span> - Minimum loss reduction to split (0-10)
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Regularization</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-white font-mono">lambda</span> - L2 regularization (0.1-1)
                </p>
                <p>
                  <span className="text-white font-mono">alpha</span> - L1 regularization (0-1)
                </p>
                <p>
                  <span className="text-white font-mono">subsample</span> - Training data fraction (0.5-1)
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Learning</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-white font-mono">eta</span> - Learning rate (0.01-0.3)
                </p>
                <p>
                  <span className="text-white font-mono">num_rounds</span> - Number of boosting rounds (100-1000)
                </p>
                <p>
                  <span className="text-white font-mono">colsample_bytree</span> - Feature sampling (0.5-1)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complexity */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Computational Efficiency</h2>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <p className="text-cyan-300 mb-2">Training Complexity:</p>
                <p className="text-white">O(T × N × log(N))</p>
                <p className="text-slate-400 text-xs mt-1">T iterations, N samples - parallelizable across features</p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-cyan-300 mb-2">Why XGBoost is Faster:</p>
                <div className="text-slate-300 space-y-2 text-xs mt-2">
                  <p>• Column subsampling reduces feature search space</p>
                  <p>• Block structure enables parallel tree growth</p>
                  <p>• Cache optimization reduces memory access</p>
                  <p>• GPU support for massive parallelization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Topics */}
        <section className="p-10 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Advanced Topics</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Newton-Raphson Approximation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                XGBoost uses second-order Taylor expansion of the loss function. This provides more accurate
                optimization steps than first-order methods, leading to better convergence and fewer iterations needed.
              </p>
            </div>
            <div className="border-t border-cyan-500/30 pt-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Column Block Structure</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Data organized in compressed column blocks enables efficient parallel feature scanning. This
                architectural choice makes XGBoost significantly faster than traditional Gradient Boosting on large
                datasets.
              </p>
            </div>
            <div className="border-t border-cyan-500/30 pt-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Sparsity Awareness</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                XGBoost automatically learns the best direction to handle missing values during tree construction. This
                sparsity awareness makes it efficient for sparse datasets common in real-world applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default XGBoostTechnicalDashboard
