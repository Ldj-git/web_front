import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import main from "./views/main";
import category from "./views/category";
import service_info from "./views/service_info";
import testt from "./views/testt";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/category" component={category} />
          <Route exact path="/service_info" component={service_info} />
          <Route exact path="/test" component={testt} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
