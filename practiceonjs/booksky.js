function del(event){
    event.target.parentElement.remove();
}

var back=document.querySelector(".back")
var addbox=document.querySelector(".add-items")
function add(){
    back.style.display="block";
    addbox.style.display="block"
}



function cancel(){
    back.style.display="none";
    addbox.style.display="none"
}

var newtitle=document.getElementById("inp-title");
var newauthor=document.getElementById("inp-author");
var text=document.getElementById("inp-description");
var addbtn=document.querySelector(".add-btn");
var bodycontainer=document.querySelector(".body-container")

function addlist(){
    var div=document.createElement("div");
    div.setAttribute("class","container")
    div.innerHTML=`<h2 >${newtitle.value}</h2>
            <h4>${newauthor.value}</h4>
            <p>${text.value}</p>
            <button class="dlt-btn" onclick="del(event)">Delete</button>`
    bodycontainer.append(div);
    back.style.display="none";
    addbox.style.display="none"
    newtitle.value=""
    newauthor.value=""
    text.value=""
}



    


