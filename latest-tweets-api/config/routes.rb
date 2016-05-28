LatestTweetsApi::Application.routes.draw do

  # Api definition
  namespace :api, defaults: { format: :json } do
    scope '/v1' do
      scope '/recent_tweets' do
        scope '/:topic' do
          get '/' => 'v1/recent_tweets#index'
        end
      end
    end
  end
end