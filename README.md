# Project 3

## Requirements

- App is fully deployed (both front and back)
    - Backend using `Heroku`
    - Frontend using `github`
- Include a 'planning/' directory
    - paragraphs addressing the general approach you took
    - link to user stories - who are your users? what do they want? why?
    - link to the React Architectures - diagram of your React Architecture
    - link to your wireframes
    - link to your time/priority matrix
    - table including functionality and estimated/actual time for completion
    - descriptions of any unsolved problems or hurdles your team had to overcome
- README that adequately documents the project
- roughly equal commit history between team members
- a Team page to show-case each team member's picture, passion, and contribution to the project
- two separate repos, one for back, one for front

### Back-End Requirements

- Node, Express, and Mongoose API with at least 2 models, more if needed, and one association
- must have CRUD (create, read, update, delete) functionality throughout the project (where it makes sense)
- repository should include
    - working JSON API (built by your team using `Express` and `Mongoose`)
    - frequent commits dating back to the beginning of the project
    - 

### Front-End Requirements

- Must use React and leverage the backend API
- Must use React Router to handle multiple views
- Must communicate with the back-end API RESTfully to CRUD resources (using either `fetch` or `axios` )


***

## Project Description

- Work out app
    - A workout app where users can input their own workouts, each workout can be divided into two types, cardio and weight-lifting. Weight-lifting workouts will include a section for workout, reps and sets and each cardio workout will include a workout, distance, time. Users can also add a description for each workout.

### Workout Schema

| name | duration | exercise |
| -------- | :------: | ------------- |
| chest | 1 hour | push up, bench press, incline press |
| back | 1 hour | pull up, deadlifts, upright rows |

***

## Wireframes
![- Wireframe](https://miro.com/app/board/uXjVOHItXT8=/?invite_link_id=213180188513)
![Wireframe](./Images/MobileWireframe.jpg)
![Wireframe](./Images/DesktopWireframe.jpg)





## Minimum Viable Product (MVP/Post MVP)

- 'Planning' directory
    - general approach
    - link to user stories
    - link to the React Architectures
    - link to wireframes
    - link to time/priority matrix
    - table including functionality and estimated/actual time for completion
    - descriptions of any unsolved problems or hurdles that were overcome
- README.md that adequately documents the project
- Team page

### MVP Backend

- Backend Framework
- Exercise DB
- User DB
- Testing API
- Deployment to Heroku

### MVP Frontend

- Landing Page
- Form for entering user info
- Home page 
    - displays user data
    - add workouts
    - list 
- Testing App
- Deployment to Github

### Post MVP 

- Workouts by day of the week
- Separate workout types 
- Goal reps and sets vs accomplished


### Team Page 
Our team decided to mob-program for the majority of the project. We each contributed in part to the back and front end. Corey and Garrett made huge contributions to the front end, implanting fetch methods for CRUD application and creating the necessary components.

    Garrett: Created our exercise form, enabling us to add exercises to each workout which was an essential part of our application. Helped create our models and controllers on the back-end and designed our time-priority matrix.
    Corey: Contributed to our models on the back-end and created our front-end layout, including the form and workout components, while also using bootstrap to make the front-end application more user-friendly.
    Isaiah: Created our seed data and a script to initialize it, and made major contributions with problem solving on the back-end and redesigned the app with CSS.
    Robert: Presented the team with the initial project concept, created our wireframe designs, and the routes for the Workout controller on the back-end

***

## Components

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------: | :------: | :------: |
**MVP**
| Planning Directory | High | 4.5hrs |
| - general approach | High | 30min |
| - wireframes | High | 45min |
| - React Architectures | High | 45min |
| - user stories | High | 30min |
| - time/priorities matrix | High | 45min |
| - functionality, estimated/actual time table | High | 45min | 
| - problems/hurdles description  | Medium | 30min |
| README | High | 2hrs |
| Team Page | High | 1.5hrs |
**MVP Backend**
| Backend Framework | High | 45min |
| MongoDB | High | 2 |
| API testing | High | 4 |
| Backend Deployment to Heroku | High | 1hr |
**MVP Frontend**
| React Framework | High | 1hr |
| Landing Page | High | 1hr |
| Home page | High | 2.5hrs | 
| App Testing | High | 4 |
| Frontend Deployment to Github | High | 2.5hrs | 
**Post MVP**
| CSS - beyond basic | Low | 3 |
| Workouts by day of the week | Low | 4 |
| Separate workout types (cardio vs weights) | Low | 3 |
| Goal reps and sets vs accomplished | Low | 5 |
