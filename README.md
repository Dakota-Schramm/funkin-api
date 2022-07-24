# funkin-api

An express app with authorization, authentication and a simple database.

JWT Authentication Middleware: verify SignUp, verify token
Authorization Middleware: check User’s roles with record in database

With this api, you can view a general score list from players.
  - Should allow for pagination of results 
Api allows for login:
  - players can login to service and upload new high scores if it beats their current account's saved score
  - could implement an ability to upload scores from the application after a player logs in
    - will ultimately depend on how well checked the scores are to prevent forged scores?

Ultimately, the goal for this API would be to serve many concurrent users in a way that isn't resource intensive for the server. While this project uses SQLLite for a simple mock database, we would want to switch this to a database where we can pool connections. Depending on how complexity scales, it might also be beneficial to use something for caching.

No need for admin/moderator endpoints in api:
  - No special data stored for these roles, so can be deprecated.

# ROUTES

GET 
- /
– /api/test/all for public access
– /api/test/user for loggedin users (role: user/moderator/admin)
– /api/test/mod for users having moderator role
– /api/test/admin for users having admin role

  to implement 
    - /api/test/user/neighbors

  /user - gets all user scores
  /

POST
- /api/auth/signup
- /api/auth/signin
  to implement
    - new high score 
      - middleware to check if score is higher first
      - maybe also add middleware to check validity of score?

# Database
models
  - users
  - roles
  - songs
  - scores


Directories
  - migrations - contains migration scripts to manage the versioning of the schema
  - seeders - contains scripts to populate your database with initial data

TODO 
  - Create mock sqllite database -> 
  - How jwts are currently being stored --> keep out of database?