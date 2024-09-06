// styles
import { StyledLogo, StyledLogoText } from './Logo.styles'

// assets
import logo from "../../../assets/imgs/enterprise_logo.svg";


const Logo: React.FC = () => {
    return <>
        <StyledLogo>
            <img src={logo} alt="Enterprise Logo" />
            <StyledLogoText color='#fff'>PETROBRAS</StyledLogoText>
        </StyledLogo>
    </>
};

export default Logo;