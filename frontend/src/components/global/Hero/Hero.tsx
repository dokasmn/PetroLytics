import { StyledHeroBackground, StyledHeroDescription } from "./Hero.styles"

const Hero: React.FC = () => {
    return <StyledHeroBackground>
        <img src="#" alt="enterprise logo" />
        <StyledHeroDescription color='#fff'>Meu texto</StyledHeroDescription>
    </StyledHeroBackground>;
};

export default Hero;