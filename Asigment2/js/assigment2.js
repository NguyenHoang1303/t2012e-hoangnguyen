const API_DOMAIN = "https://2-dot-backup-server-003.appspot.com";
const REGISTER_PATH ="/_api/v2/members";


var btnSubmit = document.forms["register-form"]["btn-submit"];
var txtFirstName = document.forms["register-form"]["firstName"];


var txtLastName = document.forms["register-form"]["lastName"];
var txtAreaAddress = document.forms["register-form"]["address"];
var phoneNumber = document.forms["register-form"]["phone"];
var txtBirthday = document.forms["register-form"]["birthday"];
var selectGender = document.forms["register-form"]["gender"];
var txtAvatar = document.forms["register-form"]["avatar"];
var txtEmail = document.forms["register-form"]["email"];
var txtPassw = document.forms["register-form"]["password"];
var txtPasswRepeat = document.forms["register-form"]["password-repeat"];

btnSubmit.onclick = function () {
    var firstName = txtFirstName.value;
    var lastName = txtLastName.value;
    var address =  txtAreaAddress.value;
    var phone = phoneNumber.value;
    var birthday = txtBirthday.value;
    var gender = selectGender.value;
    var avatar = txtAvatar.value;
    var email = txtEmail.value;
    var password = txtPassw.value;
    var passwordRepeat = txtPasswRepeat;
    var sendData = {
        firstName : firstName,
        lastName : lastName,
        password : password,
        address : address,
        phone : phone,
        avatar : avatar,
        gender : gender,
        email : email,
        birthday : birthday
    }
    var jsonData = JSON.stringify(sendData);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4){
            if (this.status === 201){
                var responseOject = JSON.parse(this.responseText);
                alert(`dang ki thanh cong, id cua ban la ${responseOject.id}`)
            }
            else {
                alert("dang ki that bai,Vui long dang ki lai")
                console.log(this.responseText);
            }
        }
    }
    xhr.open("POST", API_DOMAIN + REGISTER_PATH);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
}