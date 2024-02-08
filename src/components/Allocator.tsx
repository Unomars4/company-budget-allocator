import {useEffect} from "react";
import {useBudgetStore} from "../store";
import {ICurrency} from "../types";
import {getTotalSpent} from "../utils";
import currencies from "../../data/currencies";

const Allocator = () => {
    const budget = useBudgetStore((state) => state.budget);
    const spent = getTotalSpent(useBudgetStore((state) => state.data));
    const updateBudget = useBudgetStore((state) => state.updateBudget);
    const currency = useBudgetStore((state) => state.currency);
    const updateCurr = useBudgetStore((state) => state.updateCurrency);
    const remaining = budget - spent;

    useEffect(() => {
        updateBudget(spent);
    }, []);

    const currencyHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const currency = event.target.value;
        updateCurr(currency);
    }

    const budgetHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (event.target.value > 20000) {
            window.alert(`Budget cannot exceed ${currency}20000`);
            return;
        }

        if (event.target.value < spent) {
            window.alert(`Budget cannot be lower than spending`);
            return;
        }
        updateBudget(Number(event.target.value));
    }

    return (
        <section className='flex flex-row justify-between my-3'>
            <article className='p-2 mx-2 rounded-md bg-slate-100 min-w-fit'>
                <label className='text-sm'>
                    Budget:{currency} <input type="number" min={0} placeholder="0" value={budget} onChange={budgetHandler} />
                </label>
            </article>
            <article className='p-2 mx-2 rounded-md bg-green-100 min-w-fit'>
                <p className='text-green-500 text-sm'>Remaining: {currency}{remaining} </p>
            </article>
            <article className='p-2 mx-2 rounded-md bg-red-200 min-w-fit'>
                <p className='text-red-500 text-sm'>Spent so far: {currency}{spent}</p>
            </article>
            <article className='p-2 mx-2 rounded-md bg-green-100 text-green-300 min-w-fit'>
                <label htmlFor="currency">Currency: </label>
                <input className="rounded-md" id="currency" name="currency" type="text" list="currencies" onChange={currencyHandler} />
                <datalist id="currencies">
                    <select>
                        {currencies.map((v: ICurrency, i) => {
                            if (i === 0) {
                                return (<option key={v.sign} value={`${v.sign} ${v.name}`} selected></option>);
                            }
                            return (
                                <option key={v.sign} value={`${v.sign} ${v.name}`} ></option>
                            );
                        })}
                    </select>
                </datalist>
            </article>
        </section >
    )
}

export default Allocator;
