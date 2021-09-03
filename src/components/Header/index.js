import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';
import { Link, useLocation  } from 'react-router-dom';

const Header= props => {
    return(
        <header className="header">
             
        <div className="wrap">
            <div className="head">
             <div className="logo">
               <Link to="/">
              <img src={Logo} alt="Medpedia logo" />
              </Link>
             </div>
             <div className="right">
               <h2>Medpedia</h2> 
               <h4>
                 Search, schedule, price your medical services
               </h4>
             </div>

            </div>
            <div className="callToActions">
                <ul>
                    <li>
                        <Link to="/registration">
                        Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
           
        </header>
    );
};
export default Header;