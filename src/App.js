import './App.css';
import Nav from './Components/nav.js';
import Dashboard from './Components/dashboard.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path = "/" exact component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
