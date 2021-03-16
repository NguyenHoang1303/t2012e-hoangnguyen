const API_DOMAIN = "https://2-dot-backup-server-003.appspot.com";
const CREAT_SONG_PATH = "/_api/v2/songs";

var tokenKey = sessionStorage.getItem("token_key");



var txtName = document["creatSong"]["name"];
var txtSinger = document["creatSong"]["singer"];
var txtAuthor = document["creatSong"]["author"];
var txtThumbnail = document["creatSong"]["thumbnail"];
var txtLink = document["creatSong"]["link"];
var btnSubmit = document["creatSong"]["btn-submit"];



btnSubmit.onclick = function () {
    var name = txtName.value;
    var singer = txtSinger.value;
    var author = txtAuthor.value;
    var thumbnail = txtThumbnail.value;
    var link = txtLink.value;
    var sendData = {
        name : name,
        singer : singer,
        author : author,
        thumbnail : thumbnail,
        link : link
    }
    var jsonData = JSON.stringify(sendData);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4){
            if (this.status === 201){
                var responseOject = JSON.parse(this.responseText);
                console.log(responseOject);
                alert("upload thanh cong")
            }
            else {
                alert("That bai");
                console.log(this.responseText);
            }
        }
    }
    xhr.open("POST", API_DOMAIN + CREAT_SONG_PATH);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
    xhr.send(jsonData);

}







