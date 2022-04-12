# Social Networking App
A simple social networking app which shows feeds with user profile

# How to run?
- Try to clone the project by writing the command git clone https://github.com/m-ata/social-networking-app.git
- For backend, please run following command
  * cd backend
  * npm install
  * npm run dev (It will start nodejs server)
- For frontend, please run following commands
  * cd frontend
  * npm install
  * npm start (It will start webpack server)
 - For docker, please run docker-compose up at the root of the folder. 

# Implementation Details

# Backend
- Class based architcture has been implemented.
- When you run the server, it will automatically create db and corresponding collections. For the sake of testing, I have added two json data under backend/data 1. posts.json 2. users.json. You can import it to your local DB.
- Routes, Controllers & Models are created separately for the sake of more structures code.

# Frontend
- Created my own boilerplate using webpack (I didn't use CRA)
- Routing is implemented using v6 Router
- We have two pages Posts and Profile. Posts is showing all the posts which are exist in our DB and by clicking on profile icon or name, it will redirect to user-profile page.
- Context-API has been implemented. I have used Loader logic with context api since the main purpose of context is to set the data globally but the data shouldn't be more dynamic.
- WithLoader HOC is implemented to apply Loader to any component. I am applying it to both of the pages.
- Types are implemented to strictly check types.
- I am using axios to integrate frontend with the backend.

# Dockerization
- Separate Dockerfile is created for both frontend and backend
- I have written docker-compose to run the services for frontend, backend and mongodb(built-in)
