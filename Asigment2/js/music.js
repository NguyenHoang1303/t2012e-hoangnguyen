const API_DOMAIN = "https://2-dot-backup-server-003.appspot.com";
const MY_SONG_PATH = "/_api/v2/songs/get-mine";



alert(sessionStorage.getItem("token_key"));

var tokenKey = sessionStorage.getItem("token_key");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4){
        if (this.status === 200){
            console.log(this.responseText);
        }
        else {
            console.log(this.responseText);
        }
    }
}
xhr.open("GET", API_DOMAIN + MY_SONG_PATH);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
xhr.send();



