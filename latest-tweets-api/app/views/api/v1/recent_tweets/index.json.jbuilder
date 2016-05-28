json.array! @tweets do |tweet|
  	json.id tweet.id
  	json.text tweet.text
  	json.user do |json|
	    json.id tweet.user.id
	    json.name tweet.user.name
	    json.profile_image_url tweet.user.profile_image_url.to_s
	end
end
