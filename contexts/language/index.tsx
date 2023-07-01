import { createContext, useEffect, useState } from 'react';
import { LocalStorageContextProps } from 'types';

const Languages = ['en', 'ko', 'jp'] as const;
type Language = (typeof Languages)[number];

const LanguageContext = createContext<{
    language: Language;
    onSwap: (_language?: Language) => void;
}>({ language: 'en', onSwap: null });

const LanguageContextProvider = ({
    children,
    localStorageKey = 'language',
}: LocalStorageContextProps) => {
    const [language, setLanguage] = useState<Language>('en');

    function onSwap(_language: Language) {
        localStorage.setItem(localStorageKey, _language);
        setLanguage(_language);
    }

    function loadLanguage() {
        if (!localStorage.getItem(localStorageKey)) {
            localStorage.setItem(localStorageKey, 'en');
            setLanguage('en');
        } else {
            setLanguage(localStorage.getItem(localStorageKey) as Language);
        }
    }

    useEffect(() => {
        loadLanguage();
    }, []);

    return (
        <LanguageContext.Provider value={{ language, onSwap }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageContextProvider };
