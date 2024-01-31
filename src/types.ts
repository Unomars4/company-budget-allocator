export type InputField = {
    type: string,
    value: string | number | undefined,
    onChange: (arg0: React.SyntheticEvent) => void
}

export type Department = {
    name: string,
    amountAllocated: number
}

export type Budget = {
    budget: number,
    remaining: number,
    spent: number
}
