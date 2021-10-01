import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="tm">
        © Phigent 2021
        </div>
      <div className="tou">
        <a className="tou" href="/terms" target="_blank">
          Terms of Use
       </a>
      </div>
      <div className="privacy">
        <a href="/privacy" target="_blank">
          Privacy Policy
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;