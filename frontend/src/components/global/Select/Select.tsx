import { StyledSelectBackground, StylediSelectIconContainer, ArrowContainer } from './Select.styles';

const Select: React.FC = () => {
    return (
        <StylediSelectIconContainer>
            <StyledSelectBackground>
            <option>Select a publication date</option>
            </StyledSelectBackground>
            <ArrowContainer />
        </StylediSelectIconContainer>
    );
};

export default Select;
