# yaatri-backend
Node.js & Express CRUD API
This project is a basic backend API built using Node.js and Express to perform CRUD (Create, Read, Update, Delete) operations on a database.

Features
Create: Add new data to the database.
Read: Retrieve data from the database.
Update: Modify existing data in the database.
Delete: Remove data from the database.
Setup
To set up this project locally, follow these steps:

Prerequisites
Node.js installed on your machine.
npm (Node Package Manager) to manage dependencies.
Installation
Clone the Repository:
> git clone https://github.com/tushar-glitch/yaatri-backend.git
? cd your-repository
Install Dependencies:
npm install
Start the Server:
> node index.js
Testing the Endpoints:

Use tools like Postman or curl to test the following CRUD endpoints:
GET /users - Returns a list of all users.
GET /users/<id> - Returns the user with the specified ID.
POST /users - Creates a new user with the specified data.
PUT /users/<id> - Updates the user with the specified ID with the new data.
DELETE /users/<id> - Deletes the user with the specified ID.

Technologies Used
Node.js
Express