"use strict";

function logOut() {
    let logout = confirm("Do you want to log out ?");
    if(logout==true){
        document.location.href='menu/login.html';
        return true;
    }else{
        return false;
    }

}