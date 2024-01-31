import {useInputField} from "../hooks";

const Allocator = () => {
    const budgetInput = useInputField('number');

    return (
        <section className='flex flex-row justify-between my-3'>
            <article className='p-2 mx-2 rounded-md bg-slate-100 min-w-fit'>
                <label className='text-sm'>
                    Budget: <input {...budgetInput} />
                </label>
            </article>
            <article className='p-2 mx-2 rounded-md bg-green-100 min-w-fit'>
                <p className='text-green-500 text-sm'>Remaining: ${budgetInput.value} </p>
            </article>
            <article className='p-2 mx-2 rounded-md bg-red-200 min-w-fit'>
                <p className='text-red-500 text-sm'>Spent so far: $</p>
            </article>
        </section>
    )
}

export default Allocator;
