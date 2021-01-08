chattext = document.getElementById("chattext");
main = document.getElementById("main");
ul = document.getElementById("ul");


firebase.database().ref("chat/").on("child_added",function(data){

    var para = document.createElement("li")
    var text = document.createTextNode(data.val().value)
    para.appendChild(text)
    ul.appendChild(para)
    main.appendChild(ul)

});


function sendtext() {


    var key = firebase.database().ref("chat/").push().key

    firebase.database().ref("chat/").child(key).set({
        value: chattext.value,
        key: key
    });


    chattext.value = "";

    // console.log(chattext.value)    
}


function removetext(){
    main.innerHTML = "";
    firebase.database().ref("chat/").remove();
    
}

function login(){
    email = document.getElementById("email")
    password = document.getElementById("password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        console.log("Success==>" , user);
      })
      .catch((error) => {
        
        var errorMessage = error.message;
        console.log("Error==>", errorMessage);
    
        email.value = "";
        password.value = "";
      });
  
 
}


function signUp(){

email = document.getElementById("email")
password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    console.log("Success==>" , user);
  })
  .catch((error) => {
    
    var errorMessage = error.message;
    console.log("Error==>", errorMessage);

    email.value = "";
    password.value = "";
  });
}