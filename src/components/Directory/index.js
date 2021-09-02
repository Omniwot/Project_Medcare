import React from  "react";
import Upload from './../../assets/upload.jpg';
import Search from './../../assets/search.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Upload})`
          }}
        >
          
           <a>Share a Bill</a> 
          
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Search})`
          }}
        >
          
           <a>Search</a> 
          
        </div>
      </div>
    </div>
  );
};
export default Directory;