const API_DOMAIN = "https://2-dot-backup-server-002.appspot.com";
const LOGIN_PATH = "/_api/v2/members/authentication";

var btnSubmit = document.forms["register-form"]["btn-submit"];
var txtEmail = document.forms["register-form"]["email"];
var txtPassw = document.forms["register-form"]["password"];

btnSubmit.onclick = function () {
    var email = txtEmail.value;
    var password = txtPassw.value;
    var sendData = {
        email : email,
        password : password,

    }
    var jsonData = JSON.stringify(sendData);
    // console.log(sendData);
    // console.log(JSON.stringify(sendData));
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4){
            if (this.status === 201){
                var responseOject = JSON.parse(this.responseText);
            }
            else {
                console.log("Thanh cong");
                console.log(this.responseText);
            }
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open("POST", API_DOMAIN + LOGIN_PATH);
    xhr.send();
}