# Node Sample API
NodeJS and Express API example

## Description
Simple CRUD API that manages users

## Installation
1. Clone the application
2. Navigate to the directory where it is located
3. Run in terminal `npm install` which will install all the dependencies
4. To run the app, run in terminal `npm start` which will execute the app on Port 3000

## Usage

### Listing users
Make a GET request to `localhost:3000/users`

### Get only one user
Make a GET request to `localhost:3000/users/:id`

### Add a new user
Make a POST request to `localhost:3000/users`
The body of the user should look like:
```
{
	"name": "Name of the user"
}
```

### Update a user by ID
Make a PUT request to `localhost:3000/users/:id`
The body of the user should look like:
```
{
	"id": "ID of the user to be updated",
	"name": "Name of the user"
}
```

### Delete a user by ID
Make a DELETE request to `localhost:3000/users/:id`