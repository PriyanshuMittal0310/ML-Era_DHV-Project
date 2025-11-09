"use client"

import type React from "react"
import { useState, useMemo } from "react"
import type { LoanApplication, LegendItem } from "../types"
import { LOAN_DATA } from "../constants"
import ScatterPlot from "./ScatterPlot"
import GradientBoostVisuals from "./GradientBoostVisuals"
import ChevronLeftIcon from "./icons/ChevronLeftIcon"
import ChevronRightIcon from "./icons/ChevronRightIcon"

const GradientBoostDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [scene, setScene] = useState(0)

  const scenes = [
    {
      concept:
        "We want to predict how risky each loan is (from 0% to 100% chance of failure). Let's build a system that gets really good at this.",
      graphExplanation:
        "Each dot represents one loan. Blue dots are loans that paid back (safe), red dots are loans that failed (risky). We need to build a system that can predict these outcomes before they happen.",
    },
    {
      concept:
        "Our first officer makes a simple guess: the average default rate. He predicts the same risk level for every application.",
      graphExplanation:
        "Officer #1 starts with a baseline: 'Most loans have about a 40% failure rate, so I'll guess that for everyone.' It's not smart, but it's a starting point we can build on.",
    },
    {
      concept:
        "A new officer looks at where Officer #1 went wrong. He notices: 'Wait, people with high credit scores almost never default!' He creates a better guess to fix those cases.",
      graphExplanation:
        "Officer #2 finds a pattern: 'High credit score people are safer than average; low credit score people are riskier.' The error bars show where Officer #1 was wrong and Officer #2 is fixing it.",
    },
    {
      concept:
        "Now we combine both officers' knowledge: The baseline guess + Officer #2's fixes = A much better prediction.",
      graphExplanation:
        "By adding the two predictions together, we get much closer to the truth! The gaps between predictions and reality are getting smaller. The system is learning step by step.",
    },
    {
      concept:
        "After many officers each fixing previous mistakes, we get very accurate risk predictions. This is Gradient Boosting!",
      graphExplanation:
        "The final picture shows our complete system: deep blue areas are 'very safe,' deep red areas are 'very risky.' Each officer added their expertise until we built a system that truly understands loan risk.",
    },
  ]

  const TRUE_RISK = (loan: LoanApplication) => (loan.paidBack ? 0 : 100)
  const AVERAGE_RISK = useMemo(() => (LOAN_DATA.filter((l) => !l.paidBack).length / LOAN_DATA.length) * 100, [])

  const getPrediction = (loan: LoanApplication, sc: number) => {
    if (sc === 0) return undefined
    if (sc === 1) return AVERAGE_RISK

    const officer2_correction = loan.creditScore > 700 ? -20 : loan.creditScore < 620 ? 30 : 5
    if (sc === 2 || sc === 3) return AVERAGE_RISK + officer2_correction

    const officer3_correction = loan.annualIncome > 100 ? -15 : loan.annualIncome < 45 ? 25 : 0
    if (sc >= 4) return AVERAGE_RISK + officer2_correction + officer3_correction

    return undefined
  }

  const plotData = useMemo(() => {
    return LOAN_DATA.map((loan) => {
      const prediction = getPrediction(loan, scene)
      const residual = prediction !== undefined ? TRUE_RISK(loan) - prediction : undefined
      return {
        ...loan,
        displayColor: loan.paidBack ? "rgba(59, 130, 246, 0.8)" : "rgba(239, 68, 68, 0.8)",
        displaySize: 5,
        residual,
      }
    })
  }, [scene, AVERAGE_RISK])

  const legendItems: LegendItem[] = useMemo(() => {
    const base: LegendItem[] = [
      { color: "rgba(59, 130, 246, 1)", label: "Paid Back (Risk 0%)", shape: "circle" },
      { color: "rgba(239, 68, 68, 1)", label: "Defaulted (Risk 100%)", shape: "circle" },
    ]
    if (scene > 0 && scene < 5) {
      base.push({ color: "#94a3b8", label: "Prediction Error", shape: "line" })
    }
    return base
  }, [scene])

  const heatmapData = useMemo(() => {
    if (scene < 4) return undefined
    const grid: { x: number; y: number; value: number }[][] = []
    const { xDomain, yDomain } = { xDomain: [540, 830], yDomain: [20, 160] }
    for (let i = 0; i < 20; i++) {
      const row: { x: number; y: number; value: number }[] = []
      for (let j = 0; j < 20; j++) {
        const score = xDomain[0] + (xDomain[1] - xDomain[0]) * (j / 19)
        const income = yDomain[0] + (yDomain[1] - yDomain[0]) * (i / 19)
        const loan = { creditScore: score, annualIncome: income, paidBack: true, id: -1 }
        const prediction = getPrediction(loan, 4)
        row.push({ x: score, y: income, value: prediction || 0 })
      }
      grid.push(row)
    }
    return grid.reverse()
  }, [scene])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="pt-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-2">
          📈 Gradient Boosting: Fixing Mistakes Step-by-Step
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
              <ScatterPlot
                data={plotData}
                legendItems={legendItems}
                showResiduals={scene > 0 && scene < 4}
                heatmapData={heatmapData}
              />
            </div>
          </div>

          {/* Visual Explanation - Takes 1 column, much larger */}
          <div className="w-full bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-lg ring-1 ring-slate-600 shadow-lg min-h-[600px] flex flex-col justify-center">
            <GradientBoostVisuals scene={scene} />
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

export default GradientBoostDashboard
