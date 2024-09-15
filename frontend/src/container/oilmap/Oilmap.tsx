// layout
import Layout from '../layout/Layout'

// styles
import { StyledFilterWrapper } from '../../styles/GlobalStyles';

// components
import PageTitle from '../../components/global/PageTitle';
import Select  from '../../components/global/Select';

const options = ['All oil wells']

const Oilmap: React.FC = () => {
    return <>
        <Layout>
            <PageTitle>SEE OIL WELLS ON THE MAP</PageTitle>
            <StyledFilterWrapper>
                <Select options={options}></Select>
            </StyledFilterWrapper>
        </Layout>
    </>;
};

export default Oilmap;