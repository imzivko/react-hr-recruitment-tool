import React from 'react';
import Home from 'views/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </QueryParamProvider>
  </BrowserRouter>
);

export default AppRouter;
