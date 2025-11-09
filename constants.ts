import { LoanApplication } from './types';

function createLoan(id: number, creditScore: number, annualIncome: number, paidBack: boolean): LoanApplication {
  return { id, creditScore, annualIncome, paidBack };
}

// A curated dataset of 25 loan applications to tell the story effectively
export const LOAN_DATA: LoanApplication[] = [
  // Obvious good loans (easy to approve)
  createLoan(1, 780, 120, true),
  createLoan(2, 750, 95, true),
  createLoan(3, 800, 150, true),

  // Obvious bad loans (easy to deny)
  createLoan(4, 580, 35, false),
  createLoan(5, 610, 40, false),
  createLoan(6, 550, 30, false),

  // --- Key applications for the AdaBoost Story ---
  // Mistake 1 (Alex's rule wrongly denies them): Low score, but paid back (high income)
  createLoan(7, 630, 110, true),
  createLoan(8, 620, 130, true),

  // Mistake 2 (Alex's rule wrongly approves them): High score, but defaulted (low income)
  createLoan(9, 700, 45, false),
  createLoan(10, 690, 42, false),

  // --- Key applications for the Gradient Boost Story ---
  // A clear successful loan (True Risk = 0%)
  createLoan(11, 820, 140, true),
  // A clear default (True Risk = 100%)
  createLoan(12, 560, 25, false),

  // A borderline case that paid back
  createLoan(13, 680, 60, true),
  // A borderline case that defaulted
  createLoan(14, 660, 55, false),

  // Additional applications to fill out the dataset
  createLoan(15, 720, 85, true),
  createLoan(16, 790, 100, true),
  createLoan(17, 650, 75, true),
  createLoan(18, 630, 50, false),
  createLoan(19, 670, 65, false),
  createLoan(20, 710, 70, false),
  createLoan(21, 640, 90, true),
  createLoan(22, 600, 38, false),
  createLoan(23, 760, 80, true), 
  createLoan(24, 680, 105, true),
  createLoan(25, 620, 60, false),
];


export const SCATTER_PLOT_CONFIG = {
  width: 800,
  height: 500,
  margin: { top: 40, right: 40, bottom: 60, left: 70 },
  xDomain: [540, 830] as [number, number],
  yDomain: [20, 160] as [number, number],
};
