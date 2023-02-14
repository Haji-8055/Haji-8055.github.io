
//function express
let result = function add(a, b) {

    console.log(a + b)
}
result(10, 20)


//anonymous function

let ananmous = function () { //it doesnt have function name
    console.log("calling anonymous function");
}
ananmous()


// time function in javaScript 
//setTimeout - After a particular time,, function will be called
//setTimeInterval - for every specified time function will be called

function repeatTask() {

    console.log("prepare for interview ");
    alert("Perpare for inter")
    let a = prompt("enter name")
    document.write('<h1>' + a + '</h1>')
}

setTimeout(repeatTask, 2000)

setInterval(repeatTask,60000)