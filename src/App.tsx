import {useState} from 'react'
import {useInputField} from './hooks';

const App = () => {
    const budgetInput = useInputField('number');

    return (
        <main>
            <h1>Company's Budget Allocation</h1>
            <section>
                <article className='rounded-sm bg-slate-100'>
                    <label>
                        Budget: <input {...budgetInput} />
                    </label>
                </article>
                <article className='rounded-sm bg-green-100'>
                    <p>Remaining: ${budgetInput.value} </p>
                </article>
                <article className='rounded-sm bg-red-200'>
                    <p>Spent so far: $</p>
                </article>
            </section>
        </main>
    );
}

export default App
