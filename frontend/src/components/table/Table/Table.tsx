// styles
import { StyledTable, StyledTd, StyledTh, StyledTableWrapper } from './Table.styles';

// hooks
import { useTranslation } from 'react-i18next';

const Table: React.FC = () => {

    const { t } = useTranslation()

    return (
        <StyledTableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>{t('dashboard.table.oilWell')}</StyledTh>
                        <StyledTh>{t('dashboard.table.start')}</StyledTh>
                        <StyledTh>{t('dashboard.table.finish')}</StyledTh>
                        <StyledTh>{t('dashboard.table.conclusion')}</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(8)].map((_, i) => (
                        <tr key={i}>
                            <StyledTd>1-AA-1-RN</StyledTd>
                            <StyledTd>21/01/1984</StyledTd>
                            <StyledTd>29/01/1984</StyledTd>
                            <StyledTd>29/01/1984</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    );
};

export default Table;
