import * as express from 'express';
import { AppSettings } from '../../settings';
import * as RelaySocket from 'hyco-ws';

let statsRoute = express.Router();

let relayToken = encodeURIComponent(RelaySocket.createRelayToken(
    'http://' + AppSettings.NAMESPACE,
    AppSettings.KEYRULE,
    AppSettings.KEY));

statsRoute.get('/', (request: express.Request, response: express.Response) => {
    response.render('stats.html',
        { relayToken: relayToken });
});

export default statsRoute;
