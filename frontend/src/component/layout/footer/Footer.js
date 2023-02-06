import React from 'react';
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP$</h4>
        <p>Download App For Android And Ios Mobile Phone</p>
        <img src={playStore} alt="playstore"></img>
        <img src={appStore} alt="Appstore"></img>
      </div>

      <div className="midFooter">
        <h1>HealWeb.</h1>
        <p>high Quality Is our first priority</p>

        <p>Copyrights 2023 &copy; MeVivek</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/_.viivekk._">Instagram</a>
        <a href="http://linkedin.com/vivek-limbachiya">linkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
