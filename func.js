var count = 0
let add = function(){
    var a = document.getElementById("counter")
    count ++
    a.innerHTML = count
}


let reset= function(){
    var a = document.getElementById("counter")
    count = 0
    a.innerHTML = 0 
}