
function headTailGame (){
    let userInput = prompt (" Enter head or tail").toLowerCase();

    let gameArray = ["head","tail"];
    
    let gamePlus = Math.random()*gameArray.length;
    
    let floorValue = Math.floor(gamePlus);
    
    let arrayValue = gameArray [floorValue];
    
    
    if(userInput === arrayValue){
        Swal.fire({
          
           title:"Congratulations! You Win.",
            icon: "success"
          });
    }
    else{
        Swal.fire({
            title: "Sorry! You Lose.",
            icon: "error"
          });
    }

   


   
}
    