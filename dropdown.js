var menutoggle = 0;
document.getElementById("dropdown_button").onclick = function(){
    if (menutoggle == 0){ 
        document.getElementById("menu").style.visibility = "visible";
        menutoggle = 1;
    } else {
        document.getElementById("menu").style.visibility = "hidden";
        menutoggle = 0;
    }
}