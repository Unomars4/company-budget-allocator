import {useState} from 'react';
import {useInputField} from './hooks';
import Allocator from './components/Allocator';

const App = () => {
    const budgetInput = useInputField('number');

    return (
        <main>
            <h1 className='text-xl font-bold'>Company's Budget Allocation</h1>
            <Allocator inputHandler={budgetInput} />
        </main>
    );
}

export default App
