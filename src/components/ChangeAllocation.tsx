import {useBudgetStore} from "../store";
import {DepartmentAllocation} from "../types";
import {getTotalSpent} from "../utils";

const ChangeAllocation = () => {
    const departments: DepartmentAllocation[] = useBudgetStore((state) => state.data);
    const currency: string = useBudgetStore((state) => state.currency);
    const budget = useBudgetStore((state) => state.budget);
    const spent = getTotalSpent(useBudgetStore((state) => state.data));
    const remaining = budget - spent;
    const updateDepAllocation = useBudgetStore((state) => state.updateDepAllocation);

    const saveAllocation = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const {department, allocation, amount} = event.target;

        if (Number(amount.value) > remaining) {
            window.alert(`The amount cannot exceed remaining funds ${currency}${remaining}`);
            return;
        }
        updateDepAllocation(department.value, allocation.value, amount.value);
    }

    return (
        <section>
            <form onSubmit={saveAllocation} className="flex flex-row justify-evenly">
                <div className="bg-slate-200 text-sm p-2 rounded-md">
                    <label htmlFor="department">Department</label>
                    <input id="department" name="department" type="text" list="departments" />
                    <datalist id="departments">
                        <select>
                            {departments ? departments.map(d => (
                                <option value={d.name}></option>
                            )) : null}
                        </select>
                    </datalist>
                </div>
                <div className="bg-slate-200 text-sm p-2 rounded-md">
                    <label htmlFor="allocation">Allocation</label>
                    <input id="allocation" name="allocation" type="text" list="allocations" />
                    <datalist id="allocations">
                        <select>
                            <option value="Add"></option>
                            <option value="Remove"></option>
                        </select>
                    </datalist>
                </div>
                <div className="bg-slate-200 text-sm p-2 rounded-md">
                    {currency} <input min={1} id="amount" name="amount" type="number" autoSave="false" autoComplete="false" />
                </div>
                <button className="p-2 rounded-xl text-sm bg-blue-400 text-white" type="submit">Save</button>
            </form>
        </section>
    );
}

export default ChangeAllocation;
