import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useParams, Link, Router } from "react-router-dom";
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
// User
import UserAdd from "./views/UserAdd";
import UserUpdate from "./views/UserUpdate";
import UserList from "./views/UserList";
// Route
import StoreAdd from "./views/store/StoreAdd";
import StoreUpdate from "./views/store/StoreUpdate";
import StoreList from "./views/store/StoreList";

export default [
  {
    path: "/",
    exact: true,
    layout: SignIn,
    // component: () => <Redirect to="SignIn" />
    component: SignIn
  },
  // User Routes
  {
    // List Users
    path: "/user",
    layout: DefaultLayout,
    component: UserList
  },
  {
    // User Details
    path: "/user/:id",
    layout: DefaultLayout,
    component: UserList
  },
  {
    // Add User
    path: "/user-add",
    layout: DefaultLayout,
    component: UserAdd
  },
  // <Router><Route path='user-update/:id' layout={<DefaultLayout />} component={<UserUpdate />} ></Route></Router>,
  {
    // Edit User
    path: "/user-update/:id",
    layout: DefaultLayout,
    component: UserUpdate
  },
  {
    // Delete Users
    path: "/user-delete/:id",
    layout: DefaultLayout,
    component: UserUpdate
  },

  // Store Routes
  {
    path: "/store",
    layout: DefaultLayout,
    component: StoreList
  },
  {
    path: "/store-add",
    layout: DefaultLayout,
    component: StoreAdd
  },
  {
    path: "/store-update/:id",
    layout: DefaultLayout,
    component: StoreUpdate
  },
  {
    path: "/store-delete/:id",
    layout: DefaultLayout,
    component: StoreUpdate
  },

  // General Routes
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
