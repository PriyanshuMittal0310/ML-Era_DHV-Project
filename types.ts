export interface LoanApplication {
  id: number
  creditScore: number
  annualIncome: number // in thousands
  paidBack: boolean // True if the loan was paid back, false if defaulted
  highlight?: boolean
  label?: string
  isMistake?: boolean
}

export type AlgorithmView =
  | "menu"
  | "adaboost"
  | "gradientboost"
  | "xgboost"
  | "adaboost-technical"
  | "gradientboost-technical"
  | "xgboost-technical"
  | "enhanced-summary"

export type LegendItem = {
  color: string
  label: string
  shape: "circle" | "square" | "line"
}

export type DecisionBoundary = {
  type: "vertical" | "horizontal"
  value: number
  label?: string
}
