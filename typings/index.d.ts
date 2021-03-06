// Type definitions for hyco-ws
// Project: https://github.com/Azure/azure-relay-node
// Definitions by: Manuel Rodrigo Cabello <https://github.com/mrcabellom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="ws" />
/// <reference types="node" />

declare module 'hyco-ws' {

    namespace WebSocketRelay {

        class HybridConnectionWebSocketServer extends NodeJS.EventEmitter {
            constructor(option: Object, callback: (ws: any) => void);
            close(callback: () => void): void;
            listenUri: string;
            closeRequested: boolean;
            options: Object;
            path: string;
            clients: Array<WebSocket>;
            controlChannel: WebSocket;
        }

        export interface RealyConnection {
            createRelayedServer(options: Object, fn: (ws: any) => void): HybridConnectionWebSocketServer;
            relayedConnect(address: string, fn: () => void): WebSocket;
            createRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
            appendRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
            createRelayBaseUri(serviceBusNamespace: string, path: string): string;
            createRelaySendUri(serviceBusNamespace: string, path: string, token?: any, id?: any): string;
            createRelayListenUri(serviceBusNamespace: string, path: string, token?: any, id?: any);
        }
    }

    var RelayConnection: WebSocketRelay.RealyConnection;

    export = RelayConnection;
}