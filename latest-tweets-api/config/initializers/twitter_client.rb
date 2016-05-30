# Be sure to restart your server when you modify this file.

# Twitter Ruby Gem initializer for interface with Twitter API
# Client configuration for application-only authentication.

# Define a constant throughout the scope of the application
::TwitterClient = Twitter::REST::Client.new do |config|
  config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
  config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
end