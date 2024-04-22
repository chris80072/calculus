export type BudgetType = 'food' | 'clothing' | 'housing' | 'transportation' | 'education' | 'entertainment' | 'Iinsurance' | 'saving' 

export type Budget = {
    type: BudgetType
    amount: number
}