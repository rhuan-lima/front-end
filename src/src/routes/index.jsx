import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Event } from '../pages/Event';
import GlobalStyles from '../styles/global';
import { ToastContainer } from 'react-toastify';

export const Routes = () => {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
      <Switch>
        <QueryClientProvider client={queryClient}>
          <Route exact path="/" component={Dashboard} />
          <Route path="/evento/:id+" component={Event} />
        </QueryClientProvider>
      </Switch>
    </BrowserRouter>
  )
}
