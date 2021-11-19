function checking(){
    var add=document.getElementById("upload");
    var checkbox=document.getElementById("checkbox");
    if (checkbox.checked) {
        add.style.display = "grid";
	}
	else {
        add.style.display ="none";
	}
}