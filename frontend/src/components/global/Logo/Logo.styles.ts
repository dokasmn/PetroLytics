import styled from 'styled-components';

export const StyledLogo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 2rem;
`;

export const StyledLogoText = styled.h3<{ color:string }>`
    font-weight: 600;
    color: ${props => props.color};
    margin: 1rem;
`;