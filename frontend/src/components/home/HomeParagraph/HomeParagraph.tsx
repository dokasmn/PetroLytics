import { StyledParagraphBackground, StyledParagraph } from './HomeParagraph.styles'

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>
        <StyledParagraphBackground>
            <StyledParagraph>{children}</StyledParagraph>
        </StyledParagraphBackground>
    </>
};

export default Paragraph;