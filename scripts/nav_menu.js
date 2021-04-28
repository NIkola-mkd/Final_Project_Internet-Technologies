"use strict";

//Update Menu navigation
function updateMenu() {
    
    if(document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius='0';
        document.getElementById('menu').style.borderBottomLeftRadius='0';
    }else{
        document.getElementById('menu').style.borderRadius = '0px';
    }
}
