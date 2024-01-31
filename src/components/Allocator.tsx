import {useInputField} from "../hooks";

const Allocator = () => {
    const budgetInput = useInputField('number');

    return (
        <section className='flex flex-row justify-evenly my-3'>
            <article className='p-2 mx-2 rounded-md bg-slate-100'>
                <label className='text-sm'>
                    Budget: <input {...budgetInput} />
                </label>
            </article>
            <article className='p-2 mx-2 rounded-md bg-green-100'>
                <p className='text-green-500 text-sm'>Remaining: ${budgetInput.value} </p>
            </article>
            <article className='p-2 mx-2 rounded-md bg-red-200'>
                <p className='text-red-500 text-sm'>Spent so far: $</p>
            </article>
        </section>
    )
}

export default Allocator;
