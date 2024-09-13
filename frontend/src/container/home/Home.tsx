// layout
import Layout from '../layout/Layout'

// components
import PageTitle from '../../components/global/PageTitle';
import About from '../../components/home/About';


const Home: React.FC = () => {
    return <>
        <Layout>
            <PageTitle>ABOUT THIS WEBSITE</PageTitle>
            <About />
        </Layout>
    </>;
};

export default Home;
