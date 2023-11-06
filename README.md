# yaatri-backend
Node.js & Express CRUD API
This project is a basic backend API built using Node.js and Express to perform CRUD (Create, Read, Update, Delete) operations on a database.

Features__
Create: Add new data to the database.__
Read: Retrieve data from the database.__
Update: Modify existing data in the database.__
Delete: Remove data from the database.__
Setup__
To set up this project locally, follow these steps:____

Prerequisites__
Node.js installed on your machine.__
npm (Node Package Manager) to manage dependencies.__
Installation__
Clone the Repository:__
### git clone https://github.com/tushar-glitch/yaatri-backend.git__
### cd yaatri-backend
Install Dependencies:__
npm install__
Start the Server:__
> node index.js__
Testing the Endpoints:____

Use tools like Postman or curl to test the following CRUD endpoints:__
GET /users - Returns a list of all users.__
GET /users/<id> - Returns the user with the specified ID.__
POST /users - Creates a new user with the specified data.__
PUT /users/<id> - Updates the user with the specified ID with the new data.__
DELETE /users/<id> - Deletes the user with the specified ID.__

Technologies Used__
Node.js__
Express__