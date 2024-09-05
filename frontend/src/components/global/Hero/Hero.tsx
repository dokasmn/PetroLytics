import React from 'react';
import { StyledHeroBackground, StyledHeroDescription, StyledHeroImage, StyledHeroOverlay } from "./Hero.styles";

interface HeroProps {
    imageSrc: string;
    altText: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, altText, description }) => {
    return (
        <StyledHeroBackground>
            <StyledHeroImage src={imageSrc} alt={altText} />
            <StyledHeroOverlay />
            <StyledHeroDescription>{description}</StyledHeroDescription>
        </StyledHeroBackground>
    );
};

export default Hero;
