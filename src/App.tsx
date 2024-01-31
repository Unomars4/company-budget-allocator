import {useState} from 'react'
import {useInputField} from './hooks';

const App = () => {
    const budgetInput = useInputField('number');

    return (
        <main>
            <h1 className='text-xl font-bold'>Company's Budget Allocation</h1>
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
        </main>
    );
}

export default App
