import * as  express from 'express';
import { ExpressServer } from './server/expressServer';

let expressApplication = express();

let expressServer = new ExpressServer(expressApplication, 3100);
expressServer.run();
