import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';

const Homepage = props => {
  return (
    <section className="homepage">
      <Directory currentUser={props.currentUser}/>
    </section>
  );
};

export default Homepage;