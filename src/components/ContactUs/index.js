import React, {useState} from 'react';
import './styles.scss';

import FormInput from '../forms/FormInput';
import  Buttons1 from '../forms/Button1';



const ContactUs = props=>{
    
    const [fullname, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [Phone, setPhone]=useState('');
    const [Message, setMessage]=useState('');
    const [company, setCompany]=useState('');
    const [errors,setErrors]=useState([]);

    const reset=()=>{
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors([]);
        setCompany([]);
    }

    const handleFormSubmit= async event=>{
        
        event.preventDefault();
        
        
        try{

            
            reset();


        } catch(err){

        }
    }

        

        return(
            <div className="signup">
                <div className="wrap">
                    <h2>
                        Contact Us
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
                         name="fullname"
                         value={fullname}
                         placeholder="Full name"
                         handleChange={e=>setFullName(e.target.value)}
                        />

                        <FormInput
                         type="email"
                         name="email"
                         value={email}
                         placeholder="Email"
                         handleChange={e=>setEmail(e.target.value)}
                        />

                        <FormInput
                         type="text"
                         name="company"
                         value={company}
                         placeholder="Company"
                         handleChange={e=>setCompany(e.target.value)}
                        />      

                        <FormInput
                         type="Phone"
                         name="Phone"
                         value={Phone}
                         placeholder="Phone"
                         handleChange={e=>setPhone(e.target.value)}
                        />

                        <FormInput
                         type="text"
                         name="Message"
                         value={Message}
                         placeholder="Message(optional)"
                         handleChange={e=>setMessage(e.target.value)}
                        />
                        <Buttons1 type="submit">
                            Submit
                        </Buttons1>
                    </form>
                </div>
            </div>
        )
    }

export default ContactUs;