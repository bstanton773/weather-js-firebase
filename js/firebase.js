var firebaseConfig = {
    apiKey: "AIzaSyDOfg17PGSqOcCPVQTfmtDjRS9wl7Yjx40",
    authDomain: "employee-6a25d.firebaseapp.com",
    databaseURL: "https://employee-6a25d-default-rtdb.firebaseio.com",
    projectId: "employee-6a25d",
    storageBucket: "employee-6a25d.appspot.com",
    messagingSenderId: "965713996779",
    appId: "1:965713996779:web:8391315430352c6ad047ae",
    measurementId: "G-1WRYNMG6XY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// Get a reference to the database service
var database = firebase.database();
console.log(database);

database.ref().once('value')
.then(snapshot => snapshot.val())
.then(rawData => {
    console.log(rawData)

    employeesList = document.getElementById('employees');

    console.log(typeof(rawData))

    rawData.forEach(function (arrayItem, index) {
        firstName = rawData[index].firstName
        lastName = rawData[index].lastName
        employeesList.innerHTML += "<li>" + lastName + ", " + firstName + "</li>";
    })

    // for (let i = 0; i < rawData.length; i++){
    //     firstName = rawData[i].firstName
    //     lastName = rawData[i].lastName
    //     console.log(lastName,firstName)
    //     employeesList.innerHTML += "<li>" + lastName + ", " + firstName + "</li>";
    // };


});

function addHardData() {
    employeeList = document.getElementById('employees').getElementsByTagName("li")
    // console.log(employeeList.length)
    database.ref(employeeList.length).set({
        "id": 12,
        "firstName": "Ripal",
        "lastName": "Patel",
        "city": "Chicago",
        "state": "IL",
        "loggedIn": true,
        "skills": {
            "JavaScript": 1,
            "Python": 1,
            "SQL": 1,
            "React": 1,
            "Flask": 1
        }
    });
  };