export namespace Finance {
    export class LoanCalculator {
        creditAmount: number
        annualPercent: number
        months: number

        constructor(creditAmount: number, months: number, annualPercent: number) {
            this.creditAmount = creditAmount
            this.months = months
            this.annualPercent = annualPercent
        }
        calculatePercentAndMonthPat(): number {
            const monthRate = this.annualPercent / 12 / 100
            return Math.floor((this.creditAmount * (monthRate * Math.pow(1 + monthRate, this.months))) / (Math.pow(1 + monthRate, this.months) - 1))
        }
    }

    export class TaxCalculator {
        static getTaxAmount(income: number, rate: number): number {
            return income * (rate / 100)
        }
    }
}