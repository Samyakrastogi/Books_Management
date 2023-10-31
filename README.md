# Books_Management

This project is associated with the CRUD Operations on Books.

The user can add, delete and update books in the system.

We can Run the Project using : npm start
As we have implemented nodemon package in this project for re-running the server automatically.

We have not taken any major assumptions in this project.

The Model for the Books is following:
serialNo, title, author, summary, Cost 
where title, author and summary keys are considered to be REQUIRED.

Below are the Endpoints of the CRUD API's :

1) To Create A Book : POST Method
Endpoint - http://localhost:4200/books

2) To Get list of All Books : GET Method
Endpoint - http://localhost:4200/books

3) To Get A Book bu Id : GET Method
Endpoint - http://localhost:4200/books/:id (id as a param)

4) To Update A Book : PUT Method
Endpoint - http://localhost:4200/books/:id (id as a param)

5) To Delete A Book : DELETE Method
Endpoint - http://localhost:4200/books/:id (id as a param)

