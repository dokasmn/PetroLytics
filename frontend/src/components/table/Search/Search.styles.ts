import styled from 'styled-components';

export const StyledSearchBackground = styled.input`
    padding: 10px 30px 10px 15px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #555;
    border: 1px solid #c8e6c9;
    border-radius: 30px;
    background-color: #fff;
    width: 400px;

    &:focus {
        border-color: #038141;
        outline: none;
    }
`;

export const StyledSearchContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 450px;
    margin-right: 5rem;
`;

export const IconContainer = styled.div`
    width: 35px;
    height: 100%;
    background-color: #038141;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 0 0.2rem;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    ${StyledSearchBackground}:hover & {
        background-color: #388e3c;
    }
`;
