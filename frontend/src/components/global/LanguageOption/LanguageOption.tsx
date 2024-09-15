// src/components/LanguageOption.tsx
import React from 'react';
import { useLanguageContext } from '../../../contexts/LanguageContext';

// styles
import { StyledLanguageOption, ToggleBall, ToggleContainer, ToggleOption } from './LanguageOption.styles';

const LanguageOption: React.FC = () => {
    const { language, isEnglish, toggleLanguage } = useLanguageContext();

    return (
        <StyledLanguageOption onClick={toggleLanguage}>
            <ToggleOption $active={!isEnglish}>PT</ToggleOption>
            <ToggleOption $active={isEnglish}>EN</ToggleOption>
            <ToggleContainer>
                <ToggleBall $isActive={isEnglish} />
            </ToggleContainer>
        </StyledLanguageOption>
    );
};

export default LanguageOption;
