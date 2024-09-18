import styled from "styled-components";

export const StyledTableWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    overflow-x: auto;
    margin: 4.5rem 10rem;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    font-family: Arial, sans-serif;
`;

export const StyledTh = styled.th`
    background-color: #038141;
    color: white;
    padding: 10px;
    text-align: center;
`;

export const StyledTd = styled.td`
    padding: 10px;
    text-align: center;
    border: 1px solid #dddddd;
    background-color: ${(props) => (props.theme?.index % 2 === 0 ? "#f2f2f2" : "#ffffff")};
    cursor: pointer;

    &:nth-child(odd) {
        background-color: #f2f2f2;
    }

    &:nth-child(even) {
        background-color: #ffffff;
    }
`;

export const StyledTableRow = styled.tr`
    &:hover {
        outline: 1px solid #038141;
        color: #038141;
    }
`;
