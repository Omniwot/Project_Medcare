import React, {Component, useState} from "react";
import { withRouter } from "react-router";
import './styles.scss'

import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button1 from "../forms/Button1"

import { auth } from "../../firebase/utils";

const EmailPassword =props=>{

    const [email,setEmail]= useState('');
    const [errors, setErrors]= useState([]);

    const handleSubmit=async (e)=>{
        e.preventDefault(); 

        try{

            const config={
                url: 'http://localhost:3000/login'
            }

            await auth.sendPasswordResetEmail(email,config)
            .then(()=>{
                console.log("Password Reset");
                props.history.push('/login');
            })
            .catch((err1)=>{
                const err = ['Email not found. Please try again.']
                setErrors(err1);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    const configAuthWrapper={
        headline: 'Email Password'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
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

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange= {e=>setEmail(e.target.value)}
                        />
                        <Button1 type="submit">
                            Email Password
                        </Button1>

                    </form>

                </div>

            </AuthWrapper>
    );
    }


export default withRouter(EmailPassword);