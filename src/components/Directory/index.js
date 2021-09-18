import React from  "react";
import Upload from './../../assets/upload.jpg';
import Search from './../../assets/search.jpg';
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
               <a>Upload</a> 
              </Link>           
         )}
          {!currentUser && (
            <Link to="/login">
              <a>Upload</a> 
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
               <a>Search</a> 
              </Link>           
         )}
          {!currentUser && (
            <Link to="/login">
              <a>Search</a> 
             </Link>           
         )}
        </div>
      </div>
    </div>
  );
};
export default Directory;