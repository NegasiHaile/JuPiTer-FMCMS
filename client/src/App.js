import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import {GlobalState} from './GlobalState'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Users
const BranchAdminLayout = lazy(() => import('./Components/Private/Branch-Admin/Layout'))
const ClientLayout = lazy(() => import('./Components/Private/Client/Layout'))

// Public page
const Login = lazy(() => import('./Components/Public/Login'));

const Page404 = lazy(() => import('./Components/Utils/page404/Page404'));
const Page500 = lazy(() => import('./Components/Utils/page500/Page500'));



function App () {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [user] = state.userAPI.User
  console.log(user)

    // Super admin roleID: 60df1e3878ff9871852370f8
    // Client roleID: 60df1e6978ff9871852370fa
  return (
      <BrowserRouter>
          <Suspense fallback={loading}>
            <Switch>
              {isLogged? (<Route path="/" name="B-A" render={props => <BranchAdminLayout {...props}/>} />): 
            (<Route path="/" name="Login Page" render={props => <Login {...props}/>} />)}
            
              {/* <Route exact path="*" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              
            </Switch>
          </Suspense>
      </BrowserRouter>
    );
}

export default App;
