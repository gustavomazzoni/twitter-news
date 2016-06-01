# Twitter News
## Goal
Create a simple application that is guided by the microservices concept. The application will provide a simple web-based user interface that lets users view 10 recent tweets from one of three topics ("healthcare", "nasa", and "open source") that will be served by the microservice API.

## Solution
A single-page application was built using [AngularJS](https://angularjs.org/), for the client side, consuming a microservice RESTful API, built in Ruby on Rails, that makes the integration to the external Twitter API to get the most 10 recent tweets from a topic informed.

Following the microservices architecture, both the webapp and the api are independently deployable software packages.

* [Detail information about the client side web app (twitter-news-web) and how to run it can be found here.](/twitter-news-web)
* [Detail information about the server side microservice RESTful API (latest-tweets-api) and how to run it can be found here.](/latest-tweets-api)

## Running the app
### Download the project
Download or clone the project with the following command:
```sh
$ git clone https://github.com/gustavomazzoni/twitter-news
```
### Vagrant setup
This project has Vagrant setup files. So if you use Vagrant and would like to setup your environment with it, just run ```vagrant up``` and follow the next steps.

### Rails RESTful API
Inside latest-tweets-api folder:
#### Install
To install Twitter Gem, it's necessary to install first on the shell.
```sh
$ gem install twitter
```
Install project dependencies
```sh
$ bundle install
```
#### Configure
Twitter API v1.1 requires you to authenticate via OAuth, so you'll need to [register your application with Twitter](https://apps.twitter.com/).

Then, set the environment variables Consumer Key (API Key) as TWITTER_CONSUMER_KEY and Consumer Secret (API Secret) as TWITTER_CONSUMER_SECRET. For example, on MacOS:
```sh
$ echo 'export TWITTER_CONSUMER_KEY=<API Key>' >> ~/.bash_profile
$ echo 'export TWITTER_CONSUMER_SECRET=<API Secret>' >> ~/.bash_profile
```
* Remember to refresh the shell after that:
```sh
$ source ~/.bash_profile
```
#### Run
Start the server
```sh
$ rails server
```
### AngularJS Webapp
Inside twitter-news-web folder:
#### Install
Install project dependencies
```sh
$ npm install
```
#### Run
Build and start the project
```sh
$ npm run build
$ npm start
```

Open on your browser:
http://localhost:8765/

### Demo
https://twitternews.herokuapp.com
