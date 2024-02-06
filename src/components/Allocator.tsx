import {useBudgetStore} from "../store";

const Allocator = () => {
    const budget = useBudgetStore((state) => state.budget);
    const spent = useBudgetStore((state) => state.spent);


    return (
        <section className='flex flex-row justify-between my-3'>
            <article className='p-2 mx-2 rounded-md bg-slate-100 min-w-fit'>
                <label className='text-sm'>
                    Budget: <input type="number" min={0} placeholder="0" onChange={(e) => updateBudget(Number(e.target.value))} />
                </label>
            </article>
            <article className='p-2 mx-2 rounded-md bg-green-100 min-w-fit'>
                <p className='text-green-500 text-sm'>Remaining: ${budget} </p>
            </article>
            <article className='p-2 mx-2 rounded-md bg-red-200 min-w-fit'>
                <p className='text-red-500 text-sm'>Spent so far: ${spent}</p>
            </article>
        </section>
    )
}

export default Allocator;
