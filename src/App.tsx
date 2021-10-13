import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GoogleNearbyComponent } from './Pages';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={GoogleNearbyComponent}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
