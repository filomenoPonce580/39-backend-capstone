# WeLoveMovies Backend Application

WeLoveMovies is an application that allows users to view movie information such as theaters, reviews, and reviewer information.

API accessed at:
https://three9-backend-capstone.onrender.com/

For the frontend, please visit this (https://github.com/Thinkful-Ed/starter-movie-front-end).

# Getting Started
To get started with this project, follow these steps:

Clone this repository to your local machine using git clone https://github.com/filomenoPonce580/welovemovies-server.

Navigate to the project directory using cd welovemovies-backend.

Install the required dependencies using npm install.

Start the development server using npm run start:dev or npm start.

Create a .env file and set DATABASE_URL = "" to your database url.

Run the knex migrations with npm knex migrate:latest

Seed your database with npm run seed

# API Calls

# API Calls

### Path: /movies

**GET** 
> Lists data of all movies in database.

### Path: /movies/{movieId}

**GET** 
> Lists data of specified movie.

### Path: movies/{movieId}/reviews

**GET** 
> Lists data of all reviews of the specified movie.

### Path: movies/{movieId}/reviews/{reviewId}

**GET** 
> Lists data of the specified review of the specified movie.

**DELETE**
> Deletes the specified review.

### Path: movies/{movieId}/theaters/

**GET** 
> Lists data of the theaters in which the specified movie is showing.

# Running Tests
This project includes a set of tests that can be run using the command line. To run the tests, use the command npm test.

# Project Takeaways
During the project, I gained several key takeaways, including:

Creating and using standard middleware packages
Implementing error handlers for non-existent routes and incorrect requests
Building an API following RESTful design principles
Building and receiving requests through routes

# Author
This project was created by Filomeno Ponce in association with Thinkful.
