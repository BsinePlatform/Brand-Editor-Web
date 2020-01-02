import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SignIn/index";

import { isAuthenticated } from "./services/auth";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import UserAdd from "./views/UserAdd";

export default [
  {
    path: "/",
    exact: true,
    layout: SignIn,
    // component: () => <Redirect to="SignIn" />
    component: SignIn
  },
  {
    path: "/user-add",
    layout: DefaultLayout,
    component: UserAdd
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//       {...rest}
//       render={props =>
//           isAuthenticated() ? (
//               <Component {...props} />
//           ) : (
//                   <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//               )
//       }
//   />
// );

// const Routes = () => (
//   <BrowserRouter>
//       <Switch>
//           <Route exact path="/" component={SignIn} />
//           <Route path="/signup" component={SignUp} />
//           <PrivateRoute path="/app" component={() => <h1>App</h1>} />
//           {/* <Route path="*" component={() => <h1>Page not found</h1>} /> */}
//           <DefaultLayout path="/user-add" component={UserAdd} />
//           {/* <DefaultLayout path="/user-add" render={matchProps => <UserAdd {...matchProps} />} /> */}
//       </Switch>
//   </BrowserRouter>
// );

// export default Routes;

