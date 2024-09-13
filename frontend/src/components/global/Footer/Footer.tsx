import { StyledFooterContainer, StyledFooterItemsContainer, StyledFooterItem } from './Footer.styles'

const Footer: React.FC = () => {
    return <StyledFooterContainer>
        <StyledFooterItemsContainer>
            <StyledFooterItem>Cookie Definition</StyledFooterItem>
            <StyledFooterItem>Privacy and Personal Datas</StyledFooterItem>
            <StyledFooterItem>Accessibility</StyledFooterItem>
        </StyledFooterItemsContainer>
        <StyledFooterItem>©Copyright PetroLytics 2024. All rights reserved.</StyledFooterItem>
    </StyledFooterContainer>;
};

export default Footer;