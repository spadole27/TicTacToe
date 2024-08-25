let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
let count = 0;
// win patterns to check winner 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [3,7,8]
];
// reset game button  **applied in both new  & reset btn.
const resetGame = () =>{
    turnO = true;
    enableBoxes();
msgContainer.classList.add("hide");
};

// changing turn of O & X and adding inner text 
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
  console.log("box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;
        box.style.color = "red";
    }
    else{
        box.innerText = "X";
        box.style.color = "green";
        turnO = true;
        
    }
    box.disabled = true;
    count++;
   
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

});
});
// draw game 
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
  };
  

// disable boxes function
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
// enable boxes function 
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// show winner function 
const showWinner  =(winner)=>{
    msg.innerText = "Winner is " + winner;
    msgContainer.classList.remove("hide");
disableBoxes();
count = 0 ;
}

// check winner function
const checkWinner = () => {

    for(pattern of winPatterns){
        let pos1  =  boxes[pattern[0]].innerText;
        let pos2  =  boxes[pattern[1]].innerText;
        let pos3  =  boxes[pattern[2]].innerText;

         if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 ===  pos2 && pos2 ===  pos3){
              
                showWinner(pos1);
                return true;
            }
         }
        
    }
};

// reset game and new game 
newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);
