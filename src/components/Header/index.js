import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
import { useHistory } from "react-router-dom";


const Header= props => {
    const {currentUser}=props;

    const history = useHistory();

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
               <h2>Phigent</h2> 
               <h4>
                 Search, schedule, price your medical services
               </h4>
             </div>

            </div>
            <div className="callToActions">
                {currentUser && (
                    <ul>
                     <li>
                        <Link to="/dashboard">
                            My Account
                        </Link>
                     </li>
                     <li>
                       <span onClick={()=> {auth.signOut();
                    history.push("/");}}>
                            Logout
                        </span>  
                     </li>
                     
                    </ul>
            
                )}
                {!currentUser && (
                <ul>
                    <li>
                        <Link to="/registration">
                        Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                        Login
                        </Link>
                    </li>
                </ul>
                )}
            </div>
        </div>
           
        </header>
    );
};

Header.defaultProps={
    currentUser:null
}

const mapStateToProps= ({user})=>({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);