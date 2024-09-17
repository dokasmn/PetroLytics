// hooks
import { useTranslation } from 'react-i18next';
// layout
import Layout from '../layout/Layout';

// components
import PageTitle from '../../components/global/PageTitle';
import About from '../../components/home/About';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <PageTitle>{t('home.title')}</PageTitle>
            <About />
        </Layout>
    );
};

export default Home;
