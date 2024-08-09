const inputbox = document.getElementById("input-box");
const Listcontainer = document.getElementById("list-container")
function addtask(){
    if(inputbox.value=== ''){
        alert("You should write something here !");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);



    }
    inputbox.value = '';
    saveData();

}

Listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }

},false);


function saveData(){
    localStorage.setItem("data" , Listcontainer.innerHTML)
}

function showTask(){
    Listcontainer.innerHTML = localStorage.getItem ("data");

}
showTask()