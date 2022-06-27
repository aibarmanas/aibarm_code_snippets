//From stackoverflow
// Turn pictire into base64 format
function toDataURL(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

toDataURL(`someurl here`, function(dataUrl) {
    console.log('RESULT:', dataUrl)
});