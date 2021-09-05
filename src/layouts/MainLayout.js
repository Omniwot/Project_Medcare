import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Foooter'

const MainLayout= props =>{
    return(
    <div>
        <Header {...props}/>
        <div className="main">
            {props.children}
        </div>
        <Footer/>
    </div>
    );
};
export default MainLayout;