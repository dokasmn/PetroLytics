
// styles
import { StyledHeader } from "./Header.styles"

// components
import Logo from "../Logo/Logo"
import LanguageOption from "../LanguageOption/LanguageOption"

const Header: React.FC = () => {
    return <>
        <StyledHeader>
            <Logo></Logo>
            <LanguageOption></LanguageOption>
        </StyledHeader>
    </>;
};

export default Header;