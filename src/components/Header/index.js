import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';

const Header= props => {
    return(
        <header className="header">
             
        <div className="wrap">
            <div className="head">
             <div className="logo">
              <img src={Logo} alt="Medpedia logo" />
             </div>
             <div className="right">
               <h2>Medpedia</h2> 
               <h4>
                 Search, schedule, price your medical services
               </h4>
             </div>

            </div>
            
        </div>
           
        </header>
    );
};
export default Header;