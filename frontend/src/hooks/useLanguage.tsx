
// src/hooks/useLanguage.ts
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
    const { i18n } = useTranslation(); // useTranslation traz o i18n inicializado corretamente
    const [language, setLanguage] = useState<string>('pt');
    const [isEnglish, setIsEnglish] = useState<boolean>(false);

    const toggleLanguage = () => {
        const newLanguage = language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLanguage); // Usar i18n.changeLanguage aqui
        setLanguage(newLanguage);
        setIsEnglish(newLanguage === 'pt');
        localStorage.setItem('language', newLanguage);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage).then(() => {
                setLanguage(savedLanguage);
                setIsEnglish(savedLanguage === 'pt');
            }).catch((err) => {
                console.error("Error changing language:", err);
            });
        }
    }, [i18n]);

    return { language, isEnglish, toggleLanguage };
};

export default useLanguage;
