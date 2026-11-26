import RootLayout from '../../layouts/RootLayout/RootLayout';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import FocusAreas from './FocusAreas/FocusAreas';
import Hero from './Hero/Hero';
import Metrics from './Metrics/Metrics';
import SelectedWork from './SelectedWork/SelectedWork';

const Home = () => {
  return (
    <RootLayout>
      <Hero />
      <Metrics />
      <FocusAreas />
      <SelectedWork />
      <Experience />
      <Contact />
    </RootLayout>
  );
};

export default Home;
