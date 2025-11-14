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
  {
    path: '/SelectInput',
    component: lazy(() => import('./SelectInput')),
  },
];

export default routes;
