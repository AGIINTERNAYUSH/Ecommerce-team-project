import './App.css';
import Nav from './Components/nav.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
