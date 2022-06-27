// GET
let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://oxfords.online/api/AddPhotoToHWResponse');
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
xhr.open("POST", 'http://oxfords.online/api/AddPhotoToHWResponse');
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

