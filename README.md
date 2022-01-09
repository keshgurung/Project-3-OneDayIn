# Project- 3 Fullstack MERN Project - OneDayIn

A fullstack MERN group project developed with a group of 3.

A full hosted version of the project on netlify -->

## Goal

- Build a full-stack (MERN) application by making our own backend and front-end
- a fully functional RESTful api with all CRUD routes (GET, POST, PUT, DELETE)
- Use an Express API to serve our data from a Mongo database
- Consume our API with a separate front-end built with React
- Be deployed online so it's publicly accessible.

# Time Frame

9 days

## Technologies Used

- JavaScript (ES6)
- ReactJS
- MongoDB
- NodeJS
- Express
- BCrypt & JWT(JSON Web Token)
- Insomnia
- HTML5
- SAAS
- Bootstrap
- React Bootstrap
- GitHub
- Netlify

## Overview

OneDayIn is a full stack (MERN) group project developed with a group of 3. We created a full stack web application that will allow users to CRUD (create, read, update and delete) functionality on the application itself. The app allows users to view a city where they want to spend a day and view/add a recommendation to the city as well. They will be able to delete their comments, recommendations, as well as add a rating on other’s recommended places too. The backend of the app was developed with Node.js and Express framework, and the database used is MongoDB. The frontend was developed with React.js framework.

## Installation

1. Clone or download the repo
2. Goto directory frontend, and Run `yarn` in Terminal
3. Start the database by running `mongodb` in Terminal
4. Goto directory Backend, and Start the server by running `nodemon` in Terminal
   - Run the seed file with `yarn seed` in Terminal
   - Run webpack dev server with `yarn serve` in Terminal
5. In directory frontend, To view application run `yarn start` in Terminal

## Instruction

1. In the main page, click on menu and select register to create a new account.

![1](/assets/1.png)

2. User can log in to the website through login form after creating account.

![2](/assets/2.png)

3. Once logged in, User can view their profile, edit their profile and can view cities and recommendations too by going to city profile from the menu tab.

![3](/assets/3.png)

4. To add recommendation/ rating.. goto a city, and add a recommendation by selecting add recommendation button.

![4](/assets/4.png)

![4.1](/assets/4.1.png)

5. To edit/delete recommendations, click on the edit or delete tab in the recommended section. Users can only edit/delete recommendations made by them.

![5](/assets/5.png)

6. User can log out to end the session, non account users can view the cities and recommendations only but cannot add recommendations and ratings to the city.

![6](/assets/6.png)
