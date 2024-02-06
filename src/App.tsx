import {useState} from 'react';
import Allocator from './components/Allocator';
import ChangeAllocation from './components/ChangeAllocation';
import TableAllocation from './components/TableAllocation';


const App = () => {

    return (
        <main>
            <h1 className='text-2xl font-bold'>Company's Budget Allocation</h1>
            <Allocator />
            <h3 className='text-xl font-bold mb-3'>Allocation</h3>
            <TableAllocation />
            <h3 className='text-xl font-bold mb-3'>Change Allocation</h3>
            <ChangeAllocation />
        </main>
    );
}

export default App
