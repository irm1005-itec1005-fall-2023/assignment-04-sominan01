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

        tempButton.addEventListener("click",function(event){
            console.log ("You clicked me");
            console.log("You cliked on", event.target.dataset.super);

            //Remove this item from the array 
            todolistArray.splice(event.target.dataset.super,1);

            //Rerender the list
            renderData();
        

        });

        tempParagraph.addEventListener("click", function (event) {
            event.target.classList.toggle("strikethrough"); // Toggle the class for strikethrough
        });


        tempListItem.appendChild(tempParagraph);
        tempListItem.appendChild(tempButton);

        todolistResult.appendChild(tempListItem);

    }


}

//mark as completed 