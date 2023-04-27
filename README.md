# Sprint (DevOps Tool for students)

# v2.0
Last updated: 4/19/2023
AGDev43 (L2_43)
authors: samyak, mark, manisha, allen, irving

# Quick start
This repository contains two folders. To run the front-end, clone the repository and cd into the front-end folder.
Then:
`npm ci`
`npm start`

To access the chatroom feature, open a new terminal in the same directory and type
`npm run server`

The backend is not run. Rather, it is a storage to show the current back-end code running on the docker services. 

# Description
These are the current features of the product:
1. login and logout with google (no signup yet, mark working on it)
2. login-protect all app-pages
3. taskboard (add new tasks, retreive tasks not working yet but manisha working on it)
4. story poker (ui ready, backend in progress samyak and casilda)
5. post any query to db
6. chatroom (over same network only).


# Problems
1. Story poker not yet connected to db
2. chatroom only works on same netowork currently. Will have to host express server somewhere else for public access (maybe on csl docker but need to research)
3. cookies sometimes act funny
Update this section with known bugs, suggestions, problems etc.
