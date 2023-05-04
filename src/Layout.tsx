import { FC } from 'react';
import Header from './Components/Header/Header';
import App from './App';
import { Canvas } from '@react-three/fiber';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout: FC<{}> = () => {
  return (
    <>
      <Header />
      <Canvas>
        <App />
      </Canvas>
    </>
  );
};

export default Layout;
