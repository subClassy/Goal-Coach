# Goal Coach

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/himank-goel/Goal-Coach/blob/master/LICENSE)

Goal Coach is responsive [React](http://facebook.github.io/react/index.html) and [Redux](https://redux.js.org/) app with authentication and database from [Firebase](https://firebase.google.com/) to allow users to add tasks and mark them as completed.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Demo
[Goal Coach - Live DEMO](https://himank-goel.github.io/Goal-Coach/)

## Tools
Key tools used in this React project are:

* [React](http://facebook.github.io/react/index.html)
* [Redux](https://redux.js.org/)
* [Firebase - Realtime Database](https://firebase.google.com/products/realtime-database/)
* [Firebase - Authentication](https://firebase.google.com/products/auth/)
* [React Router - v3](https://github.com/ReactTraining/react-router)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Bloomer](https://bloomer.js.org/)
* [React Tabs](https://github.com/reactjs/react-tabs)
* [Create-React-App](https://github.com/facebookincubator/create-react-app)

## Installation
[node.js](http://nodejs.org/download/) is required to get ``npm``.

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone https://github.com/himank-goel/Goal-Coach.git`
2. `cd Goal-Coach`
2. Install packages: `npm install`
3. Start dev server: `npm start`
4. Open your browser at: `http://localhost:3000`

## Firebase Setup

1. Go to the [Firebase](http://firebase.com/) website and sign up or log in
2. Go to the [Firebase console](https://console.firebase.google.com/) and make a new project
3. Click **Add project**
4. Choose a name and a location
5. Click **Add Firebase to your web app** 
6. Copy the **config** variable and replace it in the *src/firebase.js*

## Enabling Authentication on Firebase

1. Go to the [Firebase console](https://console.firebase.google.com/)
2. Choose the previously made project
3. Open **Develop** options on the sidebar
4. Choose **Authentication** and under *Sign-in Methods* enable **Email/Password** 
5. Click Save
 > **Note:**  
   >  To enable OAuth using Google and Facebook follow the links and read **Before you Begin**:
 >  >For [Google](https://firebase.google.com/docs/auth/web/google-signin#before_you_begin)  
 >  >For [Facebook](https://firebase.google.com/docs/auth/web/facebook-login#before_you_begin)
  
## Browser Support

- Chrome 42+
- Firefox 39+
- Safari 10+ 
- Internet Explorer 11+ 
- Edge 14+

## Node.js
Supports LTS version (v8).

## Author
[Himank Goel](https://himank-goel.github.io/Portfolio-Website/)

## License
[MIT](https://github.com/himank-goel/Goal-Coach/blob/master/LICENSE)
