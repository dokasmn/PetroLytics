// styles
import { StyledLogo } from './Logo.styles'

// assets
import logo from "../../../assets/imgs/enterprise_logo.svg";


const Logo: React.FC = () => {
    return <>
        <StyledLogo>
            <img src={logo} alt="Enterprise Logo" />
            <h3>PETROBRAS</h3>
        </StyledLogo>;
    </>
};

export default Logo;