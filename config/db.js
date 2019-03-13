import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA794dOjcT7YzO1whG3TfOMOV4Ld4B0AZ0",
    authDomain: "vuedeathpool.firebaseapp.com",
    databaseURL: "https://vuedeathpool.firebaseio.com",
    projectId: "vuedeathpool",
    storageBucket: "vuedeathpool.appspot.com",
    messagingSenderId: "803443479323"
  };
  firebase.initializeApp(config)
  export const db = app.database()