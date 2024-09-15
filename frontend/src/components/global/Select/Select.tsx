import { StyledSelectBackground, StylediSelectIconContainer, ArrowContainer } from './Select.styles';

interface SelectProps {
    options: string[]
}

const Select: React.FC<SelectProps> = ({ options }) => {
    return (
        <StylediSelectIconContainer>
            <StyledSelectBackground>
            {options.map((option) => (
                <option>{option}</option>
            ))}
            </StyledSelectBackground>
            <ArrowContainer />
        </StylediSelectIconContainer>
    );
};

export default Select;
