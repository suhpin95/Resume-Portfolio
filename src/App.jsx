import './styles/main.scss';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import BaseRoutes from './routes/BaseRoutes';
import Preloader from './components/UIElements/Preloader/Preloader';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
