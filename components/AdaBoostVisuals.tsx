import type React from "react"

const AdaBoostVisuals: React.FC<{ scene: number }> = ({ scene }) => {
  if (scene === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
        <div className="text-5xl">🏦</div>
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">AdaBoost</h3>
          <p className="text-slate-300 text-sm">"Adaptive Boosting"</p>
          <p className="text-slate-400 text-xs mt-3">Combine weak learners into a strong model</p>
        </div>
      </div>
    )
  }

  if (scene === 1) {
    return (
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="w-full">
          <p className="text-center text-xs font-bold text-slate-300 mb-4 uppercase">Officer Alex</p>
          <div className="bg-slate-600/50 rounded-lg p-4 border-2 border-cyan-500">
            <div className="text-2xl font-bold text-cyan-300 mb-2">📋 Simple Rule</div>
            <p className="text-slate-300 font-mono text-sm">Credit Score {">"} 680 = APPROVE</p>
          </div>
        </div>
        <div className="w-full pt-4 border-t border-slate-600">
          <p className="text-center text-xs font-bold text-red-300 mb-3 uppercase">His Mistakes</p>
          <div className="space-y-3">
            <div className="bg-slate-700/50 p-3 rounded border-l-4 border-yellow-500">
              <p className="text-xs text-slate-300 font-semibold">See the BIGGER YELLOW circles on the graph?</p>
              <p className="text-xs text-slate-400 mt-1">Those are cases where Alex was WRONG. The system says:</p>
              <p className="text-xs text-yellow-300 font-bold mt-2">"Pay extra attention to these!"</p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-red-900/30 rounded p-2 border border-red-500">
                <div className="text-lg mb-1">📉</div>
                <p className="text-xs text-slate-300">
                  Low Score
                  <br />
                  High Income
                </p>
                <p className="text-xs text-red-300 font-bold">
                  Alex said NO
                  <br />
                  Should be YES
                </p>
              </div>
              <div className="flex-1 bg-red-900/30 rounded p-2 border border-red-500">
                <div className="text-lg mb-1">📈</div>
                <p className="text-xs text-slate-300">
                  High Score
                  <br />
                  Low Income
                </p>
                <p className="text-xs text-red-300 font-bold">
                  Alex said YES
                  <br />
                  Should be NO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (scene === 2) {
    return (
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="w-full">
          <p className="text-center text-xs font-bold text-slate-300 mb-4 uppercase">Weight Adjustment</p>
          <div className="flex items-end justify-center gap-4 h-32">
            <div className="flex flex-col items-center">
              <p className="text-xs text-slate-400 mb-2">Before</p>
              <div className="flex gap-1 items-end">
                <div className="w-5 bg-blue-400 rounded-sm" style={{ height: "30px" }}></div>
                <div className="w-5 bg-blue-400 rounded-sm" style={{ height: "30px" }}></div>
                <div className="w-5 bg-red-500 rounded-sm" style={{ height: "30px" }}></div>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-semibold">All Equal</p>
            </div>
            <div className="text-2xl text-cyan-400">→</div>
            <div className="flex flex-col items-center">
              <p className="text-xs text-slate-400 mb-2">After</p>
              <div className="flex gap-1 items-end">
                <div className="w-5 bg-blue-400 rounded-sm" style={{ height: "20px" }}></div>
                <div className="w-5 bg-blue-400 rounded-sm" style={{ height: "20px" }}></div>
                <div className="w-5 bg-red-600 rounded-sm" style={{ height: "80px" }}></div>
              </div>
              <p className="text-xs text-red-300 mt-2 font-semibold">Mistakes HEAVIER</p>
            </div>
          </div>
        </div>

        <div className="w-full pt-4 border-t border-slate-600">
          <p className="text-center text-xs font-bold text-cyan-300 mb-3 uppercase">Officer Betty Arrives</p>
          <div className="bg-slate-700/50 p-3 rounded border-l-4 border-cyan-400 mb-3">
            <p className="text-xs text-slate-300 font-semibold">Betty focuses on the weighted mistakes</p>
            <p className="text-xs text-slate-400 mt-1">She learns a DIFFERENT rule to catch what Alex missed:</p>
          </div>
          <div className="bg-slate-600/50 rounded-lg p-4 border-2 border-blue-500">
            <div className="text-2xl font-bold text-blue-300 mb-2">📋 New Rule</div>
            <p className="text-slate-300 font-mono text-sm">Annual Income {">"} 80k = APPROVE</p>
          </div>
        </div>
      </div>
    )
  }

  if (scene === 3) {
    return (
      <div className="flex flex-col items-center gap-5 p-6">
        <p className="text-center text-xs font-bold text-cyan-300 uppercase mb-2">Team Voting System</p>
        <div className="w-full space-y-2">
          {[
            { name: "Alex", icon: "👨", rule: "Score > 680", color: "from-cyan-600 to-cyan-700" },
            { name: "Betty", icon: "👩", rule: "Income > 80k", color: "from-blue-600 to-blue-700" },
          ].map((officer) => (
            <div key={officer.name} className="flex items-center gap-3">
              <div className="text-lg">{officer.icon}</div>
              <div className="flex-1">
                <div className={`bg-gradient-to-r ${officer.color} rounded px-3 py-2`}>
                  <p className="text-xs font-bold text-white">{officer.name}</p>
                  <p className="text-xs text-slate-200 font-mono">{officer.rule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full pt-3 border-t border-slate-600 mt-2">
          <div className="bg-blue-900/40 border-2 border-blue-500 rounded-lg p-3 text-center mb-3">
            <p className="text-xs text-slate-300 font-semibold">HOW IT WORKS:</p>
            <p className="text-xs text-blue-300 mt-2 font-mono">IF (Alex says YES) OR (Betty says YES)</p>
            <p className="text-xs text-blue-300 font-mono">THEN APPROVE</p>
          </div>
          <div className="bg-green-900/40 border-2 border-green-500 rounded-lg p-4 text-center">
            <p className="text-xs text-slate-300 mb-2">RESULT:</p>
            <p className="text-lg font-bold text-green-300">✓ SMARTER DECISION</p>
            <p className="text-xs text-slate-400 mt-2">Coverage from both perspectives</p>
          </div>
        </div>
      </div>
    )
  }

  if (scene === 4) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center">
        <div className="flex justify-center gap-3 mb-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
            >
              {i}
            </div>
          ))}
          <div className="flex items-center px-3">
            <span className="text-2xl text-green-400">+</span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            💪
          </div>
        </div>
        <div>
          <p className="font-bold text-cyan-300">Weak + Weak = STRONG!</p>
          <p className="text-xs text-slate-400 mt-2">Combine simple rules focusing on mistakes</p>
        </div>
        <div className="w-full mt-4 p-4 bg-green-900/20 border-2 border-green-500 rounded-lg">
          <p className="text-xs text-slate-300 font-semibold mb-2">Why This Works:</p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Each expert is weak alone, but together they're strong. By focusing on mistakes, each expert becomes
            specialized. The team covers more cases than any single expert could.
          </p>
        </div>
      </div>
    )
  }

  return null
}

export default AdaBoostVisuals
