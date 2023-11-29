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

    //Clear the input
    todolistInput.value = "";

    renderData();

}


function renderData() {
   
    todolistResult.innerHTML ="";
   
    for (let i=0; i<todolistArray.length;i++) {
        
        let tempListItem = document.createElement("li");

        //tempListItem.textContent = todolistArray[i];

        let tempButton = document.createElement ("button");
        let tempParagraph = document.createElement("p");

        tempParagraph.textContent = todolistArray[i];

        tempButton.textContent = "delete";
        tempButton.className = "my-button"; //Assign the button name


        tempButton.dataset.super =i;

        tempParagraph.addEventListener("click", function (event) {
            event.target.classList.toggle("strikethrough"); // Toggle the class for strikethrough
            saveStrikethroughStatus(i, event.target.classList.contains("strikethrough"));
        });


        tempButton.addEventListener("click",function(event){
            console.log ("You clicked me");
            console.log("You cliked on", event.target.dataset.super);

            //Remove this item from the array 
            todolistArray.splice(event.target.dataset.super,1);

            //Rerender the list
            renderData();
        

        });


        const Striked = getStrikethroughStatus(i);
        if (Striked) {
            tempParagraph.classList.add("strikethrough");
        }

    

        tempListItem.appendChild(tempParagraph);
        tempListItem.appendChild(tempButton);

        todolistResult.appendChild(tempListItem);

    }


}


// Function to save strikethrough status to local storage
function saveStrikethroughStatus(i, status) {
    localStorage.setItem(`strikethrough_${i}`, status);
}

function getStrikethroughStatus(i) {
    return localStorage.getItem(`strikethrough_${i}`) === 'true';
}