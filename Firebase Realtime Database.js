
  <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase.js"></script>
   <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
  <script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzvhjwAXIRkUPA4WdkP8D1jAECYPGVWak",
    authDomain: "my-website-e18f2.firebaseapp.com",
    databaseURL: "https://my-website-e18f2.firebaseio.com",
    storageBucket: "my-website-e18f2.appspot.com",
  };
  firebase.initializeApp(config);

   var database = firebase.database();

   var storage = firebase.storage();
</script>
  <script>
  
// Save Data on the Web

var userId= '201620020';
firebase.database().ref('users/' + userId).set({
    username: 'Ahamd Osama',
    email: 'Ahamd.23@gmail.com'
  });
  
  
// Retrieve Data on the Web

var userId= '201620020';
firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
 
console.log('Username : '+snapshot.val().username

 +' & '+ 'Email : '+snapshot.val().email);
});






// These rules give anyone, even people who are not users of your app,
// read and write access to your database
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
