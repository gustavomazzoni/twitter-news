require 'rails_helper'

RSpec.describe Api::V1::RecentTweetsController, type: :controller do
	describe "GET #index" do
		before(:each) do
			#input values from client for testing
			@topic = "healthcare"
			get :index, {topic: @topic}
		end

		it "returns tweets JSON object with the most 10 recent tweets from the topic" do
			apps_response = JSON.parse(response.body, symbolize_names: true)
			expect(apps_response).to_not be_nil
		end

		it "responds successfully with an HTTP 200 status code" do
			expect(response).to be_success
			expect(response).to have_http_status(200)
	    end

	    it "renders the index template" do
	    	expect(response).to render_template("index")
	    end
	end
end
