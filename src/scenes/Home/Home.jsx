import RootLayout from '../../layouts/RootLayout/RootLayout';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import FocusAreas from './FocusAreas/FocusAreas';
import Hero from './Hero/Hero';
import Metrics from './Metrics/Metrics';
import SelectedWork from './SelectedWork/SelectedWork';

const Home = () => {
  return (
    <RootLayout
      title="Suhas Pindiproli - Distributed Systems & AI"
      description="Senior software engineer building reliable distributed systems, identity platforms, and AI infrastructure."
    >
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
