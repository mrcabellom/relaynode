import * as ko from 'knockout';

export class TweetViewModel {

    public tweets: KnockoutObservableArray<any>;

    constructor() {
        this.tweets = ko.observableArray([]);
    }

    public adddTweet(tweet: any): void {        
        let tweetCollection = this.tweets();
        tweetCollection.unshift(tweet);
        this.tweets(tweetCollection);
    }
}
