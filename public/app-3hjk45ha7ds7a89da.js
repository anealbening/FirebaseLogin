function clearCookie (name) {
  document.cookie = name +'=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

function app(firebase) {
  var config = {
    apiKey: "AIzaSyDJE76ApbljnAdkCdu7HgYQMSr1dJ_cvWs",
    authDomain: "anealprofile.firebaseapp.com",
    databaseURL: "https://anealprofile-default-rtdb.firebaseio.com",
    projectId: "anealprofile",
    storageBucket: "anealprofile.appspot.com",
    messagingSenderId: "105114479682",
    appId: "1:105114479682:web:d24ede78b7799f302191db"
  };
  var app = firebase.initializeApp(config);
  firebase.auth(app).setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
