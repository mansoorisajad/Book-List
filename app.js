const titleInput=document.getElementById("title");
const authorInput=document.getElementById("author");
const isbnInput=document.getElementById("isbn");
const submitInput=document.getElementById("submit");
const table=document.querySelector("table");

//Event Listener
submitInput.addEventListener('click',(event)=>{
    //Preventing from reloading
    event.preventDefault();
    //Getting the Data
    const author=authorInput.value;
    const title=titleInput.value;
    const isbn=isbnInput.value;
    /*Title->Author->ISBN
     1=>Creating the Element
     2=>Adding class to the created element
     3=>Adding the created element to the Table
     4=>Changing the value
     */
    const newTableRow=document.createElement("tr");
    newTableRow.classList.add("index");
    table.appendChild(newTableRow);
    const newTitleIndex=document.createElement("td");
    newTitleIndex.classList.add("titleIndex");
    newTableRow.appendChild(newTitleIndex);
    newTitleIndex.innerHTML=title;
    const newAuthorIndex=document.createElement("td");
    newAuthorIndex.classList.add("authorIndex");
    newTableRow.appendChild(newAuthorIndex);
    newAuthorIndex.innerHTML=author;
    const newISBNIndex=document.createElement("td");
    newISBNIndex.classList.add("isbnIndex");
    newTableRow.appendChild(newISBNIndex);
    newISBNIndex.innerHTML=isbn;
    //Reseting the input values
    titleInput.value="";
    authorInput.value="";
    isbnInput.value="";
})
