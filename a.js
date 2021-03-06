import React,{Component} from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import Index from './react-router/index';
import { RouteWithSubRoutes } from './utils';
import routes from './routes';

export default class A extends Component{
  render(){
    return <div>
      <Router>
        <div>
          <Link to="/B">to B</Link><br/>
          <Link to="/C">to C</Link>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Router>
    </div>
  }
}

// export default class A extends Component {
//   render() {
//     return (
//       <div>
//         <Index />
//       </div>
//     )
//   }
// }
ReactDom.render(<A/>,document.querySelector("#btn"))
if (module.hot) {
     module.hot.accept()
}