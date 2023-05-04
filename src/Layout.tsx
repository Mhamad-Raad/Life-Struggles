import { FC } from 'react';
import Header from './Components/Header/Header';
import App from './App';
import { Canvas } from '@react-three/fiber';

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
