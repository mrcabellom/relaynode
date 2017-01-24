import { TweetViewModel } from './tweetViewModel';
import * as ko from 'knockout';

declare var relayToken: any;

let tweetViewModel = new TweetViewModel();

ko.applyBindings(tweetViewModel);

let ws = new WebSocket(`wss://coreevent.servicebus.windows.net:443/$hc/corehybrid?
    sb-hc-action=connect&sb-hc-token=${relayToken}`);

ws.onmessage = function (event) {
    tweetViewModel.adddTweet(JSON.parse(event.data));
};
