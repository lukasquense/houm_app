import React from 'react';
import houm_logo from '../../assets/imgs/houm_icon.png';
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background:'white', position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo">
          <img className='header-logo' src={houm_logo}></img>
        </div>
    </Header>
  );
};

export default AppHeader;
