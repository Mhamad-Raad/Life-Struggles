import { FC } from 'react';

import Logo from '../../assets/logo2.png';

const Header: FC<{}> = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Header;
