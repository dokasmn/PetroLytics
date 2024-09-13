import styled from 'styled-components';

export const StyledHeroBackground = styled.div`
    height: 100vh;
    position: relative;
    top: 0;
    z-index: 1;
    overflow: hidden;
`;

export const StyledHeroImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
    position: absolute;
`;

export const StyledHeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const StyledHeroDescription = styled.p`
    position: absolute;
    bottom: 3rem;
    right: 8rem;
    z-index: 2;
    color: #fff;
    font-size: 20px;
    max-width: 30rem;
    padding: 1rem;
    margin-bottom: 4rem;
    border-radius: 5px;
    text-align: center;
`;
