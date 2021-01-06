
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home'
import Details from './containers/Issues'
import IssueDetailsPage from './containers/IssueDetailsPage'
function App() {
  const history = createBrowserHistory();
  return (
    <div>
      <Router history={history} >
                    <Switch>
                         
                         <Route path="/details" component={Details} />
                         <Route path="/issueDetail" component={IssueDetailsPage} />
                         <Route path="/" component={Home} />
                         </Switch>
                         </Router>
    </div>
    
  );
}

export default App;
