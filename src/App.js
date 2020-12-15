import './App.css';
import Dashboard from './Components/dashboard.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ClientRequest from './Components/client-request.js';
import OrderRequest from './Components/order-request.js';
import Orders from './Components/orders.js';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/admin" exact component={Dashboard}/>
          <Route path = "/admin/client-request" component={ClientRequest} />
          <Route path = "/admin/order-request" component={OrderRequest} />
          <Route path = "/admin/orders" component={Orders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
