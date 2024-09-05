import styled from 'styled-components';


export const StyledHeroBackground = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledHeroDescription = styled.p<{ color:string }>`
    position: absolute;
    bottom: 5rem;
    right: 10rem;
    color: ${props => props.color};
`;