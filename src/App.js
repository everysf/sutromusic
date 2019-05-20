import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/work" component={Work} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
