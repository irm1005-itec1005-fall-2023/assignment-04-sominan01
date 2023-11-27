/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

let todolistForm = document.getElementById("form-1");

let todolistInput = document.getElementById("list-input");

let todolistResult = document.getElementById("form-results-1");

let todolistCountP = document.getElementById("todolist-count");

//Array of to do list
let todolistArray = [];

todolistForm.addEventListener("submit",handlesubmit)

function handlesubmit (event) {
    event.preventDefault();

    const inputValue = todolistInput.value;

    todolistArray.push(inputValue);

    renderList();

}

function renderList() {
    console.log ("Render List:", todolistArray);

    todolistResult.innerHTML = "";

    for (let index = 0; index < todolistArray.length; index++) {
        
        let tempList = document.createElement ("li");
    
        tempList.textContent = todolistArray[index];
        
        todolistResult.prepend(tempList); 

    }

    if (todolistArray.length === 0) {
        todolistCountP.textContent = "Have a good rest day!"
    }
    else {
        todolistCountP.textContent = "You have " + todolistArray.length + " things to do!";
    }

}

//call it the first time
renderList();

