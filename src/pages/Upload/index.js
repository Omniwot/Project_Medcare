import React,{Component} from 'react';
import Upload from '../../components/Upload';
import './styles.scss';


const Uploadpage = props => {
    return (
    <section className="uppage">
      <Upload currentUser={props.currentUser}/>
      </section>);
  }
  
  
export default Uploadpage;