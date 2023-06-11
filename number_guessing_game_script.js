let random =Math.floor(Math.random()*100+1);
random=50;
const nochosen=document.querySelector(".nochosen");
const lastresult=document.querySelector(".lastresult");
const loworhigh=document.querySelector(".loworhigh");

const guess_submit=document.querySelector(".guess_submit");
const guessbox=document.querySelector(".guessbox");
let count=1;
let reset;



function check()
{
    const guess=Number(guessbox.value);
    if(count===1)
    {
        nochosen.textContent="previous nos. ";
    }
    // nochosen.textContent+= '$guess+" "';
    nochosen.textContent += `${guess} `;
    if(guess===random)
    {
        lastresult.textContent="congrats you won!";
        lastresult.style.backgroundColor="green";
        loworhigh.textContent="";
        setGameOver();
    }
    else if(count===10)
    {
        lastresult.textContent="better luck next time!";
        lastresult.style.backgroundColor="red";
        loworhigh.textContent="";
        setGameOver();
    }
    else{
        lastresult.textContent = "Wrong!";
    lastresult.style.backgroundColor = "red";
    if (guess < random) {
      loworhigh.textContent = "Last guess was too low!";
    } else if (guess > random) {
      loworhigh.textContent = "Last guess was too high!";
    }
    }
    count++;
    guessbox.value="";
    guessbox.focus();
}
guess_submit.addEventListener("click",check);
function resetGame()
{
    count=1;
    const results=document.querySelectorAll(".results p");
    for(const y of results)
    {
        y.textContent="";
    }
    reset.parentNode.removeChild(reset);

    guessbox.disabled = false;
    guess_submit.disabled = false;
    guessbox.value = "";
    guessbox.focus();
  
    lastresult.style.backgroundColor = "white";  
    random = Math.floor(Math.random() * 100) + 1;
}
function setGameOver()
{
    guessbox.disabled=true;
    guess_submit.disabled=true;
    reset=document.createElement("button");
    reset.textContent="start new game";
    document.body.append(reset);
    reset.addEventListener("click", resetGame);
}


