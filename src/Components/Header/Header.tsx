import { FC } from 'react';

import Logo from '../../assets/logo2.png';

import './Header.scss';

const Header: FC<{}> = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='logo' className='header__logo' />
    </header>
  );
};

export default Header;
