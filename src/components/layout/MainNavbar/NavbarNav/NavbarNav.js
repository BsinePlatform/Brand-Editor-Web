import React from "react";
import { Nav, NavbarBrand } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="flex-row">
    <Notifications />
    <UserActions />
  </Nav>
);
