# yaatri-backend
Node.js & Express CRUD API
This project is a basic backend API built using Node.js and Express to perform CRUD (Create, Read, Update, Delete) operations on a database.

Features__
Create: Add new data to the database._
Read: Retrieve data from the database._
Update: Modify existing data in the database._
Delete: Remove data from the database._
Setup_
To set up this project locally, follow these steps:___

Prerequisites__
Node.js installed on your machine._
npm (Node Package Manager) to manage dependencies._
Installation_
Clone the Repository:_
### `git clone https://github.com/tushar-glitch/yaatri-backend.git`_
### cd yaatri-backend
Install Dependencies:_
npm install_
Start the Server:_
### node index.js_
Testing the Endpoints:__

Use tools like Postman or curl to test the following CRUD endpoints:_
GET /users - Returns a list of all users._
GET /users/<id> - Returns the user with the specified ID._
POST /users - Creates a new user with the specified data._
PUT /users/<id> - Updates the user with the specified ID with the new data._
DELETE /users/<id> - Deletes the user with the specified ID._

Technologies Used_
Node.js_
Express_