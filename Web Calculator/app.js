function getnum(num){
      var screen = document.getElementById("screen")
       screen.value += num 
}
function getclear(){
      var screen = document.getElementById("screen")
       screen.value = ''; 
}
function getsolve(){
      var screen = document.getElementById("screen")
       screen.value = eval(screen.value)
}


