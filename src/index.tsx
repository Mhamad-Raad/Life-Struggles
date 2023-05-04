import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from './Layout';

import './index.scss';

const portalDiv = document.getElementById('root')!;
const root = ReactDOM.createRoot(portalDiv);
root.render(<Layout />);
