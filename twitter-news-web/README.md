# Twitter News Web App
## Goal
Create a simple web-based client-side app that let's users view 10 recent tweets from one of three topics ("healthcare", "nasa", and "open source"). This frontend will simply ask a user which topic in which she wishes to see recent tweets, query the service for that topic, then show the results.

## Solution
A single-page application was built using [AngularJS](https://angularjs.org/) consuming a RESTful API to search for the most 10 recent tweets from one topic.

* Simple user interface built using bootstrap 3 without CSS changes to simplify it.
* Single AngularJS file for easy understanding as it is a very small webapp.
* Angular code was developed following angular style code to better adapt with new AngularJS 2 version.
* Grunt to create angularjs configuration module for the environment. Also to uglify angularjs file.

The project skeleton contains a lightweight server (written in Node) for serving the AngularJS client webapp.
  public/              serves index.html
  public/js/*          serves static resources

Modules required in the angularjs app:
* [ui.router](https://github.com/angular-ui/ui-router) - Single Page Application routing framework.
* config - dynamic angularjs module created via Grunt to configure environment variables for the app.

Modules dependencies in the project:
* AngularJS
* Bootstrap 3
* Grunt

## Running the app
### Download the project
Download the project
### Install
Install project dependencies
```sh
$ npm install
```
### Run
Build and start the project
```sh
$ npm run build
$ npm start
```

Open on your browser:
http://localhost:8765/

### Demo
https://twitternews.herokuapp.com
