# Recent Tweets API
## Goal

Create a [microservice](http://martinfowler.com/articles/microservices.html) that uses Twitter's API to periodically grab recent search results on 3 topics ("healthcare", "nasa", and "open source"), store them, and provide a simple RESTful JSON API to ask for the latest results on any of the topics.

## Solution
* Rails framework to build a microservice exposed through RESTful API.
* For handling the communication with Twitter API was used the Twitter Ruby Gem.
* Assign the twitter client, with the API keys, to a global variable in an initializer (config/initializers/twitter.rb).
* Cache with Rails.cache to store the recent results from Twitter API during 1 hour. This aproach was adopted because it minimizes a lot the external API calls and reduces the response process time.
* To deal with everything related with request and response (use JBuilder to build response object) for this API was created Api::V1::RecentTweetsController representing the API interface for it's first version.
* JBuilder was used to build JSON response object with only few properties like the tweet's text and user's name and image profile.
* The router name was defined to expose an URL that indicates it's an API and it's versioned.

Gems:
* Rspec - for testing.
* [Twitter](https://github.com/sferik/twitter) - A Ruby interface to the Twitter API.
* JBuilder - for building JSON response object.

## Running the application
### Download the project
Download the project
### Install
To install Twitter Gem, it's necessary to install first on the shell.
```sh
$ gem install twitter
```
Install project dependencies
```sh
$ bundle install
```
### Configure
Twitter API v1.1 requires you to authenticate via OAuth, so you'll need to [register your application with Twitter](https://apps.twitter.com/).

Then, set the environment variables Consumer Key (API Key) as TWITTER_CONSUMER_KEY and Consumer Secret (API Secret) as TWITTER_CONSUMER_SECRET. For example, on MacOS:
```sh
$ export TWITTER_CONSUMER_KEY=<API Key>
$ export TWITTER_CONSUMER_SECRET=<API Secret>
```
### Run locally
Start the server
```sh
$ rails server
```

### Test the API
#### Most 10 recent Tweets
To receive most 10 recent tweets from one of three topics ("healthcare", "nasa", and "open source") as a json result, use the following URL format like:
```sh
http://localhost:3000/api/v1/recent_tweets/:topic
```
```sh
http://localhost:3000/api/v1/recent_tweets/healthcare
```
It is mandatory to inform topic param. Topic must be 'healthcare', 'nasa' or 'open source'.

## Demo
To see the RESTful API running on production (Heroku), use this URL:
```sh
https://latesttweets.herokuapp.com/api/v1/recent_tweets/:topic
```
