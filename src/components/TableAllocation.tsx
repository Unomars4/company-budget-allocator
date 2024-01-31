import {Department} from "../types";

const TableAllocation = ({departments}: {departments: Department[] | undefined}) => {
    return (
        <section className="mb-3">
            <table>
                <thead className="p-2 text-sm border-b-2 bg-slate-100">
                    <tr>
                        <th>Department</th>
                        <th>Allocated Budget</th>
                        <th>Increase by 10</th>
                        <th>Decrease by 10</th>
                    </tr>
                </thead>
                <tbody>
                    {departments ? departments.map(d => (
                        <tr className="odd:bg-white even:bg-slate-50" key={d.name}>
                            <td>{d.name}</td>
                            <td>{d.amountAllocated}</td>
                            <td>
                                <button className="p-3 rounded-full text-white text-md bg-green-400" type="button">+</button>
                            </td>
                            <td>
                                <button className="p-2 rounded-full text-white text-md bg-red-400" type="button">-</button>
                            </td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </section>
    )
}

export default TableAllocation;
