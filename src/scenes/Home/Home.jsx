import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';

const Home = () => {
  return (
    <RootLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>

      <IntroSection />
    </RootLayout>
  );
};

export default Home;
