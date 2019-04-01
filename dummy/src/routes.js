import DashBoard from './components/Dashboard';  
import Login from './components/Login';
import React from 'react';  
import { Route,BrowserRouter,Switch} from 'react-router-dom';  




const Routes = () => (  
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={DashBoard}/>
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes