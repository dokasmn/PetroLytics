// src/hooks/useLanguage.ts
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<string>('en');
    const [isEnglish, setIsEnglish] = useState<boolean>(false);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        setIsEnglish(newLanguage === 'en');
        localStorage.setItem('language', newLanguage); // Salvar no localStorage
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        setLanguage(savedLanguage);
        setIsEnglish(savedLanguage === 'en');
        }
    }, [i18n]);

    return { language, isEnglish, toggleLanguage };
};

export default useLanguage;
