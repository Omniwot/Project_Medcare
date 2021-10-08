import React from  "react";
import Upload from './../../assets/result.png';
import Search from './../../assets/lab1.jpeg';
import { Link } from "react-router-dom";
import './styles.scss';

const Directory = props => {

  const currentUser=props.currentUser;

  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Upload})`
            
          }}
        >
          {currentUser && (
              <Link to="/upload">
               <a>Upload Bills</a> 
              </Link>           
         )}
          {!currentUser && (
            <Link to="/login">
              <a>Upload Bills</a> 
             </Link>           
         )}
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Search})`
          }}
        >
           {currentUser && (
              <Link to="/search">
               <a>Search CPT/Description</a> 
              </Link>           
         )}
          {!currentUser && (
            <Link to="/login">
              <a>Search CPT/Description</a> 
             </Link>           
         )}
        </div>
      </div>
    </div>
  );
};
export default Directory;