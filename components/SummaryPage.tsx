"use client"

import type React from "react"

interface SummaryPageProps {
  onBack: () => void
}

const SummaryPage: React.FC<SummaryPageProps> = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Complete Learning Summary</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            ← Back to Menu
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* ===== HERO SECTION ===== */}
        <section className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            The Power of Teamwork in Decision Making
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto text-balance">
            Discover how three intelligent systems combine simple ideas into something powerful. Each specializes in
            solving problems the others struggle with, making better decisions together than any could alone.
          </p>
        </section>

        {/* ===== ALGORITHMS OVERVIEW ===== */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Three Powerful Approaches</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AdaBoost Card */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AdaBoost</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-semibold">"Focus on the Mistakes" Manager</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The system builds a team by giving extra attention to the hard cases nobody else can solve. Each new
                expert focuses specifically on the mistakes previous experts made.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Focus on Hard Cases</p>
                    <p className="text-slate-400 text-xs">Each new expert focuses on problems others got wrong</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Clear & Explainable</p>
                    <p className="text-slate-400 text-xs">Easy to understand decisions and reasoning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Yes or No Decisions</p>
                    <p className="text-slate-400 text-xs">Perfect for two-category classification problems</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-400 mb-3">
                  <strong className="text-cyan-300">Best Used When:</strong> You need clear, understandable decisions
                  with balanced data
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-cyan-300">Real-World Use:</strong> Spam detection, fraud prevention, medical
                  screening
                </p>
              </div>
            </div>

            {/* Gradient Boosting Card */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10h8M13 14h8M13 18h8M5 10h.01M5 14h.01M5 18h.01M3 21h18a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Gradient Boosting</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-semibold">"Step-by-Step Improvement" Manager</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Each expert focuses specifically on fixing the errors the previous expert made, creating a gradual
                improvement process that achieves high accuracy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Targeted Fixes</p>
                    <p className="text-slate-400 text-xs">Each expert corrects specific mistakes from before</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Flexible & Versatile</p>
                    <p className="text-slate-400 text-xs">Works with many types of problems and data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Continuous Building</p>
                    <p className="text-slate-400 text-xs">Builds one expert at a time, always improving</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-400 mb-3">
                  <strong className="text-cyan-300">Best Used When:</strong> You need high precision with flexible
                  problem types
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-cyan-300">Real-World Use:</strong> Customer churn prediction, price
                  forecasting, risk assessment
                </p>
              </div>
            </div>

            {/* XGBoost Card */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">XGBoost</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-semibold">"Super-Fast & Smart" Manager</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The most advanced version optimized for speed and real-world use. It includes built-in safeguards to
                prevent over-learning while maintaining incredible accuracy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Prevents Overthinking</p>
                    <p className="text-slate-400 text-xs">Built-in safeguards stop it from learning tricks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Lightning Fast</p>
                    <p className="text-slate-400 text-xs">Handles massive data and makes instant decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white text-sm">Industry Standard</p>
                    <p className="text-slate-400 text-xs">The choice of top companies worldwide</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-400 mb-3">
                  <strong className="text-cyan-300">Best Used When:</strong> Speed and scale matter with massive
                  datasets
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-cyan-300">Real-World Use:</strong> Banking systems, recommendation engines,
                  Kaggle competitions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS SECTION ===== */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Key Benefits of Boosting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                Better Accuracy
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Multiple experts working together catch mistakes that individual systems miss. The combined decision is
                much more accurate than any single expert.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                Handles Complex Problems
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                By combining many simple experts, we can solve problems that are too complicated for any single expert
                to handle alone.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                Prevents Over-Learning
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                The system learns real patterns, not just tricks that work only on practice data. This makes it work
                well on new, unseen situations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                Builds Gradually
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experts are added one at a time, each learning from mistakes made so far. This step-by-step approach is
                more efficient than building everything at once.
              </p>
            </div>
          </div>
        </section>

        {/* ===== COMPARISON TABLE ===== */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Detailed Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700">
                  <th className="px-6 py-4 text-left font-semibold text-white">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-cyan-300">AdaBoost</th>
                  <th className="px-6 py-4 text-left font-semibold text-cyan-300">Gradient Boost</th>
                  <th className="px-6 py-4 text-left font-semibold text-cyan-300">XGBoost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Main Strategy</td>
                  <td className="px-6 py-4 text-slate-400">Focus on hard cases</td>
                  <td className="px-6 py-4 text-slate-400">Fix previous errors</td>
                  <td className="px-6 py-4 text-slate-400">Advanced error fixing + optimization</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Speed</td>
                  <td className="px-6 py-4 text-slate-400">Moderate</td>
                  <td className="px-6 py-4 text-slate-400">Good</td>
                  <td className="px-6 py-4 text-slate-400">Excellent (Very Fast)</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Accuracy</td>
                  <td className="px-6 py-4 text-slate-400">High</td>
                  <td className="px-6 py-4 text-slate-400">Very High</td>
                  <td className="px-6 py-4 text-slate-400">Excellent</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Prevents Over-Learning</td>
                  <td className="px-6 py-4 text-slate-400">Some</td>
                  <td className="px-6 py-4 text-slate-400">Good</td>
                  <td className="px-6 py-4 text-slate-400">Excellent</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Scales to Large Data</td>
                  <td className="px-6 py-4 text-slate-400">Good</td>
                  <td className="px-6 py-4 text-slate-400">Good</td>
                  <td className="px-6 py-4 text-slate-400">Excellent</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Parallel Processing</td>
                  <td className="px-6 py-4 text-slate-400">Limited</td>
                  <td className="px-6 py-4 text-slate-400">Limited</td>
                  <td className="px-6 py-4 text-slate-400">Full</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Ease of Understanding</td>
                  <td className="px-6 py-4 text-slate-400">Simple</td>
                  <td className="px-6 py-4 text-slate-400">Moderate</td>
                  <td className="px-6 py-4 text-slate-400">Complex</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">Industry Adoption</td>
                  <td className="px-6 py-4 text-slate-400">Research</td>
                  <td className="px-6 py-4 text-slate-400">Growing</td>
                  <td className="px-6 py-4 text-slate-400">Widespread</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== APPLICATIONS SECTION ===== */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">AdaBoost Uses</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Spam Detection</strong> - Identifying unwanted emails
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Face Recognition</strong> - Detecting faces in images
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Medical Screening</strong> - Early disease detection
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Fraud Prevention</strong> - Detecting fraudulent transactions
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Gradient Boost Uses</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Sales Forecasting</strong> - Predicting future sales
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Customer Churn</strong> - Predicting who might leave
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Risk Assessment</strong> - Evaluating financial risk
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Demand Forecasting</strong> - Predicting product demand
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">XGBoost Uses</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Banking Systems</strong> - Large-scale loan decisions
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Recommendations</strong> - Netflix, Amazon, YouTube
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Competitions</strong> - Kaggle champion algorithm
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <strong>Ad Targeting</strong> - Google, Facebook ad systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== KEY CONCEPTS ===== */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Important Concepts to Remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Simple Expert (Weak Learner)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                A person or system that's only a little better than random guessing. They're sometimes right and
                sometimes wrong, but on average they do better than chance.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Ensemble (Team Decision)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Combining many people's or systems' knowledge to make better decisions than any single person or system
                could alone. The power comes from diversity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Over-Fitting (Over-Learning)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                When a system learns tricks that work on training data but fail in real situations. It's memorizing
                instead of learning real patterns. Boosting helps prevent this.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Sequential Building</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Adding experts one at a time, where each new member learns from the mistakes made so far. This
                step-by-step approach is more efficient than building everything at once.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Weighted Voting</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Not all experts have equal say. Better experts get more weight in the final decision. This ensures smart
                experts have more influence than less accurate ones.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="font-bold text-white mb-3 text-lg">Error Correction</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Each new expert specifically learns from mistakes the previous experts made. This focused approach on
                errors leads to rapid, steady improvement.
              </p>
            </div>
          </div>
        </section>

        {/* ===== FINAL THOUGHTS ===== */}
        <section className="p-10 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Your Learning Journey</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            You've explored three powerful ways to build smart decision systems. Each one combines simple ideas into
            something incredible. These concepts appear everywhere in modern technology - from your email spam filter to
            Netflix recommendations to banking systems processing millions of transactions daily.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white font-semibold mb-2">Start with AdaBoost</p>
              <p className="text-slate-400 text-sm">
                When learning about teams making decisions together and how to handle difficult cases
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white font-semibold mb-2">Use Gradient Boosting</p>
              <p className="text-slate-400 text-sm">
                When you need flexibility and want to solve complex real-world problems step by step
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white font-semibold mb-2">Choose XGBoost</p>
              <p className="text-slate-400 text-sm">
                When building production systems that need to be super fast and work with enormous datasets
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SummaryPage
