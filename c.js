import React from 'react';
import {RouteWithSubRoutes} from './utils';
import { Link} from 'react-router-dom';

export default ( props ) => (
  <div>
    this is C
    <Link to="/C/D">to D</Link>
    <Link to="/C/E">to E</Link>
    {props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);