import React from 'react';
import {Route} from 'react-router-dom';
export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes}></route.component>
    )}
  />
);

// props.match.path和props.match.url区别就是 path是你自己定义的路由，url是显示的实际路由
