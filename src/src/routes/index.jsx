import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import GlobalStyles from '../styles/global';


export const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
