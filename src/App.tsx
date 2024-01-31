import {useState} from 'react';
import Allocator from './components/Allocator';
import TableAllocation from './components/TableAllocation';

const App = () => {
    return (
        <main>
            <h1 className='text-2xl font-bold'>Company's Budget Allocation</h1>
            <Allocator />
            <h3 className='text-l'>Allocation</h3>
            <TableAllocation />
            <h3 className='text-l'>Change Allocation</h3>
        </main>
    );
}

export default App
