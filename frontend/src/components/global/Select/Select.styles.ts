import styled from 'styled-components';

export const StyledSelectBackground = styled.select`
    width: 100%;
    padding: 10px 40px 10px 15px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #555;
    border: 2px solid #c8e6c9;
    border-radius: 30px;
    background-color: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;

    &:focus {
        border-color: #4caf50;
        outline: none;
    }
`;

export const StylediSelectIconContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 250px;
`;

export const ArrowContainer = styled.div`
    width: 35px;
    height: 100%;
    background-color: #4caf50;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    &::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid white;
    }

    ${StyledSelectBackground}:hover & {
        background-color: #388e3c;
    }
`;
