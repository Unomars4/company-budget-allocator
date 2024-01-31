import {useState} from "react";
import {Budget, Department, InputField} from "../types";

export const useInputField = (type: string): InputField => {
    const [value, setValue] = useState<string | number | undefined>();

    const onChange = (event: React.SyntheticEvent) => {
        if (type === 'number') {
            setValue(Number(event.target.value));
            return;
        }
        setValue(event.target.value);
    };

    return {
        type,
        onChange,
        value
    }
}

