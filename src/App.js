import './App.css';
import Dashboard from './Components/dashboard.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ClientRequest from './Components/client-request.js';
import OrderRequest from './Components/order-request.js';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/admin" exact component={Dashboard}/>
          <Route path = "/admin/client-request" component={ClientRequest} />
          <Route path = "/admin/order-request" component={OrderRequest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
