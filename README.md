# funkin-api

An express app with authorization, authentication and a simple database.

JWT Authentication Middleware: verify SignUp, verify token
Authorization Middleware: check User’s roles with record in database

Ultimately, the goal for this API would be to serve many concurrent users in a way that isn't resource intensive for the server. While this project uses SQLLite for a simple mock database, we would want to switch this to a database where we can pool connections. Depending on how complexity scales, it might also be beneficial to use something for caching.

# INSTALL
  Install the project with the `yarn` command. Then run `db-init`. This will seed your database with initial data so you can view the project.

# Test admin user
  username: boyfriend, password: idowhatiwant. Can also feel free to user any of the other users, listed in `app/seeders/initial-users`.

# ROUTES

GET 
- /
– /api/test/all for public access
– /api/test/user for loggedin users (role: user/moderator/admin)
– /api/test/admin for users having admin role

– /api/query/scores for all user high scores
– /api/query/scores/:userid for specific user high scores
– /api/query/users for all users
– /api/query/songs for all songs

  to implement 
    - /api/test/user/:songid/neighbors
      would allow querying to show users with similar scores in songs

POST (have been implemented but need frontend to post username and password)
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
