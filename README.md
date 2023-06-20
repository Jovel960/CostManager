Cost Manager Backend Project !

Getting Started with "npm install"

Dependencies added with NPM install:
dotenv
express
moment
mongoose
nodemon

Available Scripts:
"start": "node index.js": This script is executed when you run the command npm start in your project's directory. It starts the Node.js application by running the index.js file using the node command. Essentially, it launches your application's main entry point.

"dev": "nodemon index.js": This script is used during development and is executed when you run the command npm run dev in your project's directory. It also starts the Node.js application by running the index.js file, but it uses a tool called Nodemon. Nodemon is a utility that monitors changes to your files and automatically restarts the Node.js application whenever a change is detected. This enables a faster development workflow as you don't have to manually restart the application every time you make a code change.

Available Routes:
/about - returns information about the developers wrapped in array filled with objects.
/addcost - used to add new cost saved in db. each cost need to include these properties : "user_id","year","month","day","description","category","sum"
/report - used to get full report of all the cost according to user id, year and month . the information need to be included in the query string.
e.g URL/report?year=2023&month=6&user_id=632578
/api/users - used to handle the users saved in db, use to add delete and get users.
