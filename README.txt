This is the repository for code related to OSU CS 361 Summer 2021.

My current project idea is to create an app that allows the user to select an ailment or issue they want to address and brings them to a
page with information on various essential oils that could address their problems. The essential oil page will pull information from
Wikipedia or similiar and provides recommendations on how to use the essential oil. There is also a review section with the ability to 
allow users to offer advice on essential oils, combinations, and efficacy. There may also be purchase links or recommendations.

Scent Academy application can be found at http://flip1.engr.oregonstate.edu:3495/home

The Wikipedia Summary scraper can be found at https://guarded-harbor-49578.herokuapp.com/wikiscraper/:term where ":term" can be replaced with whatever whatever page
you're trying to access on Wikipedia. The result is the text of the first paragraph of information on the Wikipedia page. 
Requests are get requests and responses are plain text.

The Date History scraper can be found at https://polar-thicket-58913.herokuapp.com/datescraper/:term where ":term" can be replaced with the day of the year you're looking
for history information on. ":term" should be of the format "january-06" or "august-12". The result is the first paragraph of information from the Library of Congress' This Day
in History site. Requests are get requests and responses are plain text.