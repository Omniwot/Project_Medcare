# Medpedia

## Overview
This project is an implementation of Healthcare pricing engine that searches prices according to CPT codes of medical procedures or their description. We can also strore redacted versions of medical bills to collect pricing data from consumers using google cloud redaction engine.
The front-end of the project is built on ReactJS, Bootstrap and Reactstrap. The backend consists of firebase authentication and pricing database stored on mongo-DB cloud. The website fetches data from APIs created on mongo-DB realm.

The incentive of this project was to learn various tech-stacks and services used in back-end and front-end development


## Technologies
The following tech stacks were used in the project:

### Front-End
* Bootstrap 5
* ReactJS
* React-strap

### Back-End
* NodeJS (Overall base and API code)
* Mongo-DB (including mongo-DB Realm 3rd party services for API)
* Firebase(For Authentication)
* Google Cloud Services (To redact essential info from uploaded Bills)

### How to Run
1. Add firebase config of your firebase project in src/firebase/config.js
2. Use `npm start` in project directory to launch the react app. 
