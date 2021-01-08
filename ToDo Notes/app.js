var input = document.getElementById("input");
var todotext = document.getElementById("todotext");
var value = input.value

firebase.database().ref("notes").on("child_added",function(data){

    var li = document.createElement("li");
    li.setAttribute("class", "list")
    var text = document.createTextNode(data.val().text);
    li.appendChild(text);
    todotext.appendChild(li);
    

    var btn1 = document.createElement("button")
    var btn1Text = document.createTextNode("Edit")
    btn1.setAttribute("class","btn1")
    btn1.setAttribute("class",data.val().key)
    btn1.setAttribute("onclick","btn1func(this)")
    btn1.appendChild(btn1Text)
    li.appendChild(btn1)
     

    var btn2 = document.createElement("button")
    var btn2Text = document.createTextNode("Delete")
    btn2.setAttribute("class","btn2")
    btn2.setAttribute("id",data.val().key)
    btn2.setAttribute("onclick","btn2func(this)")
    btn2.appendChild(btn2Text)
    li.appendChild(btn2)


})



function addfunc() {

    var value = input.value

    key = firebase.database().ref("notes/").push().key
    
    firebase.database().ref("notes").child(key).set({
        text: value,
        key: key
    })
    

    
    input.value = "";
}

function deletall() {
    todotext.innerHTML = "";
    firebase.database().ref("notes/").remove()
}

function btn1func(button){
    var listvalue = button.parentNode.firstChild.nodeValue
    var promptvalue = prompt("Edit your List",listvalue )
    button.parentNode.firstChild.nodeValue = promptvalue;
    firebase.database().ref("notes").child(button.class).set({
        text: button.parentNode.firstChild.nodeValue,
        key: button.class
    })
    
}

function btn2func(button){
    var del =  button.parentNode;
    firebase.database().ref("notes").child(button.id).remove();
    del.remove();  
}

