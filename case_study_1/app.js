(function(){
    var drawerBtn = document.getElementById("drawerBtn");
    drawerBtn.addEventListener("click",drawerClick);
}());

function drawerClick(e){
    var drawerMenu = document.getElementById("menu");
    if (drawerMenu.classList.contains("shown")){
        drawerMenu.classList.remove("shown");
    }
    else{
        drawerMenu.classList.add("shown");
    }
}