import React, { useState } from 'react';

// styles
import { StyledLanguageOption, ToggleBall, ToggleContainer, ToggleOption } from './LanguageOption.styles';

const LanguageOption: React.FC = () => {
    const [isEnglish, setIsEnglish] = useState(false);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

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
