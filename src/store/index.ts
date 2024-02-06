import {create} from "zustand";
import data from "../../data/departments";
import {State, Actions} from "../types";

export const useBudgetStore = create<State & Actions>()((set) => ({
    data: data,
    budget: 0,
    spent: 0,
    setBudget: (amt: number) => set((state) => ({budget: amt})),
    calcSpent: () => set((state) => ({spent: state.budget - state.data.reduce((p, c) => p + c.amountAllocated, 0)}))
}));
