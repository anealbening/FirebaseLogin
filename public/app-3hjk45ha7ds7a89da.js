function clearCookie (name) {
  document.cookie = name +'=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

function app(firebase) {
  var config = {
    apiKey: "AIzaSyAeCayXNP_MLp2Evf0NYkCsVaLIyObR5MY",
    authDomain: "storagedemoaneal.firebaseapp.com",
    databaseURL: "https://storagedemoaneal-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "storagedemoaneal",
    storageBucket: "storagedemoaneal.appspot.com",
    messagingSenderId: "411908610197",
    appId: "1:411908610197:web:946a3482a33ad3b436a39c"
  };
  var app = firebase.initializeApp(config);
  firebase.auth(app).setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
