import {Department} from "../types";

const ChangeAllocation = ({departments}: {departments: Department[] | undefined}) => {

    const saveAllocation = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <section>
            <form className="flex flex-row justify-evenly">
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
                    <label>Allocation</label>
                    <input id="allocation" name="allocation" type="text" list="allocations" />
                    <datalist id="allocations">
                        <select>
                            <option value="Add"></option>
                        </select>
                    </datalist>
                </div>
                <button onClick={saveAllocation} className="p-2 rounded-xl text-sm bg-blue-400 font-white" type="submit">Save</button>
            </form>
        </section>
    );
}

export default ChangeAllocation;
