const container = document.querySelector(".container");
const defaultNumberOfCases = 16;

const resetButton = document.querySelector("#reset");
const gridbutton = document.querySelector("#new-grid");
const colourButton = document.querySelector("#randomize-colours");
const colourGridButton = document.querySelector("#new-colour-grid");
const colourList = ['black', 'red', 'orange', 'blue', 'purple', 'black', 'silver', 'gray', 'fuchsia', 'green', 'lime', 'olive', 'aqua', 'blue', 'teal', 'navy', 'maroon', 'yellow'];
const colourChoice = document.querySelector("#colour-choice");

const colourArray = ['A', 'B', 'C','D','E','F',0,1,2,3,4,5,6,7,8,9];

let colourModeEnabled = 0;

BuildGrid = function (cases){
    colourModeEnabled=0;
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

ColorPicker = function (){
    let myColor = "#";

    for (i=0; i<6; i++){
        let colorHolder = colourArray[(Math.floor(Math.random() * colourArray.length))];
        myColor = myColor + colorHolder;
    }

    return myColor;
}

CustomColourPicker = function (){
    chosenColour = prompt(`Please select a color in the following list: \n${colourList.join(' ')}`);
    const selectAllCases = document.getElementsByClassName("square");

    if (colourList.includes(chosenColour)){
        colourModeEnabled=1;
        for (let i = ((selectAllCases.length)-1); i>=0; i--){
            selectAllCases[i].addEventListener("mousemove", ()=>{
                selectAllCases[i].style.backgroundColor = chosenColour;
            });
        }
    }

    else{
        alert("Please enter a valid colour");
        CustomColourPicker();
    }

    

}

BuildColorGrid = function (cases){
    colourModeEnabled=1;
    for (let i=0; i<cases; i++){
        const newColumn = document.createElement("div");
        newColumn.classList.add("vertical");
        container.appendChild(newColumn);
        for (j=0; j<cases; j++){
            const square = document.createElement("div");
            square.addEventListener("mousemove", ()=>{
                // let couleur = ColorPicker();
                square.style.backgroundColor = ColorPicker();
            });
            square.classList.add("square");
            newColumn.appendChild(square);
            }
    }
}

resetSquares = function (){

    if (colourModeEnabled==0)
    {
    let mySelection = document.getElementsByClassName("darkened");

    for (let i = (mySelection.length-1); i>=0; i--){
        mySelection[i].classList.remove("darkened");
    }

    }

    else{
        const casesSelector = document.getElementsByClassName("square");

        for (let i = ((casesSelector.length)-1); i>=0; i--){
            casesSelector[i].style.backgroundColor="white";
        }

        colourModeEnabled=0;
    }
    
}


RemoveGrid = function(){
    while (container.firstChild){
        container.firstChild.remove();
    }
}

NewGrid = function (){
    let gridCasesNumber = prompt("Please set the number of cases per side: ");
    if (gridCasesNumber <= 100 && gridCasesNumber>0){
        BuildGrid(gridCasesNumber);
    }

    else{
        alert("Please enter a positive value inferior or equal to 100");
        NewGrid();
    }
}

NewColourGrid = function (){
    let gridCasesNumber = prompt("Please set the number of cases per side: ");
    if (gridCasesNumber <= 100 && gridCasesNumber>0){
        BuildColorGrid(gridCasesNumber);
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

colourButton.addEventListener("click", ()=>{
    RemoveGrid();
    BuildColorGrid(defaultNumberOfCases);
});

colourGridButton.addEventListener("click", ()=>{
    RemoveGrid();
    NewColourGrid();
    FixSizeOfSquares();
})

colourChoice.addEventListener("click", ()=>{
    CustomColourPicker();
})




BuildGrid(defaultNumberOfCases);



