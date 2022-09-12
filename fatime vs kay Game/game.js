// GAME CHAPTER CHANGE

const playnow = document.getElementById("playNOW")
const gameChange = document.querySelector(".gameplay")

playnow.addEventListener ("click", ()=>{
     gameChange.classList.toggle("active")
    
})

//GAME OPTIONS

const gameCheck = document.getElementById("gamecheck") 
const options = ["scissor", "rock" , "paper"]
const gameResult = document.getElementById("gameresult")
const kay = document.getElementById("kay") 
let gameNumber = 20
const fatime = document.getElementById("fatime")
const fatimepoint = document.getElementById("fatimepoint")
const kaypoint = document.getElementById("kaypoint")
let kayscores = 0
let fatimescores = 0
let fatimeSelect = [""]

//fatime selectioms
const fatimeSelection = document.querySelectorAll(".fa")

fatimeSelection.forEach((selections)=>{
    selections.addEventListener("click", (event)=>{
     fatimeSelect[0] =  event.target.dataset.id
         fatime.textContent = "fatime " + fatimeSelect
    })
})

gameCheck.addEventListener("click", ()=>{
    let random = Math.floor(Math.random() * 3)
    let kaySelection = options[random]
    let gameplayed = document.getElementById("gameplayed")
   if( gameNumber > 1 ){ 
    kay.textContent = "kay: " + kaySelection 
      --gameNumber 
      //console.log(fatimeSelect[0]);
     gameplayed.textContent = "you have " + gameNumber + " chances" 
      if(fatimeSelect[0] == "scissor" && random == 2 ) {
        fatimescores++
        fatimepoint.textContent = "scores " + fatimescores
        gameResult.textContent = "😍" + " YOU WIN "
      }
      else if(fatimeSelect[0] == "paper" && random == 1 ) {
        fatimescores++
        fatimepoint.textContent = "scores " + fatimescores
        gameResult.textContent = "😍" + " YOU WIN "
      }
      else if(fatimeSelect[0] == "rock" && random == 0 ) {
        fatimescores++
        fatimepoint.textContent = "scores " + fatimescores
        gameResult.textContent = "😍" + " YOU WIN "
      }
      else if (fatimeSelect[0] == kaySelection){
        gameResult.textContent = "😎" + " DRAW TRY AGAIN "
      }
      else{
        kayscores++
        kaypoint.textContent = "scores " + kayscores
        gameResult.textContent = "🤪" + " YOU LOOSE "
      }
    }
    else {
        gameplayed.textContent = "Game is Over"
        return gameEND()
    }
    
})


//GAME RESULT 

const Gameresult = document.querySelector(".finalResult")
const gameFinnal = document.querySelector(".gameEND")
const refreshGame = document.querySelector(".refreshGame")

let player1 = `<div class="resultMessage">
<h6>Congratulation <span id="playerName">Fatime</span> you win the game</h6>
</div>
<div class="winnerImage">
<img src="image/fatime.jpg" alt="fatime" class="player">
</div>`

let player2 = `<div class="resultMessage">
<h6> Sorry 😆😆😆 <span id="playerName">Fatime</span> Unclekay win the game</h6>
</div>
<div class="winnerImage">
<img src="image/kay.jpg" alt="kay" class="player">
</div>`

function gameEND() {
     gameFinnal.classList.add("active")
    gameChange.classList.toggle("active")
     if(fatimescores > kayscores){
       return Gameresult.innerHTML = player1
     }
     else if(fatimescores < kayscores){
      return  Gameresult.innerHTML = player2
     }
   
}
refreshGame.addEventListener("click", ()=>{
  //console.log("hey");
  window.location.reload()
})
