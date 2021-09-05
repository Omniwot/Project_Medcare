import React, {Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import { auth , handleUserProfile } from './firebase/utils';
import {setCurrentUser} from './redux/User/user.actions';
import { connect } from 'react-redux';

import './default.scss';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Login from './pages/Login';
import Registration from './pages/Registration';
import HomepageLayout from './layouts/HomepageLayout';


class App extends Component {
  
  authListener=null;

  componentDidMount(){

    const {setCurrentUser} =this.props;

    this.authListener = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({     

             id:snapshot.id,
            ...snapshot.data()

            })
          });
        
      }

      setCurrentUser(userAuth);
     
    });
  }

  componentWillUnmount(){
    this.authListener();
  }

  render(){
    const {currentUser}=this.props;

  return (
    <div className="App">
       <Switch>
         <Route exact path="/" render={()=>(
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
         )}/>
         
         <Route path="/registration" render={()=>(
           <MainLayout currentUser={currentUser}>
             <Registration />
           </MainLayout>
         )}/>
         <Route path="/login"
          render={()=>currentUser ? <Redirect to="/"/> :(
           <MainLayout currentUser={currentUser}>
             <Login />
           </MainLayout>
         )}/>
         <Route path="/search" render={()=>(
           <MainLayout currentUser={currentUser}>
             <Search />
           </MainLayout> 
         )}/>
       </Switch>
    </div>
  );
}
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
});

const mapDispatchToProps= dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
