var firebaseConfig = {
  apiKey: "AIzaSyBah_SvgDTvzHk30R4dTprz9PgNgtjBdFs",
  authDomain: "project-94-by-tvisha.firebaseapp.com",
  databaseURL: "https://project-94-by-tvisha-default-rtdb.firebaseio.com",
  projectId: "project-94-by-tvisha",
  storageBucket: "project-94-by-tvisha.appspot.com",
  messagingSenderId: "860019217151",
  appId: "1:860019217151:web:7e99524fd3ef47ecb2f2ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_page.html");
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "kwitter.html";
}