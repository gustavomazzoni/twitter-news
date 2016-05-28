// Define AngularJS application
angular.module('twitterNews', ['config', 'ui.router'])

// Define routing
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/home/:topic',
		templateUrl: '/home.html',
		resolve: {
			// Resolve http request to API
         	// to get the recent tweets from the topic
			promiseTweets: ['$stateParams', 'tweet', function($stateParams, tweet) {
				return tweet.getRecentFromTopic($stateParams.topic);
			}]
		},
		controller: 'MainCtrl',
		controllerAs: 'main'
    });

    $urlRouterProvider.otherwise('/home/');
}])

// Define Service
.factory('tweet', ['config', '$q', '$http', function (config, $q, $http) {
	var topics = ['healthcare', 'nasa', 'open source'];
	var currentTopic = topics[0];

	var get = function (topic) {
		// Use $q provider service to run functions asynchronously, 
		// and use their return values (or exceptions) when they are done processing.
		var deferred = $q.defer();

		// if topic argument is null, go with current topic
		topic = topic || currentTopic;

		if (topics.indexOf(topic) == -1) {
			//error
			console.log('Error: Invalid topic argument');
			deferred.reject('Error: Invalid topic argument');
		}
		
		// change current topic
		currentTopic = topic;

		// perform a request to Application API
		// to get the recent tweets from the topic
		$http.get(config.API_URL + '/api/v1/recent_tweets/' + topic).success(function (tweets) {
			deferred.resolve(tweets);
		}).error(function(error) {
			//error
			console.log('Error: API communication failed. error: '+error);
			deferred.reject(error);
		});

		// return promise object
		return deferred.promise;
    };

    return {
    	topics: topics,
    	currentTopic: currentTopic,
    	getRecentFromTopic: get
    };
}])

// Define Controller
.controller('MainCtrl', ['promiseTweets', 'tweet', function (promiseTweets, tweet) {
	var vm = this;
	
	vm.topics = tweet.topics;
	vm.currentTopic = tweet.currentTopic;

	// populate tweets with tweets from API
	vm.tweets = promiseTweets;
}]);