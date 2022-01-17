# Project- 3 Fullstack MERN Project - OneDayIn

A fullstack MERN group project developed with a group of 3 members. [Simon Clemson](https://github.com/sclemson) , [Kesh Gurung](https://github.com/keshgurung) , [James Rogers](https://github.com/james92rogers) .

This is my third project from the General Assembly course SEI-59.’

A full hosted version of the project on netlify --> https://onedayinjr.herokuapp.com/

## Goal

- Build a full-stack (MERN) application by making our own backend and front-end.
- a fully functional RESTful api with all CRUD routes (GET, POST, PUT, DELETE).
- Use an Express API to serve our data from a Mongo database.
- Consume our API with a separate front-end built with React.
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
- Heroku
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

1. In the main page, click on the menu and select register to create a new account.

![1](/assets/1.png)

2. Users can log in to the website through a login form after creating an account.

![2](/assets/2.png)

3. Once logged in, Users can view their profile, edit their profile and can view cities and recommendations too by going to city profile from the menu tab.

![3](/assets/3.png)

4. To add recommendation/ rating.. goto a city, and add a recommendation by selecting add recommendation button.

![4](/assets/4.png)

5. The added recommendation can be viewed on the city screen now. To edit/delete recommendations, click on the edit or delete tab in the recommended section. Users can only edit/delete recommendations made by them.

![5](/assets/5.png)

6. Users can log out to end the session, non account users can view the cities and recommendations only but cannot add recommendations and ratings to the city.

![6](/assets/6.png)

## Process

### Planning:

- Day 1

Our project was planned, organized and managed using the Trello app. We started our project by creating wireframes for our application and decided the core functionalities the application should have, as a group.

![w1](/assets/w1.png)

After that, We discussed the RESTful routes, and the endpoints that will be used in the project.

```
Endpoints/Pages

Home page
Act as a landing page for the site
Won’t need an api endpoint

About Page
A small intro to what the project is about
Links to our portfolios

Get /cities
Our grab all endpoint that displays all the cities that are within our db
We can sort this based on criteria set by user if they wish
Displays limited information on each place
This would also include post /cities to add a new city to the db

Get /cities/:id
Displays all the information about a selected city
This will be the page where we can also link to comments (/cities/:id/comments)
If you were the creator of this city you would have the option to edit or delete here as well
Users can also post their own recommendations

Endpoints included in this would be:
Get /cities/:id
Delete /cities/:id
Put /cities/:id
Post /cities/:id/recommendations/type

Post /register
This page will have a form where the user can register an account

Post /login
This page is where the user can log in
If user is logged in, this page option on the nav will actually say log out instead

Get /profile/:id
This page will be a user profile where we can see what they’ve contributed
Mini-stretch - we want to be able to click on a user in the comments and see their profile and their contributions etc etc



Stretch Goals
On the user profile you achieve different levels of membership based on what you contribute
e.g offering 10 recommendations moves you to a silver user
Building a city for us makes you gold
(To make this possible we would need to have in the user Schema a field for recommendations and cities)

```

We also created an initial database schema for project. Creating the database schema gave us the structure of the database models, the application will require for the Model-view-controller(MVC) methodology.

```
** Schema **

* City Schema *

const citySchema = new mongoose.Schema({
image:
name: { type: String, unique: true, required: true },
country: { type: String, required: true },
overview: { type: String, required: true, maxlength: 300 },
primary language: { type: String, required: true },
eat: { type: String, required: true, maxlength: 300 },
drink: { type: String, required: true, maxlength: 300 },
see: { type: String, required: true, maxlength: 300 },
stay: { type: String, required: true, maxlength: 300 },
walk: { type: String, required: true, maxlength: 300 },
secret: { type: String, required: true, maxlength: 300 },
comments: [commentSchema]
})

* Comment schema *

const commentSchema = new mongoose.Schema({
recommendation: { type: String, required: true }
review: { type: String, required: true, maxlength: 300 },
price: { type: ???}`
valueRating: { type: Number, required: true, min: 1, max: 5 }
qualityRating: { type: Number, required: true, min: 1, max: 5 }
})

