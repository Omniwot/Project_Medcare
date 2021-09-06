import React, {Component} from "react";
import './styles.scss';
import { Link, withRouter } from "react-router-dom";
import Buttons from './../forms/Button';
import { signInWithGoogle } from "../../firebase/utils";

const SignIn =props=>{

     const handleSubmit=async e =>{
        e.preventDefault();
        
    }

    
    return(
        <div className="signin">
            <div className="wrap">
                <h2>
                    Login
                </h2>

                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <div className="socialSignIn">
                            <div className="row">
                               <Buttons onClick={signInWithGoogle}>
                                   Sign in with Google
                               </Buttons>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;