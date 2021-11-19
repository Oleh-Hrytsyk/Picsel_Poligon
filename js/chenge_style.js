/*function all_style(){
    var light=document.getElementById("chande_light_style");
    var dark=document.getElementById("chande_dark_style");
    var clight=document.getElementById("contact_light_style");
    var cdark=document.getElementById("contact_dark_style");
    var lloupe=document.getElementById("light_loupe");
    var dloupe=document.getElementById("dark_loupe");
    var main=document.getElementById("main");
    var changes=document.getElementById("change_style");

    if(light.style.display !='block'){
        light.style.display = "block";
        dark.style.display ="none";
        clight.style.display = "block";
        cdark.style.display ="none";
        lloupe.style.display = "block";
        dloupe.style.display ="none";
        main.style.backgroundColor="rgb(245, 245, 245)";
        changes.style.backgroundColor="rgb(235, 235, 235)";
    }
    else{
        light.style.display ="none";
        dark.style.display ="block";
        clight.style.display ="none";
        cdark.style.display ="block";
        lloupe.style.display ="none";
        dloupe.style.display ="block";
        main.style.backgroundColor="rgb(030, 030, 030)";
        changes.style.backgroundColor="rgb(020, 020, 020)";
    }
}

all_style();/**/ 
window.onload = function(){
    if(localStorage.getItem('changes_style')!=null){
        changes_style=localStorage.getItem('changes_style')
        document.getElementById("css_style").href = changes_style;
        console.log(0);
  }
}
function all_style(){
    var light=document.getElementById("chande_light_style");
    var dark=document.getElementById("chande_dark_style");
    var styles=document.getElementById("css_style");
    if(light.style.display == "none"){
        dark.style.display ="none";
        light.style.display = "block";
        styles.href = "css/style.css";
         console.log(2);
    }
    else{
        light.style.display ="none";
        dark.style.display ="block";
         styles.href = "css/style_black.css";
         console.log(4);
    }
    changes_style = styles.href;
    localStorage.setItem('changes_style', changes_style);
}
/**/
