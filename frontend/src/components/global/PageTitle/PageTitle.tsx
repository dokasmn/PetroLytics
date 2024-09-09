import { StyledTitle, StyledTitleUnderline, StyledTitleBackground } from './PageTitle.styles'

const PageTitle : React.FC<{ children: string }> = ({ children }) => {
    return <StyledTitleBackground>
        <StyledTitle>{children}</StyledTitle>
        <StyledTitleUnderline></StyledTitleUnderline>
    </StyledTitleBackground>;
};

export default PageTitle;