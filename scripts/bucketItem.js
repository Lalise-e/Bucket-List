//Event functions
function deadlineRadioNo(){
    let element = document.querySelector(".bucket-item-date");
    if(element.classList.contains("hidden"))
        return;
    element.classList.add("hidden");
}
function deadlineRadioYes(){
    let element = document.querySelector(".bucket-item-date");
    if(!element.classList.contains("hidden"))
        return;
    element.classList.remove('hidden');
}
function itemSubmit(){
    activityArr.push(document.querySelector(".bucket-item-activity>input").value);
    updateActivity();
}

//list functions
const activityArr = [];
function updateActivity(){
    const listElement = document.querySelector("#activity-list");
    listElement.innerHTML = "";
    activityArr.forEach(e =>{
        let listItem = document.createElement("li");
        listItem.innerText = e;
        listElement.appendChild(listItem);
    })
}

//Adding events
let element = document.getElementById("radio-deadline-no");
element.addEventListener("click", deadlineRadioNo);

element = document.getElementById("radio-deadline-yes");
element.checked = true;
element.addEventListener("click", deadlineRadioYes);


document.get
element = document.getElementsByClassName("bucket-item-submit")[0];
element.addEventListener("click", itemSubmit);