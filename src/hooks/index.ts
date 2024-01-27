import {useState} from "react";

export const useInputField = (type: string) => {
    const [value, setValue] = useState<string | number | undefined>();

    const onChange = (event: Event) => {
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
