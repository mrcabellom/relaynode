import * as WebSocketRelay from 'hyco-ws';
import { AppSettings } from '../settings';


let wss = WebSocketRelay.createRelayedServer(
    {
        server: WebSocketRelay.createRelayListenUri(AppSettings.NAMESPACE, AppSettings.PATH),
        token: WebSocketRelay.createRelayToken(
            `http://${AppSettings.NAMESPACE}`,
            AppSettings.KEYRULE,
            AppSettings.KEY)
    },
    (ws) => {
        console.log('New connection accepted');
        ws.onmessage = function (event) {
            let wsMessage = event.data.toString('utf8');
            for (let i = 0; i < wss.clients.length; i++) {
                let client = wss.clients[i];
                if(client.readyState ===  client.OPEN){
                    wss.clients[i].send(wsMessage);
                }               
            }
        };
        ws.on('close', function () {
            console.log('connection closed');
        });
    });

console.log('Relay server listenning');

wss.on('error', function (err) {
    console.log('error' + err);
});
