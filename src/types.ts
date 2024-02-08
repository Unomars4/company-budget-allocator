export type InputField = {
    type: string,
    value: string | number | undefined,
    onChange: (arg0: React.SyntheticEvent) => void
}

export interface DepartmentAllocation {
    name: string;
    amount: number;
}

export interface ICurrency {
    name: string,
    sign: string
}


export type State = {
    budget: number,
    data: DepartmentAllocation[],
    currency: string
}


export type Actions = {
    updateBudget: (amt: number) => void;
    decrDepBy10: (index: number) => void;
    incrDepBy10: (index: number) => void;
    removeDept: (dept: string) => void;
    updateDepAllocation: (dept: string, alloc: string, amt: number) => void;
    updateCurrency: (v: string) => void;
}
