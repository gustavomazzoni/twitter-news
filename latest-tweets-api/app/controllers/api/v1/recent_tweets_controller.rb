class Api::V1::RecentTweetsController < ApplicationController
	after_filter :cors_set_access_control_headers

	before_filter do
		# "healthcare", "nasa", and "open source" as the topics
		unless params[:topic] && (['healthcare', 'nasa', 'open source'].include? params[:topic])
		  render json: {error: { message: "Invalid request.", detail: "One of these topics must be informed: ['healthcare', 'nasa', 'open source']" }}, status: :bad_request
		end
	end

	def index
		@tweets = Rails.cache.fetch("/recent_tweets/#{params[:topic]}", :expires_in => 1.hours) do
			# Search for tweets. This query will return the 10 most recent tweets from one of three topics.
			# "healthcare", "nasa", and "open source" as the topics
			$twitter.search("\"#{params[:topic]}\"", result_type: "recent").take(10)
		end
	end

	# For all responses in this controller, return the CORS access control headers.
	def cors_set_access_control_headers
        headers['Access-Control-Allow-Origin'] = '*'
        headers['Access-Control-Allow-Methods'] = 'GET'
        headers['Access-Control-Allow-Headers'] = %w{Origin Accept Content-Type X-Requested-With X-CSRF-Token}.join(',')
        headers['Access-Control-Max-Age'] = "1728000"
	end

end
