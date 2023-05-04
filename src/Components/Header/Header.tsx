import { FC } from 'react';

import Logo from '../../assets/logo2.png';

import './Header.scss';

const Header: FC<{}> = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Header;
