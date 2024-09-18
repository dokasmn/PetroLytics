// styles
import { StyledTable, StyledTd, StyledTh, StyledTableWrapper, StyledTableRow } from './Table.styles';

const Table: React.FC = () => {
    return (
        <StyledTableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>OIL WELL</StyledTh>
                        <StyledTh>START</StyledTh>
                        <StyledTh>FINISH</StyledTh>
                        <StyledTh>CONCLUSION</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(8)].map((_, i) => (
                        <StyledTableRow key={i}>
                            <StyledTd>1-AA-1-RN</StyledTd>
                            <StyledTd>21/01/1984</StyledTd>
                            <StyledTd>29/01/1984</StyledTd>
                            <StyledTd>29/01/1984</StyledTd>
                        </StyledTableRow>
                    ))}
                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    );
};

export default Table;
