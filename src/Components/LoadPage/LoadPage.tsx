import { FC, useState, useEffect } from 'react';

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
    <div className={`loader ${loaded && 'remove'}`}>
      <h1>There is always HOPE</h1>
      <h2>Don't Give up</h2>
      <div className='loader__loading'>
        <div />
      </div>
    </div>
  );
};

export default LoadPage;
