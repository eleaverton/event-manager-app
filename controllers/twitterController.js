const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: "RxAmBiy3PZzvJ11JHQ0uaO5ba",
  consumer_secret: "48wlI9E5qTEGRSMkK3BgIEBeL5y6noFvux4fbx4XQpIbicjZSc",
  access_token_key: "936407631312379904-SH7PhXrVVsRT2k58qcYkCifhWWX63Be",
  access_token_secret: "KHUYVgbbyife9gln94HGdniRQzEYIHharKqdtnKH0Gm6p"
});

function postToTwitter(message) {
    client
      .post("statuses/update", { status: `${message.status} #${message.hashtag}` })
      .then(function(tweet) {
        console.log(tweet);
      })
      .catch(function(error) {
        throw error;
      });
}

const message = {
    status: "I am eventster",
    hashtag: "eventster"
}

postToTwitter(message)