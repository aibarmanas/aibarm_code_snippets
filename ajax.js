// GET
let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://someAPI');
xhr.responseType = 'application/json';
xhr.onreadystatechange = function() {
    if (this.status === 200){
        // Success scenario
        console.log(this)
    } else {
        // Failure scenario
        console.log(this)
    }
}
xhr.send();




// POST
// Create data
let data = new FormData();
data.append('key', "value here, usually a variable");


let xhr = new XMLHttpRequest();
xhr.open("POST", 'http://someAPI');
xhr.setRequestHeader('Content-Type', "application/text") // Alretnatively xhr.setRequestHeader('Content-Type', "application/json") or other content type
xhr.responseType = 'application/json';
xhr.onload = function() {
    if (this.status === 200){
        // Success scenario
        console.log(this)
    } else {
        // Failure scenario
        console.log(this)
    }
}
xhr.send(data);  //  Alternative send in JSON: xhr.send(JSON.stringify(data));

