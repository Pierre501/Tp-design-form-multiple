const iconsLogin = document.getElementById("icons_login");
const motDepasse = document.getElementById("motDepasse");
let conditionIconMdp = false;

iconsLogin.onclick = function(){
    if(conditionIconMdp == false){
        iconsLogin.setAttribute("class", "fa fa-eye icon-size icon-position");
        motDepasse.setAttribute("type", "text");
        conditionIconMdp = true;
    }else{
        iconsLogin.setAttribute("class", "fa fa-eye-slash icon-size icon-position");
        motDepasse.setAttribute("type", "password");
        conditionIconMdp = false;
    }
}
