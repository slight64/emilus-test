import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${match.url}/user-list`}
        component={lazy(() => import(`./user-list`))}
      />
      <Route
        path={`${match.url}/edit-profile/:id`}
        component={lazy(() => import(`./edit-profile/`))}
      />
    </Switch>
  </Suspense>
);

export default Pages;
