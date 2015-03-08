# bridge-json
Contains the demo website used for demonstrating the use of the Twitter API for assignment 4


Describe your team's project:
  The goal of our project is to create a Twitter gateway. This gateway is a way for a community of people to vote on tweets and   and decide whether the tweet in question should be posted to the community's Twitter page. If enough people deem it worthy, 
  the tweet is posted, otherwise it is cast aside. To accomplish this we will need some tipe of voting system, a way to post
  directly to the Twitter account, and a widget to view the twitter feed of the account.
  
Research and compile a list of API's that might be useful for this project:
  - Twitter API, used to push the tweets to twitter
  - BuzzVote API, a polling API for voting on the proposed tweets
  - Twitcher, used to easily fetch twitter data in JS without auth info
  
Choose one API from your list and create an example web page using jQuery AJAX to call the API and display the returned results:
  Chosen API is Twitcher.
  
Describe why you chose that particular API and provide a link to its documentation:
  I chose Twitcher because it provided a simple way to show the pulling of twitter data. This can be used to pull things such 
  as timelines and other user info without the need for auth keys. To use the actual twitter API to
  accomplish this, you need to provide auth keys which I do not want to publicly make available on github.
  Link to docs: http://twitcher.steer.me/
  
Describe any potential issues:
  This API is really only good for pulling basic information. To display something like a timeline widget you would need to 
  use the script provided by twitter. This however is not done using an jQuery AJAX request so I did not use it for this
  assignment.

Evaluate your experience with the API:
  For pulling data from twitter this was fantastic and very simple to use. However the use is fairly limited so it would
  appear that the best course of action is to use the default twitter API once we get API keys for an account whose only
  purpose is used for this project.
  
How can the example you wrote be expanded to use additional fucntionality provided by the API?:
  My webpage could be expanded to be like a hub for a group of people's Twitter feeds. It would be interesting to have
  something like a dropdown menu that would have the usernames of different users, and when you selected that name the 
  avatar, twitter handle, and latest tweets would pop up. Sometimes I feel like the useful information gets lost in a lot
  of noise on twitter so it would be nice to have a page where you could group up users that tweet information that
  you may deem important.
  
