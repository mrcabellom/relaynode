import * as express from 'express';
import statsRoute from './statsRoute';

let routes: Array<express.RequestHandler> = [
    statsRoute
];

export { routes };
