import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartingScreen from "./components/StartingScreen";
import JuegoA from "./components/JuegoA";
import JuegoB from "./components/JuegoB";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartingScreen} />
        <Route exact path="/juego-A" component={JuegoA} />
        <Route exact path="/juego-B" component={JuegoB} />
      </Switch>
    </Router>
  );
}

export default App;
