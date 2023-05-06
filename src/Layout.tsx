import { FC } from 'react';
import Header from './Components/Header/Header';
import App from './App';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoadPage from './Components/LoadPage/LoadPage';

const Layout: FC<{}> = () => {
  return (
    <>
      <LoadPage />
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 6 }}
        className='content'>
        <Canvas>
          <App />
        </Canvas>
      </motion.div>
    </>
  );
};

export default Layout;
