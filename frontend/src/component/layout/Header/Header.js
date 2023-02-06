import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import logo from '../../../images/logo.png';

const options = {
  burgerColor: '#eb4034',
  burgerColorHover: '#a62d24',
  logo,
  logowidth: '60vmax',
  navColor1: 'white',
  logoHoverSize: '10px',
  logoHoverColor: '#eb4034',
  link1Text: 'Home',
  link2Text: 'Product',
  link3Text: 'Contact',
  link4Text: 'About',
  link1Url: '/',
  link2Url: '/product',
  link3Url: '/contact',
  link4Url: '/about',
  link1Size: '1.2vmax',
  link1Color: 'rgba(35, 35, 35,0.8)',
  nav1justifyContent: 'flex-end',
  nav2justifyContent: 'flex-end',
  nav3justifyContent: 'flex-start',
  link1ColorHover: '#eb4034',
  link2ColorHover: '#eb4034',
  link3ColorHover: '#eb4034',
  link4ColorHover: '#eb4034',
  link2Margin: '1vmax',
  link3Margin: '0',
  link4Margin: '1vmax',
  profileIconColor: 'rgba(35,35,35,0.8)',
  searchIconColor: 'rgba(35,35,35,0.8)',
  notificationIconColor: 'rgba(35, 35, 35,0.8)',
  profileIconColorHover: '#eb4034',
  searchIconColorHover: '#eb4034',
  notificationIconColorHover: '#eb4034',
  cartIconMargin: '1vmax',
};
const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
