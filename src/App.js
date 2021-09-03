import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './default.scss';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import HomepageLayout from './layouts/HomepageLayout';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/" render={()=>(
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
         )}/>
         <Route exact path="/" component={Homepage}/>
         <Route path="/registration" render={()=>(
           <MainLayout>
             <Registration />
           </MainLayout>
         )}/>
       </Switch>
    </div>
  );
}

export default App;
