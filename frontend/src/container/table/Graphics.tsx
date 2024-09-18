// layout
import Layout from '../layout/Layout'

// styles
import { StyledFilterWrapper } from '../../styles/GlobalStyles';

// components
import PageTitle from '../../components/global/PageTitle';
// import Select from '../../components/global/Select'
import Search from '../../components/table/Search'
import Table from '../../components/table/Table';

<<<<<<< HEAD
// const options = ['Select publication date']
=======
// hooks
import { useTranslation } from 'react-i18next';

>>>>>>> 7b2f84ffa671d1164e289af6a65e4e644972570d

const Oilmap: React.FC = () => {

    const options = ['Select publication date']
    const { t } = useTranslation();
    
    return <>
        <Layout>
            <PageTitle>{t('dashboard.title')}</PageTitle>
            <StyledFilterWrapper>
                <Search></Search>
                {/* <Select options={options}></Select> */}
            </StyledFilterWrapper>
            <Table></Table>
        </Layout>
    </>;
};

export default Oilmap;