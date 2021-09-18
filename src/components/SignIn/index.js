import React, {useState} from "react";
import './styles.scss';
import { Link, withRouter } from "react-router-dom";
import Buttons1 from './../forms/Button1';
import { signInWithGoogle, auth } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";

const SignIn =props=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
     
    const resetForm=()=>{
        setEmail('');
        setPassword('');
    };

     const handleSubmit=async e =>{
        e.preventDefault();

        try{

            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
        } catch(err){

        }
    }

    const configAuthWrapper={
        headline:'Login'
    };
    
    return(
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type ="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e=>setEmail(e.target.value)}
                        />

                        <FormInput
                            type ="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange={e=>setPassword(e.target.value)}
                        />
                        <Buttons1 type="submit">
                            Login
                        </Buttons1>

                        <div className="socialSignIn">
                            <div className="row">
                               <Buttons1 onClick={signInWithGoogle}>
                                   Sign in with Google
                               </Buttons1>
                            </div>

                        </div>
                        <div className="links">
                            <Link to="/recovery">
                                Reset Password
                            </Link>
                        </div>
                    </form>
                </div>
            </AuthWrapper>
    );
};

export default SignIn;