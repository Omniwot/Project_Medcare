import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        © Phigent 2021
      </div>
      <div className="privacy">
        <a href="/privacy" target="_blank">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;