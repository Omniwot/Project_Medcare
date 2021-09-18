import React,{Component} from 'react';
import Signup from '../../components/Signup';
import './styles.scss';

class Registration extends Component{
    render(){
        return (
            <div>
                <h1>Registration Page</h1>
                <Signup/>
            </div>
        );
    };
};
export default Registration;