  let boxes = document.querySelectorAll(".box");
  let reset = document.querySelector("#reset");
  let New = document.querySelector("#New");
  let msgContainer = document.querySelector(".msg-container");  let turnO = true;   
  let msg = document.querySelector("#msg");
  
  let count =0;
  const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ];

  const resetGame =()=>{
    turnO = true;
    count = 0;
    enableBox();
    msgContainer.classList.add("hide");

  }

  boxes.forEach(box =>{
    box.addEventListener("click",() =>{
        console.log("The box was clicked");

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    }); 
  });

  const disableBox =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
  }

  const enableBox =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }
  
  const showWinner = (winner) =>{
    msg.innerText =`${winner} won`;
    msgContainer.classList.remove("hide");
    disableBox();
  }
  
  const checkWinner = () =>{
    for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2===pos3){
            console.log("Winner",pos1);

            showWinner(pos1);
            return;
        }
    }
   
};
count++;
if(count ===9){
    msg.innerText = "Its a draw";
    msgContainer.classList.remove("hide");
    disableBox();   
}
};

New.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
