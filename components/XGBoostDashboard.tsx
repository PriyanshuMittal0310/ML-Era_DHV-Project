"use client"

import type React from "react"
import { useState, useMemo } from "react"
import ScatterPlot from "./ScatterPlot"
import XGBoostVisuals from "./XGBoostVisuals"
import ChevronLeftIcon from "./icons/ChevronLeftIcon"
import ChevronRightIcon from "./icons/ChevronRightIcon"
import { LOAN_DATA, SCATTER_PLOT_CONFIG } from "../constants"

const XGBoostDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [scene, setScene] = useState(0)

  const scenes = [
    {
      concept:
        "XGBoost uses the same 'fix the errors' idea as Gradient Boosting, but it's super-charged for real-world speed and accuracy.",
      graphExplanation:
        "XGBoost means 'eXtreme Gradient Boosting.' It takes the core idea of Gradient Boosting and adds optimizations to make it incredibly fast and accurate. The data looks the same, but the system is much more powerful.",
    },
    {
      concept:
        "Instead of checking features one at a time, XGBoost checks ALL features at the same time. This makes it 10 times faster!",
      graphExplanation:
        "Gradient Boosting is like a team looking at one piece of information at a time. XGBoost is like the same team looking at everything at once in parallel. This parallel approach makes it blazingly fast while staying accurate.",
    },
    {
      concept:
        "XGBoost stops experts from overthinking. Simple, clear rules work better in real life than complicated tricks.",
      graphExplanation:
        "XGBoost has built-in safeguards to prevent the system from learning patterns that only work on training data. It forces the system to find rules that will actually work in the real world, not just cheat on practice problems.",
    },
    {
      concept: "Result: XGBoost is FASTER, MORE ACCURATE, and MORE RELIABLE than regular Gradient Boosting.",
      graphExplanation:
        "The final picture shows XGBoost's expert decision landscape. The clean, sharp boundaries mean confident, accurate predictions. XGBoost balances speed, accuracy, and reliability—that's why top companies use it worldwide.",
    },
  ]

  const plotData = useMemo(
    () =>
      LOAN_DATA.map((d) => ({
        ...d,
        displayColor: d.paidBack ? "rgba(59, 130, 246, 0.8)" : "rgba(239, 68, 68, 0.8)",
        displaySize: 5,
      })),
    [],
  )

  const heatmapData = useMemo(() => {
    if (scene < 3) return undefined
    const grid: { x: number; y: number; value: number }[][] = []
    const { xDomain, yDomain } = SCATTER_PLOT_CONFIG
    for (let i = 0; i < 20; i++) {
      const row: { x: number; y: number; value: number }[] = []
      for (let j = 0; j < 20; j++) {
        const score = xDomain[0] + (xDomain[1] - xDomain[0]) * (j / 19)
        const income = yDomain[0] + (yDomain[1] - yDomain[0]) * (i / 19)
        let prediction = 20
        prediction += score < 650 ? 30 : -5
        prediction += income < 55 ? 25 : -10
        prediction -= score > 750 && income > 100 ? 20 : 0
        prediction = Math.max(0, Math.min(100, prediction))
        row.push({ x: score, y: income, value: prediction })
      }
      grid.push(row)
    }
    return grid.reverse()
  }, [scene])

  const renderContent = () => {
    if (scene === 3) {
      return (
        <div className="relative">
          <ScatterPlot data={plotData} heatmapData={heatmapData} />
        </div>
      )
    }
    return <ScatterPlot data={plotData} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="pt-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-2">
          ⚡ XGBoost: The Super-Fast Expert System
        </h1>
        <p className="text-center text-slate-400 text-sm">
          Step {scene + 1} of {scenes.length}
        </p>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Story/Narrative Section - Prominent */}
        <div className="space-y-4">
          {/* Concept */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-l-4 border-cyan-500 p-6 sm:p-8 rounded-lg ring-1 ring-cyan-500/20">
            <p className="text-slate-100 text-lg sm:text-xl font-semibold leading-relaxed">{scenes[scene].concept}</p>
          </div>

          {/* Graph Explanation */}
          <div className="bg-slate-800/50 border-l-4 border-blue-500 p-6 sm:p-8 rounded-lg ring-1 ring-slate-700">
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">
              What's happening in the graph
            </h3>
            <p className="text-slate-200 text-base leading-relaxed">{scenes[scene].graphExplanation}</p>
          </div>
        </div>

        {/* Visualization Section - Updated layout for better balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Graph - Takes 2 columns */}
          <div className="lg:col-span-2 w-full">
            <div className="bg-slate-800 p-2 rounded-lg ring-1 ring-slate-700 shadow-lg">
              <div style={{ height: SCATTER_PLOT_CONFIG.height }}>{renderContent()}</div>
            </div>
          </div>

          {/* Visual Explanation - Takes 1 column, much larger */}
          <div className="w-full bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-lg ring-1 ring-slate-600 shadow-lg min-h-[600px] flex flex-col justify-center">
            <XGBoostVisuals scene={scene} />
          </div>
        </div>
      </div>

      {/* Footer - Controls */}
      <div className="px-4 sm:px-8 pb-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">PROGRESS</span>
              <span className="text-xs font-semibold text-slate-400">
                {scene + 1}/{scenes.length}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
                style={{ width: `${((scene + 1) / scenes.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium text-sm"
            >
              <ChevronLeftIcon /> Back to Menu
            </button>

            {/* Step Indicators */}
            <div className="flex gap-2 justify-center flex-wrap">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setScene(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === scene ? "bg-cyan-400 w-8" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  title={`Step ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setScene((s) => (s + 1) % scenes.length)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all font-semibold text-sm shadow-lg shadow-cyan-500/30"
            >
              {scene === scenes.length - 1 ? "Restart" : "Next"} <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XGBoostDashboard
