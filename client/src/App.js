import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalState } from "./GlobalState";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Users
const ClientLayout = lazy(() => import("./Layouts/Client/Layout.js"));
const BranchAdminLayout = lazy(() => import("./Layouts/BranchAdmin/Layout"));
const SuperAdminLayout = lazy(() => import("./Layouts/SuperAdmin/Layout"));

// Public pages
const Login = lazy(() => import("./Components/Login"));
const Page404 = lazy(() => import("./Components/Utils/page404/Page404"));
const Page500 = lazy(() => import("./Components/Utils/page500/Page500"));

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.UserAPI.isLogged;
  const [user] = state.UserAPI.User;
  console.log({ user: user, isLogged: isLogged });

  // user athorization
  // setTimeout(() => {}, 5000)
  let userLayout;
  if (isLogged && user.roleID === "60df1e5178ff9871852370f9") {
    userLayout = (
      <Route
        path="/"
        name="B-A"
        render={(props) => <BranchAdminLayout {...props} />}
      />
    ); // Branch Admin Layout
  } else if (isLogged && user.roleID === "60df1e3878ff9871852370f8") {
    userLayout = (
      <Route
        path="/"
        name="S-A"
        render={(props) => <SuperAdminLayout {...props} />}
      />
    ); // super admin Layout
  } else if (isLogged && user.roleID === "60df1e6978ff9871852370fa") {
    userLayout = (
      <Route
        path="/"
        name="Client"
        render={(props) => <ClientLayout {...props} />}
      />
    ); // client Layout
  } else {
    userLayout = (
      <Route
        path="/"
        name="Login Page"
        render={(props) => <Login {...props} />}
      />
    ); // for an authorized user
  }

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          {userLayout}
          <Route
            exact
            path="*"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
