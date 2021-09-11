import React,{Component} from 'react';
import Upload from '../../components/Upload';
import './styles.scss';


const Uploadpage = props => {
    return <Upload currentUser={props.currentUser}/>
  }
  
  
export default Uploadpage;