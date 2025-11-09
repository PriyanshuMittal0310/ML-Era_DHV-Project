"use client"

import type React from "react"
import { useState } from "react"
import type { AlgorithmView } from "./types"
import IntroPage from "./components/IntroPage"
import SummaryPage from "./components/SummaryPage"
import EnhancedSummaryPage from "./components/EnhancedSummaryPage"
import AdaBoostDashboard from "./components/AdaBoostDashboard"
import GradientBoostDashboard from "./components/GradientBoostDashboard"
import XGBoostDashboard from "./components/XGBoostDashboard"
import AdaBoostTechnicalDashboard from "./components/AdaBoostTechnicalDashboard"
import GradientBoostTechnicalDashboard from "./components/GradientBoostTechnicalDashboard"
import XGBoostTechnicalDashboard from "./components/XGBoostTechnicalDashboard"
import AlgorithmMenu from "./components/AlgorithmMenu"
import InteractiveSummaryPage from "./components/InteractiveSummaryPage"

const MainMenu: React.FC<{ onSelect: (view: AlgorithmView | "intro") => void; onSummary: () => void }> = ({
  onSelect,
  onSummary,
}) => {
  const menuItems = [
    { id: "adaboost", title: "AdaBoost 🏦", subtitle: 'The "Focus on the Mistakes" Manager' },
    { id: "gradientboost", title: "Gradient Boost 📈", subtitle: 'The "Let\'s Fix the Error" Manager' },
    { id: "xgboost", title: "XGBoost ⚡", subtitle: 'The "High-Performance" Manager' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Back to Intro Button */}
      <button
        onClick={() => onSelect("intro")}
        className="absolute top-6 left-6 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
      >
        ← Intro
      </button>

      {/* Summary Button */}
      <button
        onClick={onSummary}
        className="absolute top-6 right-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30 rounded-lg transition-all duration-300"
      >
        Summary →
      </button>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">Boosting: The Secret to Smarter Loan Decisions 💰</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          An interactive story that explains powerful AI strategies by showing how a bank builds a super-star team of
          loan officers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id as AlgorithmView)}
            className="bg-slate-800 p-8 rounded-lg ring-1 ring-slate-700 hover:ring-cyan-400 transition-all duration-300 text-left transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-slate-400 mt-2">{item.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

const App: React.FC = () => {
  const [view, setView] = useState<
    AlgorithmView | "intro" | "summary" | "algorithm-menu" | "enhanced-summary" | "interactive-summary"
  >("intro")

  const renderView = () => {
    switch (view) {
      case "intro":
        return (
          <IntroPage
            onStart={() => setView("algorithm-menu")}
            onInteractiveSummary={() => setView("interactive-summary")}
          />
        )
      case "summary":
        return <SummaryPage onBack={() => setView("algorithm-menu")} />
      case "enhanced-summary":
        return <EnhancedSummaryPage onBack={() => setView("algorithm-menu")} onNavigate={setView} />
      case "algorithm-menu":
        return <AlgorithmMenu onNavigate={setView} onBack={() => setView("intro")} />
      case "adaboost":
        return <AdaBoostDashboard onBack={() => setView("algorithm-menu")} />
      case "gradientboost":
        return <GradientBoostDashboard onBack={() => setView("algorithm-menu")} />
      case "xgboost":
        return <XGBoostDashboard onBack={() => setView("algorithm-menu")} />
      case "adaboost-technical":
        return <AdaBoostTechnicalDashboard onBack={() => setView("algorithm-menu")} />
      case "gradientboost-technical":
        return <GradientBoostTechnicalDashboard onBack={() => setView("algorithm-menu")} />
      case "xgboost-technical":
        return <XGBoostTechnicalDashboard onBack={() => setView("algorithm-menu")} />
      case "interactive-summary":
        return <InteractiveSummaryPage onBack={() => setView("algorithm-menu")} />
      default:
        return <MainMenu onSelect={(view) => setView(view)} onSummary={() => setView("enhanced-summary")} />
    }
  }

  return <main className="w-full min-h-screen bg-slate-900">{renderView()}</main>
}

export default App
