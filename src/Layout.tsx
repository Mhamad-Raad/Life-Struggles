import { FC } from 'react';
import Header from './Components/Header/Header';
import App from './App';

const Layout: FC<{}> = () => {
  return (
    <>
      <Header />
      <App />
    </>
  );
};

export default Layout;
