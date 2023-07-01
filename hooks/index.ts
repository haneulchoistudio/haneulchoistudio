import { __useInput__ } from './use-input';
import { __useLanguage__ } from './use-language';
import { __useTheme__ } from './use-theme';

class Hook {
    public static useInput: <
        T extends string = string,
        E extends [
            HTMLInputElement,
            HTMLTextAreaElement
        ][number] = HTMLInputElement
    >(
        value: T,
        option?: { placeholder?: string }
    ) => {
        value: T | '';
        onChange: (e: React.ChangeEvent<E>) => void;
        onReset: () => void;
        placeholder: string;
    };

    public static useTheme: typeof __useTheme__;
    public static useLanguage: typeof __useLanguage__;
}

Hook.useInput = __useInput__;
export const useInput = Hook.useInput;

Hook.useLanguage = __useLanguage__;
export const useLanguage = Hook.useLanguage;

Hook.useTheme = __useTheme__;
export const useTheme = Hook.useTheme;
