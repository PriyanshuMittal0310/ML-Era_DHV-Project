"use client"

import type React from "react"

interface GradientBoostTechnicalDashboardProps {
  onBack: () => void
}

const GradientBoostTechnicalDashboard: React.FC<GradientBoostTechnicalDashboardProps> = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Gradient Boosting: Mathematical Deep Dive</h1>
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
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">What is Gradient Boosting?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Gradient Boosting is a powerful ensemble technique where new learners are trained to predict residuals
                (errors) left by previous learners. Instead of weighting samples, it uses gradient descent to minimize a
                loss function.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The key idea is to use regression trees to predict residuals at each step, gradually reducing errors
                through multiple iterations. This approach is more general and flexible than AdaBoost.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Core Formula</h4>
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div>
                  <p className="text-cyan-300 mb-2">Final Prediction (Additive Model):</p>
                  <p className="text-white">F(x) = F₀(x) + Σ(λ × fₜ(x))</p>
                  <p className="text-slate-400 text-xs mt-1">
                    where F₀ is initial model, λ is learning rate (0 &lt; λ ≤ 1)
                  </p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-cyan-300 mb-2">Residual (Negative Gradient):</p>
                  <p className="text-white">rₜ,ᵢ = -∂L(yᵢ, Fₜ₋₁(xᵢ))/∂Fₜ₋₁(xᵢ)</p>
                  <p className="text-slate-400 text-xs mt-1">New tree fₜ trains to predict these residuals</p>
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
              <h3 className="font-semibold text-cyan-300 mb-3">Loss Function (L)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Measures prediction error. Different loss functions handle different problems. Common: Squared Error
                (regression), Log Loss (classification).
              </p>
              <p className="text-slate-400 text-xs font-mono">L(y, F) = (y - F(x))² for regression</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Residuals (rₜ)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Errors left by previous model. New tree trains on these residuals. For squared loss: rₜ = y - Fₜ₋₁(x)
              </p>
              <p className="text-slate-400 text-xs font-mono">Prediction after update: Fₜ(x) = Fₜ₋₁(x) + λ × fₜ(x)</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Learning Rate (λ)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Controls step size for each update. Smaller values require more iterations but often generalize better.
                Typically 0.01 to 0.1.
              </p>
              <p className="text-slate-400 text-xs font-mono">Lower λ → Slower learning, better generalization</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-3">Tree Structure (fₜ)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Usually shallow regression trees (depth 3-8). Depth controls model complexity. Shallow trees prevent
                overfitting.
              </p>
              <p className="text-slate-400 text-xs font-mono">Leaf values updated: cₜ = -Σ∂L/∂F / Σ∂²L/∂F²</p>
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
                title: "Initialize Model",
                desc: "Create initial model F₀(x) - usually predicts mean value for regression",
                formula: "F₀(x) = mean(y) or optimized constant",
              },
              {
                step: 2,
                title: "Calculate Residuals",
                desc: "Compute negative gradient (residuals) for each training example",
                formula: "rₜ,ᵢ = -∂L(yᵢ, Fₜ₋₁(xᵢ))/∂Fₜ₋₁(xᵢ)",
              },
              {
                step: 3,
                title: "Fit Tree to Residuals",
                desc: "Train regression tree fₜ to predict residuals using features X",
                formula: "fₜ = fit_tree(X, residuals, max_depth)",
              },
              {
                step: 4,
                title: "Calculate Leaf Values",
                desc: "Optimize leaf values using second-order Taylor expansion",
                formula: "cₜ,ⱼ = -Σ∂L/∂F / (Σ∂²L/∂F² + λ)",
              },
              {
                step: 5,
                title: "Update Predictions",
                desc: "Add scaled tree predictions to current model",
                formula: "Fₜ(x) = Fₜ₋₁(x) + λ × fₜ(x)",
              },
              {
                step: 6,
                title: "Repeat",
                desc: "Continue for T iterations until validation error stops improving",
                formula: "Usually 100-1000 iterations, track validation loss",
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

        {/* Properties & Characteristics */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Key Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Advantages</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Handles various loss functions flexibly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Works for regression and classification</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Better generalization with proper regularization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Handles missing values naturally (tree-based)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Feature importance calculations built-in</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-300 mb-3">Limitations</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Sequential training cannot be parallelized</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Requires careful hyperparameter tuning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Sensitive to learning rate and tree depth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Training can be slow for large datasets</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Prone to overfitting without regularization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regularization Techniques */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Regularization Techniques</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-2">1. Learning Rate (Shrinkage)</h3>
              <p className="text-slate-300 text-sm mb-3">
                Reduces step size at each iteration, requiring more iterations but improving generalization.
              </p>
              <p className="text-slate-400 text-xs font-mono">Fₜ(x) = Fₜ₋₁(x) + 0.1 × fₜ(x) # smaller step than 1.0</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-2">2. Tree Depth (Complexity)</h3>
              <p className="text-slate-300 text-sm mb-3">
                Limit maximum tree depth to prevent overfitting. Typical: depth 3-8.
              </p>
              <p className="text-slate-400 text-xs font-mono">max_depth = 5 # limits interactions, simpler trees</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-2">3. Subsampling</h3>
              <p className="text-slate-300 text-sm mb-3">
                Use random subset of data for each tree, adding stochasticity and improving generalization.
              </p>
              <p className="text-slate-400 text-xs font-mono">subsample = 0.8 # use 80% of data per tree</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-cyan-300 mb-2">4. Column Subsampling</h3>
              <p className="text-slate-300 text-sm mb-3">
                Use random subset of features at each split, promoting feature diversity.
              </p>
              <p className="text-slate-400 text-xs font-mono">colsample_bytree = 0.8 # use 80% of features per tree</p>
            </div>
          </div>
        </section>

        {/* Complexity Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Computational Complexity</h2>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <p className="text-cyan-300 mb-2">Training Complexity:</p>
                <p className="text-white">O(T × N × log(N) × d)</p>
                <p className="text-slate-400 text-xs mt-1">T = iterations, N = samples, d = features</p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-cyan-300 mb-2">Per-Tree Complexity:</p>
                <p className="text-white">O(N × log(N) × d × depth)</p>
                <p className="text-slate-400 text-xs mt-1">Sorting features, building splits at each depth level</p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-cyan-300 mb-2">Prediction Complexity:</p>
                <p className="text-white">O(T × depth)</p>
                <p className="text-slate-400 text-xs mt-1">Must traverse T trees sequentially</p>
              </div>
            </div>
          </div>
        </section>

        {/* Theory */}
        <section className="p-10 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Theoretical Foundation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Loss Function Minimization</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Gradient Boosting performs approximate Newton step in function space. By fitting trees to negative
                gradients, it takes steps in the direction that decreases loss most rapidly.
              </p>
            </div>
            <div className="border-t border-cyan-500/30 pt-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Function Space Perspective</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Unlike traditional gradient descent in parameter space, Gradient Boosting operates in function space.
                Each new tree is a step toward the optimal function that minimizes the loss.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GradientBoostTechnicalDashboard
