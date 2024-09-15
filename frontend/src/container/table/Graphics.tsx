// layout
import Layout from '../layout/Layout'

// styles
import { StyledFilterWrapper } from '../../styles/GlobalStyles';

// components
import PageTitle from '../../components/global/PageTitle';
import Select from '../../components/global/Select'
import Search from '../../components/table/Search'
import Table from '../../components/table/Table';

const options = ['Select publication date']

const Oilmap: React.FC = () => {
    return <>
        <Layout>
            <PageTitle>SEE INFORMATION ABOUT OIL WELLS</PageTitle>
            <StyledFilterWrapper>
                <Search></Search>
                <Select options={options}></Select>
            </StyledFilterWrapper>
            <Table></Table>
        </Layout>
    </>;
};

export default Oilmap;