import React,{Component} from 'react';
import Signup from '../../components/Signup';
import './styles.scss';

class Registration extends Component{
    render(){
        return (
            <div className="reg">
                <h1>Registration</h1>
                <Signup/>
            </div>
        );
    };
};
export default Registration;