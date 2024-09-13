import styled from 'styled-components';

export const StyledNavbarBackground = styled.div`
    background-color: #E4E3E3;
    border-radius: 30px;
    width: 500px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem 0rem;
    position: relative;
    cursor: pointer;
    margin: 7rem 0 2rem 0;
`;

export const StyledNavbarPageOption = styled.button<{ page: boolean }>`
    background-color: ${props => (props.page ? '#038141' : 'transparent')};
    border: none;
    transition: color 1s ease;
    padding: 0.5rem 2rem;
    border-radius: 40px;
    color: ${props => (props.page ? '#fff' : '#A0A0A0')};
    font-weight: 500;
    cursor: pointer;
`;

export const StyledNavbarSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;