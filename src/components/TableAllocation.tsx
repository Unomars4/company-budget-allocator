import {useBudgetStore} from "../store";
import {DepartmentAllocation} from "../types";
import {getEventData, getTotalSpent} from "../utils";

const TableAllocation = () => {
    const departments: DepartmentAllocation[] = useBudgetStore((state) => state.data);
    const budget = useBudgetStore((state) => state.budget);
    const spent = getTotalSpent(useBudgetStore((state) => state.data));
    const remaining = budget - spent;
    const incrBy10: (index: number) => void = useBudgetStore((state) => state.incrDepBy10);
    const decrBy10: (index: number) => void = useBudgetStore((state) => state.decrDepBy10);
    const currency: string = useBudgetStore((state) => state.currency);
    const removeDept: (dept: string) => void = useBudgetStore((state) => state.removeDept);

    const handleIncr = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        if (remaining < 10) {
            window.alert(`Cannot exceed remaining budget ${currency}${remaining}`);
            return;
        }
        const index = Number(getEventData(event, "index"));
        incrBy10(index);
    }

    const handleDecr = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const index = Number(getEventData(event, "index"));
        decrBy10(index);
    }

    const handleDelete = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const name = String(getEventData(event, "name"));
        removeDept(name);
    }

    return (
        <section className="mb-3">
            <table className="w-full text-left">
                <thead className="text-sm border-b-2 border-r-2 border-slate-100 bg-slate-100">
                    <tr>
                        <th className="py-2">Department</th>
                        <th>Allocated Budget</th>
                        <th>Increase by 10</th>
                        <th>Decrease by 10</th>
                        <th>Delete Department</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((d: DepartmentAllocation, i) => (
                        <tr className="odd:bg-white even:bg-slate-50" key={d.name}>
                            <td>{d.name}</td>
                            <td>{currency}{d.amount}</td>
                            <td>
                                <button className="p-1 rounded-full text-white text-center text-2xl bg-green-400" type="button" data-index={i} data-name={d.name} onClick={handleIncr}>+</button>
                            </td>
                            <td>
                                <button className="p-1 rounded-full text-white text-center text-2xl bg-red-400" type="button" data-index={i} data-name={d.name} onClick={handleDecr}>-</button>
                            </td>
                            <td>
                                <button className="p-1 rounded-full text-white text-center text-2xl bg-black" type="button" data-name={d.name} onClick={handleDelete}>x</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default TableAllocation;
