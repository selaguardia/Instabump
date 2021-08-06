About this project:

The purpose of this project is to create aa social media platform where you wont be spammed with so many posts from the same user. In this version of insta👊🏼 users are allowed to share up to 3 pinned photos. If you like the photo you can simply click on the photo and bump it.

Instructions:
-To play the game, launch game via horoku (https://instabump.herokuapp.com/) register for an account and then uppload your profile photo and then just begin uploading photos. -Choose up to 3 favorite photos to pin to the main feed.
-Click on a user username to go to their profile page and see all their posts.
-Click on All users to see a list of all users on the platform.


MVP -- We are reverse engineering Instagram, and will be recreating the following features:


User account registration and login
Users can then post pictures to their own user page and include a caption
Users can ‘bump’ (like) posts, theirs or others

	In addition, we will be improving the app by:

Users can ‘pin’ a favorite picture (or multiple, 3?) to the main page ‘feed’
User avatar won’t be a circle, but a rounded square
Changing the color scheme


User Stories -- The user will arrive on the landing page, which will require them to register their account. They must include a username, full name, link to an avatar image, email address, and password. If the account name or email is already in use, they must choose a different one. If they already have an account, they can click on ‘login’ which will take them to the login page.

Once logged in, the user will be redirected to the main ‘feed’ page, where pinned images from other users and themself will be displayed. The user can also navigate to their own page, which has all of the images they have uploaded. 

From here, they can create a new post, which takes in an image (link) and caption. They will be redirected to their user page, where they see all of their images. They will be able to ‘bump’ that post if it’s not their own, and if it is their own they can bump it, edit it, or delete it. In addition, the user can select up to 3 of their own posts to ‘pin’, linking that post on the front page.

On the main page, there will be 0-3 posts from each user who chooses to pin posts to the feed. The posts on the main feed will be displayed one by one (with caption, number of bumps, and the user’s avatar/link to user page), scrolling down to view them all. The posts on the user page will be laid out in rows of 3, with image, caption, and number of bumps all displayed. Clicking on a post will redirect the user to that post, where they can interact with it, same as above (bumping it if it’s not their own, or bump/edit/delete if it is.

From any page other than the login/register pages, the user may log out via a button on the navbar, which clears the session and redirects them to the login page.

On the login/register pages, the main logo and name will be at the top, and the only links will be on the form itself (if on login, link to register, and vice versa). Once logged in, the navbar at the top (which was previously empty), will have links for the main feed, user page, new post, and log out.

Stretch Goals -- 
Display total bumps given/bumps received on the user page.
Hide caption and bumps by default, only show when moused over?
Random order on the front page of pinned posts OR order of most bumps descending.



ERD
!["ERD"](/images/ERD.jpg)

WIREFRAMES
!["wireframe"](/images/Wireframe.png)

USER FLOW
!["User Flow"](/images/User_flow.png)

