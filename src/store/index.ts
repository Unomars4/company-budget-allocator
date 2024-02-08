import {create} from "zustand";
import data from "../../data/departments";
import {State, Actions} from "../types";

export const useBudgetStore = create<State & Actions>()((set) => ({
    data: data,
    budget: 20000,
    currency: "$",
    updateBudget: (amt) => set((state) => ({budget: amt})),
    incrDepBy10: (index) => set((state) => ({data: [{name: state.data[index].name, amount: state.data[index].amount + 10}, ...state.data.filter((d, i) => i !== index)]})),
    decrDepBy10: (index) => set((state) => ({data: [{name: state.data[index].name, amount: state.data[index].amount - 10}, ...state.data.filter((d, i) => i !== index)]})),
    removeDept: (dept) => set((state) => ({data: state.data.filter(d => d.name !== dept)})),
    updateDepAllocation: (dept, alloc, amt) => set((state) => ({data: [{name: dept, amount: Number(amt)}, ...state.data.filter(d => d.name !== dept)]})),
    updateCurrency: (v) => set((state) => ({currency: v.split(" ")[0]}))
}));
