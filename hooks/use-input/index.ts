import { useState } from 'react';

type EmptyString = `${''}`;

export function __useInput__<
    T extends string = string,
    E extends [HTMLInputElement, HTMLTextAreaElement][number] = HTMLInputElement
>(value: T, option?: { placeholder?: string }) {
    const [_value, setValue] = useState<T | EmptyString>(value);

    function onChange(e: React.ChangeEvent<E>): void {
        setValue(e.target.value as T);
    }

    function onReset() {
        setValue('');
    }

    return {
        value: _value,
        onReset,
        onChange,
        placeholder: option && option.placeholder ? option.placeholder : null,
    };
}
