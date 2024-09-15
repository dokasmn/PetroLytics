import React, { createContext, useContext, ReactNode } from 'react';
import useLanguage from '../hooks/useLanguage';

interface LanguageContextType {
    language: string;
    isEnglish: boolean;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { language, isEnglish, toggleLanguage } = useLanguage();

    return (
        <LanguageContext.Provider value={{ language, isEnglish, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};
