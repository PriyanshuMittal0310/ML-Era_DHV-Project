import type React from "react"

const GradientBoostVisuals: React.FC<{ scene: number }> = ({ scene }) => {
  if (scene === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8 max-w-2xl">
        <div className="text-6xl mb-4">📊</div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Gradient Boosting</h3>
          <p className="text-slate-300 text-lg">Sequential Error Fixing</p>
        </div>
      </div>
    )
  }

  if (scene === 1) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-slate-300 mb-3">STEP 1: Baseline Guess</p>
          <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 p-8 rounded-lg">
            <p className="text-5xl font-bold text-white">40%</p>
            <p className="text-sm text-cyan-100 mt-2">Average Risk for All Loans</p>
          </div>
          <p className="text-xs text-slate-400 mt-4">Simple start point, not very accurate yet</p>
        </div>
      </div>
    )
  }

  if (scene === 2) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <p className="text-sm font-semibold text-slate-300 mb-2">STEP 2: Officer Fixes Errors</p>

        {/* Before and After Visual */}
        <div className="flex gap-4 w-full">
          {/* Before - Large error */}
          <div className="flex-1 flex flex-col items-center">
            <p className="text-xs font-semibold text-red-300 mb-3">BEFORE</p>
            <div className="w-full bg-red-900/30 rounded-lg p-4 relative h-40 flex items-end justify-center gap-1">
              <div className="w-1/3 h-full bg-red-500/60 rounded"></div>
              <div className="w-1/3 h-3/4 bg-red-500/60 rounded"></div>
              <div className="w-1/3 h-5/6 bg-red-500/60 rounded"></div>
              <div className="absolute top-2 right-2 text-xs text-red-300 font-bold">85% Error</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center text-2xl text-slate-400">→</div>

          {/* After - Small error */}
          <div className="flex-1 flex flex-col items-center">
            <p className="text-xs font-semibold text-green-300 mb-3">AFTER</p>
            <div className="w-full bg-green-900/30 rounded-lg p-4 relative h-40 flex items-end justify-center gap-1">
              <div className="w-1/3 h-2 bg-green-500/60 rounded"></div>
              <div className="w-1/3 h-1.5 bg-green-500/60 rounded"></div>
              <div className="w-1/3 h-2.5 bg-green-500/60 rounded"></div>
              <div className="absolute top-2 right-2 text-xs text-green-300 font-bold">15% Error</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center bg-slate-800 p-3 rounded">
          Officer sees mistakes from Step 1 and fixes them
        </p>
      </div>
    )
  }

  if (scene === 3) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <p className="text-sm font-semibold text-slate-300 mb-2">STEP 3: More Officers = Better</p>

        {/* Sequential improvement */}
        <div className="w-full space-y-3">
          {[
            { step: 1, error: 85, label: "Officer #1" },
            { step: 2, error: 50, label: "Officer #2" },
            { step: 3, error: 25, label: "Officer #3" },
            { step: 4, error: 10, label: "Officer #4" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className="w-20">
                <p className="text-xs font-semibold text-slate-300">{item.label}</p>
              </div>
              <div className="flex-1 h-10 bg-slate-600 rounded-lg overflow-hidden flex items-center">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center transition-all"
                  style={{ width: `${100 - item.error}%` }}
                >
                  <span className="text-xs font-bold text-white">{100 - item.error}% Better</span>
                </div>
              </div>
              <div className="w-16 text-right">
                <p className="text-xs text-red-400 font-bold">{item.error}% Error</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 text-center bg-slate-800 p-3 rounded">
          Each new officer reduces errors further
        </p>
      </div>
    )
  }

  if (scene === 4) {
    return (
      <div className="flex flex-col items-center gap-6 p-8 max-w-2xl">
        <p className="text-sm font-semibold text-slate-300 mb-2">FINAL RESULT</p>

        {/* Final accuracy meter */}
        <div className="relative w-full h-32 bg-slate-700 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-400">90%</p>
              <p className="text-sm text-green-300">Accurate Predictions</p>
            </div>
          </div>
          <div className="h-full w-90% bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-30"></div>
        </div>

        {/* Key insight */}
        <div className="w-full bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-4 rounded-lg border border-cyan-500/30">
          <p className="text-sm text-cyan-300 font-semibold mb-2">How it works:</p>
          <p className="text-xs text-slate-300">
            Each officer specializes in fixing previous mistakes. Like a team of proofreaders, each pass gets better.
          </p>
        </div>
      </div>
    )
  }

  return null
}

export default GradientBoostVisuals
