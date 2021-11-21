var registration_btn = document.getElementById("submit_sign_up");

function validate(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password1 = document.getElementById("password");
    var password2 = document.getElementById("repeat_password");
    var message = "";
    //var registration_btn = document.getElementById("submit_sign_up");  ЗМІННІ ДЛЯ РОБОТИ З ФАЙЛАМИ
    //var registration_btn = document.getElementById("submit_sign_up");
    if(username.value.length < 2 || username.value.length > 14){
        message+="Username is not valid\n";
    }
    if(!email.value.match(/\S+@\S+\.\S+/)){
        message+="Email is not valid\n";
    }
    if(password1.value.length < 8 || password1.value.length > 12){
        message+="Password is not valid\n";
    }
    if(password1.value != password2.value){
        message+="Passwords is not equal";
    }
    if(message == ""){
        //TODO: перехід до сторінки користувача
    }
    else{
        alert(message);
    }
}