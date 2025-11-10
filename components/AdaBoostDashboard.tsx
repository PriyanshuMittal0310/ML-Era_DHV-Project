"use client"

import type React from "react"
import { useState, useMemo } from "react"
import type { LoanApplication, LegendItem, DecisionBoundary } from "../types"
import { LOAN_DATA } from "../constants"
import ScatterPlot from "./ScatterPlot"
import AdaBoostVisuals from "./AdaBoostVisuals"
import ChevronLeftIcon from "./icons/ChevronLeftIcon"
import ChevronRightIcon from "./icons/ChevronRightIcon"
import { useNarration } from "../hooks/useNarration"
import NarrationControls from "./NarrationControls"

const AdaBoostDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [scene, setScene] = useState(0)

  const scenes = [
    {
      concept: "Start with Officer Alex. He uses ONE simple rule: 'If Credit Score > 680, approve.'",
      graphExplanation:
        "Alex's line shows his simple decision rule. Blue dots are loans that went well (he was right), red dots are loans that failed (he was wrong). His simple rule works for some cases but misses others.",
    },
    {
      concept:
        "Alex makes mistakes! The bigger yellow boxes show the cases he got wrong. We mark these as MORE IMPORTANT for the next officer.",
      graphExplanation:
        "See the bigger yellow boxes? Those are Alex's mistakes. The system says to the next officer: 'Focus here! These are the hard cases!' By giving extra attention to mistakes, we create a specialized expert.",
    },
    {
      concept: "Officer Betty sees Alex's mistakes and learns a NEW rule: 'If Annual Income > 80k, approve.'",
      graphExplanation:
        "Betty uses a different approach—she looks at income instead of credit score. Because she focuses on Alex's mistakes, she specializes in the cases Alex couldn't handle. Now we have two different experts.",
    },
    {
      concept: "Two experts are better than one! The team votes. Approve if EITHER Alex OR Betty says YES.",
      graphExplanation:
        "By combining both experts' decisions, we cover much more ground. A loan gets approved if the credit score is good OR the income is sufficient. Together, they're much smarter than either alone.",
    },
    {
      concept:
        "This is the power of boosting: Simple experts combine into one super-smart system by focusing on mistakes! Blue = Loans that went well, Red = Loans that failed",
      graphExplanation:
        "The final picture shows how confident the team is about each case. Dark blue areas are 'definitely approve' decisions, red areas are 'definitely reject.' The boosting process created an expert team from simple rules!",
    },
  ]

  // === AUDIO NARRATION ===
  const narration = useNarration({
    scene,
    getTextForScene: (s) => `${scenes[s].concept}. ${scenes[s].graphExplanation}`,
    autoOnSceneChange: true,
    autoAdvance: false, // set true if you want it to auto move to next scene when narration finishes
    onAdvance: () => setScene((x) => (x + 1) % scenes.length),
  })

  const getClassification = (loan: LoanApplication, sc: number) => {
    const alexRule = loan.creditScore > 680
    const bettyRule = loan.annualIncome > 80
    if (sc === 0) return undefined
    if (sc === 1) return alexRule
    if (sc === 2) return alexRule
    if (sc >= 3) return alexRule || bettyRule
    return undefined
  }

  const plotData = useMemo(() => {
    return LOAN_DATA.map((loan) => {
      const prediction = getClassification(loan, scene)
      const isMistake = prediction !== undefined && prediction !== loan.paidBack
      const isCorrect = prediction !== undefined && prediction === loan.paidBack
      let displaySize = 5
      if ((scene === 1 || scene === 2) && isMistake) displaySize = 12
      const displayColor = loan.paidBack ? "rgba(59, 130, 246, 0.8)" : "rgba(239, 68, 68, 0.8)"
      return {
        ...loan,
        displayColor,
        displaySize,
        highlight: (scene === 1 || scene === 2) && isMistake,
        isMistake,
        isCorrect,
      }
    })
  }, [scene])

  const legendItems: LegendItem[] = useMemo(() => {
    const base: LegendItem[] = [
      { color: "rgba(59, 130, 246, 1)", label: "Paid Back (Risk 0%)", shape: "circle" },
      { color: "rgba(239, 68, 68, 1)", label: "Defaulted (Risk 100%)", shape: "circle" },
    ]
    if (scene === 1 || scene === 2) base.push({ color: "yellow", label: "Mistakes (Bigger Weight)", shape: "square" })
    if (scene === 4) base.push({ color: "white", label: "Prediction Boundary", shape: "line" })
    return base
  }, [scene])

  const decisionBoundaries = useMemo(() => {
    if (scene === 0 || scene === 4) return []
    if (scene === 1 || scene === 2) return [{ type: "vertical", value: 680, label: "Alex's Rule" } as const]
    if (scene >= 3)
      return [
        { type: "vertical", value: 680, label: "Alex" } as const,
        { type: "horizontal", value: 80, label: "Betty" } as const,
      ]
    return []
  }, [scene])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="pt-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-2">
          {scene === 0 && "🏦 AdaBoost: Building a Winning Team"}
          {scene === 1 && "❌ Finding the Hard Cases"}
          {scene === 2 && "🎯 Learning from Mistakes"}
          {scene === 3 && "🤝 The Team Decides"}
          {scene === 4 && "🏆 The Expert System"}
        </h1>
        <p className="text-center text-slate-400 text-sm">Step {scene + 1} of {scenes.length}</p>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Story / Narrative */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-l-4 border-cyan-500 p-6 sm:p-8 rounded-lg ring-1 ring-cyan-500/20">
            <p className="text-slate-100 text-lg sm:text-xl font-semibold leading-relaxed">{scenes[scene].concept}</p>
          </div>
          <div className="bg-slate-800/50 border-l-4 border-blue-500 p-6 sm:p-8 rounded-lg ring-1 ring-slate-700">
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">What's happening in the graph</h3>
            <p className="text-slate-200 text-base leading-relaxed">{scenes[scene].graphExplanation}</p>
          </div>
        </div>

        {/* Narration controls */}
        <NarrationControls narration={narration} />

        {/* Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 w-full">
            <div className="bg-slate-800 p-2 rounded-lg ring-1 ring-slate-700 shadow-lg">
              <ScatterPlot
                data={plotData}
                legendItems={legendItems}
                decisionBoundaries={decisionBoundaries}
                showGradientBackground={scene === 4}
              />
            </div>
          </div>
          <div className="w-full bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-lg ring-1 ring-slate-600 shadow-lg min-h-[600px] flex flex-col justify-center">
            <AdaBoostVisuals scene={scene} />
          </div>
        </div>
      </div>

      {/* Footer / Controls */}
      <div className="px-4 sm:px-8 pb-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Progress */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">PROGRESS</span>
              <span className="text-xs font-semibold text-slate-400">{scene + 1}/{scenes.length}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
                style={{ width: `${((scene + 1) / scenes.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium text-sm">
              <ChevronLeftIcon /> Back to Menu
            </button>

            <div className="flex gap-2 justify-center flex-wrap">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setScene(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === scene ? "bg-cyan-400 w-8" : "bg-slate-600 hover:bg-slate-500"}`}
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

export default AdaBoostDashboard