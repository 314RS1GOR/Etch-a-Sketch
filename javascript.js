const container = document.querySelector(".container");
const defaultNumberOfCases = 16;
const resetButton = document.querySelector("#reset");
const gridbutton = document.querySelector("#new-grid");

BuildGrid = function (cases){
    for (let i=0; i<cases; i++){
        const newColumn = document.createElement("div");
        newColumn.classList.add("vertical");
        container.appendChild(newColumn);
        for (j=0; j<cases; j++){
            const square = document.createElement("div");
            square.addEventListener("mousemove", ()=>{
                square.classList.add("darkened");
            });
            square.classList.add("square");
            newColumn.appendChild(square);
            }
    }
}

resetSquares = function (){
    let mySelection = document.getElementsByClassName("darkened");

    for (let i = (mySelection.length-1); i>=0; i--){
        mySelection[i].classList.remove("darkened");
    }
}


RemoveGrid = function(){
    while (container.firstChild){
        container.firstChild.remove();
    }
}

NewGrid = function (){
    let gridCasesNumber = prompt("Please set the number of cases: ");
    if (gridCasesNumber <= 100 && gridCasesNumber>0){
        BuildGrid(gridCasesNumber);
    }

    else{
        alert("Please enter a positive value inferior or equal to 100");
        NewGrid();
    }
}

FixSizeOfSquares = function (){
    const numberOfSquares = document.getElementsByClassName("square");
    const heightOfSquares = 640/(Math.sqrt(numberOfSquares.length));

    for (i=(numberOfSquares.length-1); i >= 0; i--){
        /* console.log(numberOfSquares); */
        numberOfSquares[i].style.height = heightOfSquares+"px";
        numberOfSquares[i].style.width = heightOfSquares+"px";
    }
}

resetButton.addEventListener("click", ()=>{
    resetSquares();
});


gridbutton.addEventListener("click", ()=>{
    RemoveGrid();
    NewGrid();
    FixSizeOfSquares();
})



BuildGrid(defaultNumberOfCases);


