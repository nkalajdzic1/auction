import React from "react";
import {
  Route,
  useHistory,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
//import { auth } from "../api";
//import { PermissionType } from "../shared/types";

interface ICustomRouteProps {
  /*permission: PermissionType[];*/
  title: string;
  exact?: boolean;
  path?: string | string[];
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export default function CustomRoute({
  /*permission,*/
  title,
  exact,
  path,
  component,
}: ICustomRouteProps) {
  //<<<<<<<<<<<<<routing for permission type because administrator can access more etc>>>>>>>>>>>>>>>>>

  /*let permissionType = Number(auth.getCurrentUser().role) as PermissionType;

  if (permission[0] !== PermissionType.All && !permission.includes(permissionType)) {
    return <Redirect to="login" />;
  }*/

  document.title = `Auction | ${title}`;

  return <Route>{component}</Route>;
}
