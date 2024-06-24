import { lazy } from 'react';

const LineItemCustom = lazy(() => import('./customLineItem' /* webpackChunkName: "cart" */));

export default LineItemCustom;
