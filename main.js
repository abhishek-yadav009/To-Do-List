// accessing the input box 
const inputBox = document.querySelector("#input-box")

// access of list container so later we can add all of our list inside it 

const listContainer = document.querySelector("#list-container")

const button = document.querySelector("button")

function addTask(){
    // if the input box is empty then give alert

    if (inputBox.value == ""){
        alert("You must enter some Task")
    } else {
        // else we will create a list and insert the value to the inputbox
        // then we will append it to the list container 

        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        inputBox.value = ""

    }
}

button.addEventListener("click", addTask)