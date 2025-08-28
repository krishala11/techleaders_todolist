const inputbox=document.getElementById("inputbox")
const cont=document.getElementById("listcont")
function addtask()
{
    if (inputbox.value=="")
    {
        alert("type somethong")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value;
        cont.appendChild(li);
        inputbox.value=''; 
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
}
listcont.addEventListener("click",e=>{
    if(e.target.tagName=='LI')
    {
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
    }

})