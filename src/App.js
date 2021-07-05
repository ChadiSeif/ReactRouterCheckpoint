import "./App.css";
import MovieApp from "./Components/MovieApp/MovieApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDescription from "./Components/MovieDescription/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MovieApp} />
          <Route path="/movie/:Id" component={MovieDescription} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
