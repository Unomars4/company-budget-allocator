export type InputField = {
    type: string,
    value: string | number | undefined,
    onChange: (arg0: React.SyntheticEvent) => void
}

export type Department = {
    name: string,
    amountAllocated: number
}

export type State = {
    budget: number,
    data: Department[],
    spent: number
}

export type Actions = {
    setBudget: (amt: number) => void;
    calcSpent: () => void
}
