import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './LoadPage.scss';

const LoadPage: FC<{}> = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 6 }}
      className={`loader ${loaded && 'remove'}`}
    >
      <h1>There is always HOPE</h1>
      <h2>Don't Give up</h2>
      <div className='loader__loading'>
        <div />
      </div>
    </motion.div>
  );
};

export default LoadPage;
