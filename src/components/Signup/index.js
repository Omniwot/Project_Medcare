import React, {useState} from 'react';
import './styles.scss';

import {auth, handleUserProfile} from './../../firebase/utils';

import FormInput from '../forms/FormInput';
import  Buttons1 from '../forms/Button1';



const Signup = props=>{
    
    const [displayName, setDisplayName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [errors,setErrors]=useState([]);
    const [check,setCheck]=useState('');

    const reset=()=>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
        setCheck(false);
    }

    const handleFormSubmit= async event=>{
        
        event.preventDefault();
        

        if(password!== confirmPassword){
            const err=['Passwords Don\'t match'];
            setErrors(err);
            return;
        }
        
        try{

            const {user}=await auth.createUserWithEmailAndPassword(email, password);
            
            await handleUserProfile(user, {displayName});

            reset();


        } catch(err){

        }
    }

        

        return(
            <div className="signup">
                <div className="wrap">
                    <h2>
                        Signup
                    </h2>
                    {errors.length>0 &&(
                        <ul>
                            {errors.map((err,index)=>{
                                return(
                                    <li key={index}>
                                        {err}
                                    </li>
                                    )
                            })}
                        </ul>
                    )}
                    <form onSubmit={handleFormSubmit}>

                        <FormInput
                         type="text"
                         name="displayName"
                         value={displayName}
                         placeholder="Full name"
                         handleChange={e=>setDisplayName(e.target.value)}
                        />

                        <FormInput
                         type="email"
                         name="email"
                         value={email}
                         placeholder="Email"
                         handleChange={e=>setEmail(e.target.value)}
                        />

                        <FormInput
                         type="password"
                         name="password"
                         value={password}
                         placeholder="Password"
                         handleChange={e=>setPassword(e.target.value)}
                        />

                        <FormInput
                         type="password"
                         name="confirmPassword"
                         value={confirmPassword}
                         placeholder="Confirm Password"
                         handleChange={e=>setConfirmPassword(e.target.value)}
                        />
                           <div className="tnccheck">
                            <input
                             type="checkbox"
                                className="tnc"
                                name="tnc"
                                value="tnc"
                                handleChange={e=>setCheck(e.target.value)}
                                />
                                  By signing into the Phigent account, I agree to the <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>. 
                            </div>
                        <Buttons1 type="submit" className="btn-info">
                            Register
                        </Buttons1>
                    </form>
                </div>
            </div>
        )
    }

export default Signup;