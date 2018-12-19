// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMIzEXuYHtoHMzOf_aJq5YEwg0xE8Dbhs",
    authDomain: "train-scheduler-f2f39.firebaseapp.com",
    databaseURL: "https://train-scheduler-f2f39.firebaseio.com",
    projectId: "train-scheduler-f2f39",
    storageBucket: "train-scheduler-f2f39.appspot.com",
    messagingSenderId: "658694027922"
  };

  firebase.initializeApp(config);

  var database = firebase.database();