import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./All')),
  },
  {
    path: '/DKTag',
    component: lazy(() => import('./DKTag')),
  },
];

export default routes;
