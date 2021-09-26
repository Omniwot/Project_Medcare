import React, {useState} from 'react';
import './styles.scss';
import RestaurantDataService from "../Search/service";

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
        setCompany('');
    }

    const handleFormSubmit= async event=>{
        
        event.preventDefault();

        var data={
            fullname:fullname,
            email:email,
            phone:Phone,
            message:Message,
            company:company

        }
        if(fullname.length!==0 && email.length!==0 && company.length!==0){
            
            RestaurantDataService.createSupportRequest(data)
                    
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
                reset();
                }
        else{
                setErrors(['Please fill all mandatory fields'])
            }
            

    }

        return(
            <div className="cupage">
            <div className="leftside">
                    We are here to help you search for an optimal price for your healthcare needs.
                </div>
            <div className="contactus">
                
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
                         className="newinp"
                         type="text"
                         name="fullname"
                         value={fullname}
                         placeholder="Full name"
                         handleChange={e=>setFullName(e.target.value)}
                        />
                        
                        <FormInput
                        className="newinp"
                         type="email"
                         name="email"
                         value={email}
                         placeholder="Email"
                         handleChange={e=>setEmail(e.target.value)}
                        />

                        <FormInput
                        className="newinp"
                         type="text"
                         name="company"
                         value={company}
                         placeholder="Company"
                         handleChange={e=>setCompany(e.target.value)}
                        />      

                        <FormInput
                        className="newinp"
                         type="Phone"
                         name="Phone"
                         value={Phone}
                         placeholder="Phone(optional)"
                         handleChange={e=>setPhone(e.target.value)}
                        />

                        <FormInput
                        className="newinp"
                         type="text"
                         name="Message"
                         value={Message}
                         placeholder="Message(optional)"
                         handleChange={e=>setMessage(e.target.value)}
                        />
                        <Buttons1 type="submit" className="btn-info">
                            Submit
                        </Buttons1>
                    </form>
                </div>
            </div>
            </div>
        )
    }

export default ContactUs;