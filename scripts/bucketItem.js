//Event functions
function deadlineRadioNo(){
    let element = document.querySelector(".bucket-item-date");
    addClass(element, "hidden");
}
function deadlineRadioYes(){
    let element = document.querySelector(".bucket-item-date");
    removeClass(element, "hidden");
}
function itemSubmit(){
    activityArr.push(document.querySelector(".bucket-item-activity>input").value);
    updateActivity();
}
function itemDelete(button){
    activityArr.splice(button.index, 1);
    updateActivity();
}

//list functions
const activityArr = [];
function updateActivity(){
    const listElement = document.querySelector("#activity-list");
    listElement.innerHTML = "";
    for(let i = 0; i < activityArr.length; i++){
        listElement.appendChild(createItem(i));
    }
}
function createItem(index){
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.index = index;
    button.addEventListener("click", () => itemDelete(button));
    button.innerText = index;
    listItem.innerText = activityArr[index];
    listItem.appendChild(button);
    return listItem;
}

//Other functions
function addClass(element, className){
    if(element.classList.contains(className))
        return;
    element.classList.add(className);
}
function removeClass(element, className){
    if(!element.classList.contains(className))
        return;
    element.classList.remove(className);
}

//Adding events
let element = document.getElementById("radio-deadline-no");
element.addEventListener("click", deadlineRadioNo);

element = document.getElementById("radio-deadline-yes");
element.checked = true;
element.addEventListener("click", deadlineRadioYes);

element = document.getElementsByClassName("bucket-item-submit")[0];
element.addEventListener("click", itemSubmit);