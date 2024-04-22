import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create.js';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound.js';
function App() {

  return (
    <Router>
      <div className="App font-">
        <Navbar />
        <div className="content max-w-[600px]  m-auto p-[20px]">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
