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
- Trello

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

## Process

We started our project by creating wireframes for our appliation and decided the core functionalities, the application should have, as a group. We also discussed the RESTful routes, the structure of the database and models the application will required for the Model-view-controller(MVC) methodology. We use Trello app, to separate the work load efficiently to each group member. Individually, we created the front-end side, back-end side and test the chosen model, we choose this approach to avoid any major conflict with git in the future. I feel it was an efficient approach as it gave each member of the team experience developing on the front-end and the back-end side of the application.

---

Trello app was used to manage the project and assign task to an individual. We also had daily stand-up three time a day in the morning, before lunch and before we went home to keep track of the application progress. Each features were implemented by creating a separate git branches on our local computer before merging into the main development branch. We also establish few sets of rules for using git:

- don't push broken code to the main git branch
- resolve git conflict as a group
- notify the team before starting the process to push the features.

Back-end: We used NodeJs and Express framework for our server-side programming. We used MongoDB, a NoSQL database management system, to store our data in the database. To test the endpoints with REST API, we used insomnia to get the desired outputs. We also created a separate seed file that will be used everytime we run our server. The purpose of the seed file was to see if the back-end would render data as expected and would be easier to test using Insomnia.

Front-end: Front-end of the application was developed using ReactJS, a JavaScript framework to work with our REST API. We used axios to make HTTP request to the back-end side of the application to retrieve data, and these data were rendered using React.

In this project, I contributed towards the development features on the users side and authorization. The authorization system included log-in, register, error handling on the user side, users indexRoute, users showRoute, users updateRoute and tested the users routes. I also contributed with the edit and update functionality of the user profile.

## Challenges

This was my first time working as a group using Git, therefore i had a lot of issues with merging branches and pushing into main branch.

Using express framework to link recommendation to the owner only and to make sure owner only can do the CRUD functionality, was a major challenge in our backend project.

Another major challenge of the project was to authorize the user's identity and display the user information on the frontend.

## Wins

To get the user profile, i used local storage to save the user profile id when the user logs in the application and retreive it to render in the user profile component.

```
** setting functions to get/set/remove userid when user logs in **
export const getUserId = () => {
  return window.localStorage.getItem('userId')
}

export const setUserId = (userId) => {
  window.localStorage.setItem('userId', userId)
}

export const removeUserId = () => {
  window.localStorage.removeItem('userId')
}
```

when user logs in, using useState() react hook, i save theuser id information and that will help me in showing user informations stored in the database.

```
** importing setuser function ***
import { setToken, setUserId } from '../helpers/auth'

** saving user id when successful logged in **
const handleSuccessfulLogin = ({ token, userId }) => {
    setToken(token)
    setUserId(userId)
    setIsLoggedIn(true)
    setIsError(false)
    history.push('/')
  }
```

Sorting the city based on alphabetical order was also a major wins for me. I got to know about many array functions while developing the application, such as (map, filter, sort). Also, i got to learn more about the use of react hooks in state management in the project.

```
** using react hook useEffect(),useState() and sorting data **
 useEffect(() => {
    const getCityData = async () => {
      const allCities = await getCities()
      allCities.sort((a,b) => (a.name > b.name ? 1 : -1))
      setCities(allCities)
    }
    getCityData()
  }, [])

```

Adding a rating schema to a city schema, and then only adding city schema to user schema and using secureRoute option helped in the integrity of the application.

```

const ratingsSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  }
)

** Recommendation schema adding ratings and owner of the recommendation **
const recommendationSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    city: { type: String, required: true },
    cityname: { type: String, required: true },
    ratings: [ ratingsSchema ]
  },
  {
    timestamps: true,
  }
)

** finally adding recommendatons to a city **
const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  continent: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  recommendations: [recommendationSchema],
  thumbnailImage: { type: String, required: true },
  bannerImage: { type: String, required: true }
})

```

## Future features

- email validation and password reset of users
- users to follow other users
- users to message other users
