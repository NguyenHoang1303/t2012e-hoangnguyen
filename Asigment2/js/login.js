const API_DOMAIN = "https://2-dot-backup-server-003.appspot.com";
const LOGIN_PATH = "/_api/v2/members/authentication";
var  isValidate = false;

var btnSubmit = document.forms["login-form"]["btn-submit"];
var txtEmail = document.forms["login-form"]["email"];
var txtPassw = document.forms["login-form"]["password"];
var msgEmail = document.querySelector(".msg-eror-email");
var msgPass = document.querySelector(".msg-eror-psw");


btnSubmit.onclick = function () {
    valdate();
    if (isValidate = true){
        var email = txtEmail.value;
        var password = txtPassw.value;
        var sendData = {
            email : email,
            password : password,
        }

        var jsonData = JSON.stringify(sendData);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4){
                if (this.status === 201){
                    var responseOject = JSON.parse(this.responseText);
                    sessionStorage.setItem("token_key", responseOject.token)
                    alert(`login thanh cong,token la ${responseOject.token}`)
                }
                else {
                    console.log("That bai");
                    console.log(this.responseText);
                }
            }
        }
        xhr.open("POST", API_DOMAIN + LOGIN_PATH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonData);
    }

}


function valdate() {
    if (txtEmail.value.length === 0){
        msgEmail.innerText = "Please enter email!!";
        isValidate = false
    } else if(txtPassw.value.length === 0){
            msgPass.innerText = "Please enter password";
            isValidate = false
        } else {
            isValidate = true;
            msgEmail.innerText = "";
            msgPass.innerText = "";
        }
    }
