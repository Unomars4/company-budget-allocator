import {useBudgetStore} from "../store";
import {InputField} from "../types";

export const useInputField = (type: string): InputField => {

    const onChange = (event: React.SyntheticEvent) => {

        if (typeof value === 'number') {
            return;
        }
    };

    return {
        type,
        onChange,
        value
    }
}

