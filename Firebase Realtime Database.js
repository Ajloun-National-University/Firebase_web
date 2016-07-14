
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
  
  //------------------------------------
  var ID = 0;
ID = ID +1;
  firebase.database().ref('Chat/' + ID).set({
    from: 'Ahamd ',
    message: 'مرحبا كيف الحال'
  });
  
  
// Retrieve Data on the Web

var userId= '201620020';
firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
 
console.log('Username : '+snapshot.val().username

 +' & '+ 'Email : '+snapshot.val().email);
});

//-------------------------------------
  var ID = 0;
ID = ID +1;
firebase.database().ref('/Chat/' + ID).once('value').then(function(snapshot) {
 
console.log('from : '+snapshot.val().from

 +' & '+ 'message : '+snapshot.val().message);
});

//--------------------------------------------------
var commentsRef = firebase.database().ref('Chat/' );
commentsRef.on('child_added', function(data) {
 
console.log('message : ' + data.val().message );
});

commentsRef.on('child_changed', function(data) {
  console.log('message : ' + data.val().message );
});

commentsRef.on('child_removed', function(data) {
  console.log('message : ' + data.val().message );
});




// These rules give anyone, even people who are not users of your app,
// read and write access to your database
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
