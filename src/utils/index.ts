import {DepartmentAllocation} from "../types";

export const getEventData = (event: React.SyntheticEvent, type: string): string | number | undefined => {
    if (type === "name") {
        return event.target.dataset.name;
    } else if (type === "index") {
        return event.target.dataset.index;
    } else {
        return;
    }
}

export const getTotalSpent = (data: DepartmentAllocation[]): number => {
    return data.map(d => d.amount).reduce((prev, curr) => prev + curr, 0);
}
