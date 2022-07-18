function save (){
    db.collection("users").add({
        username: document.getElementById("username").value, 
        password: document.getElementById("password").value, 
    })
    .then((docRef) => {
        alert("Registration successful")
    })
    .catch((error) => {
        alert("Error in the registration")  
});
};


