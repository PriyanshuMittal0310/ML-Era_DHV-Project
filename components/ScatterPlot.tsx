import type React from "react"
import { SCATTER_PLOT_CONFIG } from "../constants"
import type { LoanApplication, LegendItem, DecisionBoundary } from "../types"

interface ScatterPlotProps {
  data: (LoanApplication & { displayColor: string; displaySize: number; residual?: number; highlight?: boolean })[]
  legendItems?: LegendItem[]
  decisionBoundaries?: DecisionBoundary[]
  showResiduals?: boolean
  heatmapData?: { x: number; y: number; value: number }[][] | undefined
  showGradientBackground?: boolean
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data,
  legendItems,
  decisionBoundaries,
  showResiduals,
  heatmapData,
  showGradientBackground,
}) => {
  const { width, height, margin, xDomain, yDomain } = SCATTER_PLOT_CONFIG

  const plotWidth = width - margin.left - margin.right
  const plotHeight = height - margin.top - margin.bottom

  const xScale = (value: number) => ((value - xDomain[0]) / (xDomain[1] - xDomain[0])) * plotWidth
  const yScale = (value: number) => plotHeight - ((value - yDomain[0]) / (yDomain[1] - yDomain[0])) * plotHeight

  // Heatmap color scale from blue (low risk) to red (high risk)
  const getHeatmapColor = (value: number) => {
    const r = Math.round(255 * (value / 100))
    const b = Math.round(255 * (1 - value / 100))
    return `rgba(${r}, 0, ${b}, 0.5)`
  }

  const createGradientBackground = () => {
    const cells: React.ReactNode[] = []
    const cellsX = 20
    const cellsY = 20

    for (let i = 0; i < cellsX; i++) {
      for (let j = 0; j < cellsY; j++) {
        const x = xDomain[0] + (i / cellsX) * (xDomain[1] - xDomain[0])
        const y = yDomain[0] + (j / cellsY) * (yDomain[1] - yDomain[0])

        // Create gradient: red (low credit, low income) to blue (high credit, high income)
        const xRatio = i / cellsX
        const yRatio = j / cellsY
        const riskScore = (1 - xRatio) * (1 - yRatio) * 100 // Higher risk on left and bottom

        const r = Math.round(255 * (riskScore / 100))
        const b = Math.round(255 * (1 - riskScore / 100))

        const cellWidth = plotWidth / cellsX
        const cellHeight = plotHeight / cellsY

        cells.push(
          <rect
            key={`bg-${i}-${j}`}
            x={xScale(x)}
            y={yScale(y)}
            width={cellWidth}
            height={cellHeight}
            fill={`rgba(${r}, 0, ${b}, 0.3)`}
          />,
        )
      }
    }
    return cells
  }

  return (
    <div className="text-xs text-slate-400 relative" style={{ width, height }}>
      <div className="absolute -top-8 left-0 right-0 bg-slate-700/50 rounded px-2 py-1 text-center text-xs text-slate-300 border-l-2 border-cyan-500">
        <span className="font-semibold">Blue dots:</span> Loans Paid Back |{" "}
        <span className="font-semibold">Red dots:</span> Loans Defaulted |{" "}
        <span className="font-semibold">Yellow:</span> Mistakes
      </div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Background */}
          <rect x={0} y={0} width={plotWidth} height={plotHeight} fill="#1e293b" />

          {showGradientBackground && createGradientBackground()}

          {/* Heatmap */}
          {heatmapData && (
            <g>
              {heatmapData.map((row, i) =>
                row.map((cell, j) => {
                  const cellWidth = plotWidth / (row.length - 1)
                  const cellHeight = plotHeight / (heatmapData.length - 1)
                  const r = Math.round(255 * (cell.value / 100))
                  const b = Math.round(255 * (1 - cell.value / 100))
                  return (
                    <rect
                      key={`${i}-${j}`}
                      x={xScale(cell.x) - cellWidth / 2}
                      y={yScale(cell.y) - cellHeight / 2}
                      width={cellWidth}
                      height={cellHeight}
                      fill={`rgba(${r}, 0, ${b}, 0.5)`}
                    />
                  )
                }),
              )}
            </g>
          )}

          {/* Axes */}
          <line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight} stroke="currentColor" />
          <line x1={0} y1={0} x2={0} y2={plotHeight} stroke="currentColor" />

          {/* X-axis Ticks and Labels */}
          {Array.from({ length: 7 }, (_, i) => xDomain[0] + i * 50).map((tick) => (
            <g key={`x-${tick}`} transform={`translate(${xScale(tick)}, ${plotHeight})`}>
              <line y2={5} stroke="currentColor" />
              <text y={20} textAnchor="middle" fill="currentColor">
                {tick}
              </text>
            </g>
          ))}
          <text
            x={plotWidth / 2}
            y={plotHeight + 45}
            textAnchor="middle"
            fill="currentColor"
            className="font-bold text-sm"
          >
            Credit Score
          </text>

          {/* Y-axis Ticks and Labels */}
          {Array.from({ length: 8 }, (_, i) => yDomain[0] + i * 20).map((tick) => (
            <g key={`y-${tick}`} transform={`translate(0, ${yScale(tick)})`}>
              <line x2={-5} stroke="currentColor" />
              <text x={-10} dy="0.32em" textAnchor="end" fill="currentColor">
                {tick}k
              </text>
            </g>
          ))}
          <text
            transform={`translate(${-50}, ${plotHeight / 2}) rotate(-90)`}
            textAnchor="middle"
            fill="currentColor"
            className="font-bold text-sm"
          >
            Annual Income
          </text>

          {/* Title */}
          <text x={plotWidth / 2} y={-20} textAnchor="middle" fill="white" className="text-lg font-bold">
            Loan Application Analysis
          </text>

          {/* Decision Boundaries */}
          {decisionBoundaries?.map((boundary, i) => (
            <g key={`boundary-${i}`}>
              {boundary.type === "vertical" ? (
                <>
                  <line
                    x1={xScale(boundary.value)}
                    x2={xScale(boundary.value)}
                    y1={0}
                    y2={plotHeight}
                    stroke="white"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                  <text
                    x={xScale(boundary.value) + 8}
                    y={20}
                    fill="white"
                    className="font-bold text-xs"
                    backgroundColor="rgba(0,0,0,0.7)"
                  >
                    {boundary.label}
                  </text>
                </>
              ) : (
                <>
                  <line
                    x1={0}
                    x2={plotWidth}
                    y1={yScale(boundary.value)}
                    y2={yScale(boundary.value)}
                    stroke="white"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                  <text x={5} y={yScale(boundary.value) - 8} fill="white" className="font-bold text-xs">
                    {boundary.label}
                  </text>
                </>
              )}
            </g>
          ))}

          {/* Residual Lines */}
          {showResiduals &&
            data.map((d) => {
              if (d.residual === undefined) return null
              // Visual representation of the residual error. A vertical line from the point.
              const lineLength = d.residual * 0.2
              return (
                <line
                  key={`res-${d.id}`}
                  x1={xScale(d.creditScore)}
                  y1={yScale(d.annualIncome)}
                  x2={xScale(d.creditScore)}
                  y2={yScale(d.annualIncome) - lineLength}
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                />
              )
            })}

          {/* Data Points */}
          {data.map((d) => (
            <circle
              key={d.id}
              cx={xScale(d.creditScore)}
              cy={yScale(d.annualIncome)}
              r={d.highlight ? d.displaySize * 1.5 : d.displaySize}
              fill={d.displayColor}
              stroke={d.highlight ? "yellow" : "none"}
              strokeWidth={2}
            >
              <title>{`ID: ${d.id}, Score: ${d.creditScore}, Income: ${d.annualIncome}k, Paid Back: ${d.paidBack}`}</title>
            </circle>
          ))}
        </g>
      </svg>
      {/* Legend */}
      {legendItems && (
        <div className="absolute top-4 right-4 bg-slate-800/90 p-4 rounded ring-1 ring-slate-700">
          <p className="text-xs font-bold text-slate-300 mb-2 uppercase">Legend:</p>
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 mb-2">
              {item.shape === "circle" && (
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              )}
              {item.shape === "square" && <div className="w-3 h-3 border-2" style={{ borderColor: item.color }} />}
              {item.shape === "line" && <div className="w-3 h-0.5" style={{ backgroundColor: item.color }} />}
              <span className="text-slate-300 text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ScatterPlot
