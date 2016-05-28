# Twitter News
## Goal
Create a simple application that is guided by the microservices concept. The application will provide a simple web-based user interface that lets users view 10 recent tweets from one of three topics (let's use "healthcare," "nasa," and "open source" as the topics) that will be served by the microservice API.

## Solution
A single-page application was built using [AngularJS](https://angularjs.org/), for the client side, consuming a microservice RESTful API, built in Ruby on Rails, that makes the integration to the external Twitter API to get for the most 10 recent tweets from a topic informed.

* [Detail information about the client side web app can be found here.](tree/master/twitter-news-web)
* [Detail information about the server side microservice RESTful API can be found here.](tree/master/latest-tweets-api)


### Demo
https://twitternews.herokuapp.com
