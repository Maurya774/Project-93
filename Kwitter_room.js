
const firebaseConfig = {
    apiKey: "AIzaSyACzwpuYhfz2DEoLv_LgjpebXbsG-xyz78",
    authDomain: "project-93-68981.firebaseapp.com",
    databaseURL: "https://project-93-68981-default-rtdb.firebaseio.com",
    projectId: "project-93-68981",
    storageBucket: "project-93-68981.appspot.com",
    messagingSenderId: "807798774536",
    appId: "1:807798774536:web:4dce4932867f36d4bd6abd"
  };
  
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function add_room() {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname", room_name);

    window.location = "Kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) {
            Room_names = childKey;
       
    


});});}
getData()
    