class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # rescue any error from Twitter Gem and Twitter API communication
  rescue_from Twitter::Error, with: :twitter_connection_error
 
  private
 
    def twitter_connection_error(error)
    	render json: {error: { message: "Communication error with Twitter API.", detail: error.to_s, error_object: error }}, status: :service_unavailable
	end
end
