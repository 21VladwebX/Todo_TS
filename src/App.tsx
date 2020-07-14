import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosPage from "./pages/Todos";
import AboutPage from "./pages/About";

const App: React.FC = () => {
    return (
        <BrowserRouter>
          <Navbar />
          <div className="container">
              <Switch>
                  <Route path="/" exact component={TodosPage}></Route>
                  <Route path="/about" component={AboutPage}></Route>
              </Switch>
          </div>
        </BrowserRouter>
    );
}

export default App;
