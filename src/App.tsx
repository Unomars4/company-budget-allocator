import {useState} from 'react';
import Allocator from './components/Allocator';
import ChangeAllocation from './components/ChangeAllocation';
import TableAllocation from './components/TableAllocation';
import {Department} from './types';

const App = () => {
    const [allocatedDepartments, setDepartments] = useState<Department[] | undefined>([{name: "Marketing", amountAllocated: 500}]);

    return (
        <main>
            <h1 className='text-2xl font-bold'>Company's Budget Allocation</h1>
            <Allocator />
            <h3 className='text-xl font-bold mb-3'>Allocation</h3>
            <TableAllocation departments={allocatedDepartments} />
            <h3 className='text-xl font-bold mb-3'>Change Allocation</h3>
            <ChangeAllocation departments={allocatedDepartments} />
        </main>
    );
}

export default App
