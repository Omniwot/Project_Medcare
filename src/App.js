import React, {useEffect} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import { auth , handleUserProfile } from './firebase/utils';
import {setCurrentUser} from './redux/User/user.actions';
import { connect } from 'react-redux';

import './default.scss';

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';


import WithAuth from './hoc/withAuth';
import Uploadpage from './pages/Upload';


const App = props=> {
  
  const {setCurrentUser, currentUser} =props;

  useEffect(()=>{
    

    const authListener = auth.onAuthStateChanged(async userAuth=>{
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
  
    
    return ()=>{ 
      authListener();
     }

  },[]);


    
  return (
    <div className="App">
       <Switch>
         <Route exact path="/" render={()=>(
            <HomepageLayout>
              <Homepage currentUser={currentUser}/>
            </HomepageLayout>
         )}/>
         
         <Route path="/registration" 
         render={()=>currentUser ? <Redirect to="/"/> :(
           <MainLayout >
             <Registration />
           </MainLayout>
         )}/>
         <Route path="/login"
          render={()=>currentUser ? <Redirect to="/"/> :(
           <MainLayout >
             <Login />
           </MainLayout>
         )}/>
         <Route path="/search" render={()=>(
           <MainLayout >
             <Search />
           </MainLayout> 
         )}/>
         <Route path="/upload"
          render={()=>(
           <MainLayout >
             <Uploadpage currentUser={currentUser}/>
           </MainLayout>
         )}/>
         <Route path="/recovery"
          render={()=>(
           <MainLayout >
             <Recovery />
           </MainLayout>
         )}/>
         
         <Route path="/dashboard" render={()=>(
           <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout> 
           </WithAuth>
         )}/>
       </Switch>
    </div>
  );
}


const mapStateToProps=({user})=>({
  currentUser:user.currentUser
});

const mapDispatchToProps= dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
