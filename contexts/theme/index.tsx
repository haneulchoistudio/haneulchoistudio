import { createContext, useEffect, useState } from 'react';
import type { LocalStorageContextProps, ThemeOption } from 'types';

const ThemeContext = createContext<{
    theme: ThemeOption;
    onSwitch: (_theme?: ThemeOption) => void;
}>({ theme: 'light', onSwitch: null });

const ThemeContextProvider = ({
    children,
    localStorageKey = 'theme',
}: LocalStorageContextProps) => {
    const [theme, setTheme] = useState<ThemeOption>('light');

    function onSwitch(_theme: ThemeOption) {
        localStorage.setItem(localStorageKey, _theme);
        setTheme(_theme);
    }

    function loadTheme() {
        if (!localStorage.getItem(localStorageKey)) {
            localStorage.setItem(localStorageKey, 'light');
            setTheme('light');
        } else {
            setTheme(localStorage.getItem(localStorageKey) as ThemeOption);
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, onSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
