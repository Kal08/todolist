const input=document.getElementById("input-box");
const listcontainer=document.getElementsByClassName("list-container");


function addtask(){
    if(input.value=== ""){
        alert("Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        
        listcontainer[0].appendChild(li)

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    savedata();
    input.value="";
   
}

listcontainer[0].addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
     e.target.classList.toggle("checked");
     savedata();
  }
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
}
})

function savedata(){
    localStorage.setItem("data" ,listcontainer[0].innerHTML);
}

function showtask(){
    if(localStorage.getItem("data")==""){
      listcontainer[0].innerHTML=''
    }
    else{
        listcontainer[0].innerHTML=localStorage.getItem("data");
    }
   
}
showtask();