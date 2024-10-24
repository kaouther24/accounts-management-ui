# Project Name

> "A banking application built with React and Redux for managing customer accounts."

## Overview

This project is a web application built with React and Redux, designed to manage customer accounts and transactions. It allows users to create new accounts, fetch customer details, and update account information.

### Features

- Create a new customer account with balance and UUID.
- Fetch and display customer details.
- Handle API errors and display relevant messages.
- Form validation for user inputs.

## Technologies Used

- **Frontend**: React, Redux, React-Redux, Axios
- **Backend**: Spring Boot (Java)
- **Middleware**: Redux Thunk for handling asynchronous actions
- **Styling**: CSS 
- **JavaScript Libraries**: Lodash, Big.js

## Setup and Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kaouther24/accounts-management-ui
   cd accounts-management-ui

2. **Install dependencies**:
   ```bash
   npm install

3. **Start the development server**:
   ```bash
   npm start

## Available Scripts

- **npm start**: Starts the development server
- **npm test**: launches the test runner in the interactive watch mode
- **npm run build**: Builds the app for production

## Project Structure
accounts-management-ui/
├── public/
├── src/
│   ├── actions/          # Redux action creators
│   ├── components/       # React components
│   ├── reducers/         # Redux reducers
│   ├── store/            # Store configuration and middleware setup
│   ├── styles/           # CSS or styling files (if applicable)
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point for the React application
│   └── ...               # Other files and folders
├── package.json
└── README.md

## License
This project is licensed under the MIT License. 