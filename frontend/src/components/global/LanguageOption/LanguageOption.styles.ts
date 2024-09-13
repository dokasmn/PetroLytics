import styled from 'styled-components';

export const StyledLanguageOption = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    cursor: pointer;
    margin-right: 2rem;
`;

export const ToggleOption = styled.h4<{ $active: boolean }>`
    margin: 0;
    font-size: 14px;
    color: ${props => (props.$active ? 'green' : '#fff')};
    transition: color 0.5s ease;
    width: 40px;
    text-align: center;
    z-index: 10;
`;

export const ToggleContainer = styled.div`
    position: absolute;
    width: 80px;
    height: 38px;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 30px;
    padding: 0;
`;

export const ToggleBall = styled.div<{ $isActive: boolean }>`
    position: absolute;
    width: 40px;
    height: 38px;
    background-color: #fff;
    border-radius: 50%;
    top: 0px;
    left: ${props => (props.$isActive ? '40px' : '0px')};
    transition: left 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
