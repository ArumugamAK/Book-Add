var popupoverlay = document.querySelector(".popup-overlay")
var  popupbox= document.querySelector(".popup-box")
var add=document.querySelector(".plus");
add.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
var boxid= document.getElementById("boxinput");
boxid.addEventListener("click",function(){
    var bookname = document.getElementById("Bookname").value;
    var bookauthor = document.getElementById("Bookauthor").value;
    var text=document.getElementById("bigtext").value;
    var container = document.querySelector(".container");
    console.log(bookname);
    console.log(bookauthor);
    var div = document.createElement("div");
    div.setAttribute("class","subcontain")
    div.innerHTML=`<h3>${bookname}</h3>
    <h2>${bookauthor}</h2>
    <p>${text}</p>
    <button>Delete</button>`
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
