import {Department} from "../types";

const TableAllocation = ({departments}: {departments: Department[] | undefined}) => {
    return (
        <section className="mb-3">
            <table className="w-full text-left">
                <thead className="text-sm border-b-2 border-r-2 border-slate-100 bg-slate-100">
                    <tr>
                        <th className="py-2">Department</th>
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
                                <button className="p-1 rounded-full text-white text-center text-2xl bg-green-400" type="button">+</button>
                            </td>
                            <td>
                                <button className="p-1 rounded-full text-white text-center text-2xl bg-red-400" type="button">-</button>
                            </td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </section>
    )
}

export default TableAllocation;
