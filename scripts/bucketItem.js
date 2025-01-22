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
    const item = {
        activity: document.querySelector(".bucket-item-activity>input").value,
        deadline: document.querySelector("#radio-deadline-yes").checked,
        date: new Date(document.querySelector("#date-select").value),
        activityType: document.querySelector("#type-select").value
    };
    if(item.date == "Invalid Date" && item.deadline)
        return;
    if(item.activity === "")
        return;
    activityArr.push(item);
    updateActivity();
    clearForm();
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

    const activity = document.createElement("p");
    activity.innerText = activityArr[index].activity;

    let date = document.createElement("p");
    if(activityArr[index].deadline == false)
        date.innerText = "Whenever you want!";
    else
        date.innerText = activityArr[index].date.toDateString();

    let activityType = document.createElement("p");
    activityType.innerText = activityArr[index].activityType;

    const button = document.createElement("button");
    button.index = index;
    button.addEventListener("click", () => itemDelete(button));
    button.innerText = "Complete!";

    listItem.appendChild(activity);
    listItem.appendChild(date);
    listItem.appendChild(activityType);
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
function clearForm(){
    document.querySelector(".bucket-item-activity>input").value = "";
    document.querySelector("#radio-deadline-yes").checked = true;
    document.querySelector("#radio-deadline-no").checked = false;
    document.querySelector("#date-select").value = new Date(Date.now).toDateString;
    document.querySelector("#type-select").value = "Voyage";
    removeClass(document.querySelector(".bucket-item-date"), "hidden");
}

clearForm();

//Adding events
let element = document.getElementById("radio-deadline-no");
element.addEventListener("click", deadlineRadioNo);

element = document.getElementById("radio-deadline-yes");
element.checked = true;
element.addEventListener("click", deadlineRadioYes);

element = document.getElementsByClassName("bucket-item-submit")[0];
element.addEventListener("click", itemSubmit);