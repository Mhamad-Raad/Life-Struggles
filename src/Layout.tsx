import { FC } from 'react';
import Header from './Components/Header/Header';
import App from './App';
import { Canvas } from '@react-three/fiber';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoadPage from './Components/LoadPage/LoadPage';

const Layout: FC<{}> = () => {
  return (
    <>
      <LoadPage />
      <Header />
      <Canvas>
        <App />
      </Canvas>
    </>
  );
};

export default Layout;