```

Trello app was used to manage the project and assign task to an individual. We also had daily stand-up three time a day in the morning, before lunch and before we went home to keep track of the application progress.

![w2](/assets/w2.png)

Each feature was implemented by creating a separate git branches on our local computer before merging into the main development branch. We also established a few sets of rules for using Git:

- Don't push broken code to the main git branch.
- Resolve git conflict as a group.
- Notify the team before starting the process to push the features.

### Project Development

- Day 2 - 4:

Backend: We first started with developing from the backend of the project. All the members worked together to create the backend,where one of the members shared their screen and others talked through the process and functionality that needs to be added. We would then rotate our turns so that every member gets chance to work with the backend. We used NodeJs and Express framework for our server-side programming. We used MongoDB, a NoSQL database management system, to store our data in the database. To test the endpoints with REST API, we used insomnia to get the desired outputs. We also created a separate seed file that will be used everytime we run our server. The purpose of the seed file was to see if the back-end would render data as expected and would be easier to test using Insomnia.

** Testing endpoints on insomnia **

![b1](/assets/b1.png)

** Adding each endpoints to routes **

```
import express from 'express'
import { getAllusers, getUserProfile, editUserProfile } from '../controllers/users.js'

const router = express.Router()

router.route('/users').get(getAllusers)
router.route('/users/:id')
  .get(secureRoute, getUserProfile)
  .put(secureRoute, editUserProfile)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

export default router

```

** Connecting to mongodb database **

```
export const port = 4000
export const dbURI = 'mongodb://127.0.0.1:27017/onedayin'
export const secret = 'Ind1@n@J0ne5'

```

My task was to work with getting user details and edit/update user database on the back end. The use of async functions made it easier for me to get user data from the backend.

```
import User from '../models/user.js'

export const getAllusers = async (_req, res) => {
  const users = await User.find()
  return res.status(200).json(users)
}

export const getUserProfile = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'not found' })
  }
}

export const editUserProfile = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndUpdate(id, req.body)
    const user = await User.findById(id)
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'not found' })
  }
}

```

** User schema **

```
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, maxlength: 30 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  recommendations: [],
  location: { type: String },
  bio: { type: String, maxlength: 200 },
  favouriteCity: { type: String }
  // number of contributions //
})

```

- Day 5 - 8 :

Frontend: To develop the frontend of the project, we decided to create a separete Git branch for each group member and work on the branch created separately. We splitted our workload among the group members. I started working on the login and sign up page for the users, as well as the footer page. Simon worked with creating the navbar using React Bootstrap and James worked with creating the cities component. The front-end of the application was developed using ReactJS, a JavaScript framework to work with our REST API. I used axios to make HTTP request to the back-end side of the application to retrieve data needed to render on our frontend.

** Making axios request to get user data **

```
export const getUserName = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/users/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }

  const response = await axios(config)
  return response.data
}

export const editUser = async (id, data) => {
  const config = {
    method: 'put',
    url: `${baseUrl}/users/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    data
  }

  const response = await axios(config)
  return response.data
}

```

I used useState(), useEffect() react hooks to set the user state while fetching data from our REST API.

** Getting User information to show on front-end **

```

const Profile = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  console.log(id)
  useEffect(() => {
    getUserName(id).then(setUser)
  }, [id])

  return (
    <section>

      {user ? (
        <div className='user-page'>
          <div className='user-info-welcome'>
            <h3>Hello {user.username}</h3>
          </div>
          <div className='user-info'>
            <h4>Account Details:</h4>
            <ProfileEditForm {...user}/>
          </div>
        </div>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
```

In the project, I contributed towards the development features on the users side and authorization. The authorization system included log-in, register, error handling on the user side, users indexRoute, users showRoute, users updateRoute and testing the users routes. I also contributed with the edit and update functionality of the user profile.(more in --> Wins Section)

- Day 9 :

The last day of the project, we focused on styling the project.

![b2](/assets/b2.png)

## Challenges

This was my first time working as a group using Git, therefore I had a lot of issues with merging branches and pushing them into the main branch.

Using express framework to link recommendation to the owner only and to make sure owner only can do the CRUD functionality, was a major challenge in our project's backend.

Another major challenge of the project was to authorize the user's identity and display the user information on the frontend.

## Wins

Fetching user's data from the backend and rendering on the frontend was a biggest win for me. To get the user profile, I used local storage to save the user profile id when the user logs in the application and retrieves it to render in the user profile component.

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

when a user logs in, using useState() react hook, I save theuser id information and that will help me in showing user information stored in the database.

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

Sorting the city based on alphabetical order was also a major win for me. I got to know about many array functions while developing the application, such as (map, filter, sort). Also, I got to learn more about the use of react hooks in state management in the project.

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

## Key Learnings

- Use of Git branches, and merging into main branch, working as a team.
- Use of different React Hooks, React Router.
- Create a RESTful API.
- Fetching data from backend to serve in the frontend.

## Future features

- Email validation and password reset of users.
- Users to follow other users.
- Users to message other users.
