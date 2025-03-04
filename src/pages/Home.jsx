import Layout from '../components/Layout';
import ProfileSection from '../components/ProfileSection';
import SocialIcons from '../components/SocialIcons';
import LinkButtons from '../components/LinkButtons';
import CertificationsSection from '../components/certifications/CertificationsSection';
import CertModal from '../components/certifications/modals/CertModal';

const Home = () => {
  return (
    <Layout>
      <CertModal />
      <ProfileSection />
      <SocialIcons />
      <LinkButtons />
      <CertificationsSection />
    </Layout>
  );
};

export default Home; 