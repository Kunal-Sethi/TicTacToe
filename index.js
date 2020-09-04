var reset = document.querySelector(".reset");

// Declaring Winner

function declareWinner(){
    if(document.querySelector("h1").innerHTML === "Player X Wins" || document.querySelector("h1").innerHTML === "Player O Wins")
    {
        for(var l=0;l<document.querySelectorAll(".grid").length;l++)
        {
            document.querySelectorAll(".grid")[l].classList.add("no-click");
        }

    }
}

// Winner function

function winner(){
    for(var k=0;k<document.querySelectorAll(".grid").length;k++)
    {
        if(document.querySelectorAll(".grid")[0].classList.contains("one") && document.querySelectorAll(".grid")[1].classList.contains("one") && document.querySelectorAll(".grid")[2].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[0].classList.contains("two") && document.querySelectorAll(".grid")[1].classList.contains("two") && document.querySelectorAll(".grid")[2].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }

        else if(document.querySelectorAll(".grid")[3].classList.contains("one") && document.querySelectorAll(".grid")[4].classList.contains("one") && document.querySelectorAll(".grid")[5].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[3].classList.contains("two") && document.querySelectorAll(".grid")[4].classList.contains("two") && document.querySelectorAll(".grid")[5].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }

        else if(document.querySelectorAll(".grid")[6].classList.contains("one") && document.querySelectorAll(".grid")[7].classList.contains("one") && document.querySelectorAll(".grid")[8].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[6].classList.contains("two") && document.querySelectorAll(".grid")[7].classList.contains("two") && document.querySelectorAll(".grid")[8].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }
 
 
        else if(document.querySelectorAll(".grid")[0].classList.contains("one") && document.querySelectorAll(".grid")[3].classList.contains("one") && document.querySelectorAll(".grid")[6].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[0].classList.contains("two") && document.querySelectorAll(".grid")[3].classList.contains("two") && document.querySelectorAll(".grid")[6].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }

        else if(document.querySelectorAll(".grid")[1].classList.contains("one") && document.querySelectorAll(".grid")[4].classList.contains("one") && document.querySelectorAll(".grid")[7].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[1].classList.contains("two") && document.querySelectorAll(".grid")[4].classList.contains("two") && document.querySelectorAll(".grid")[7].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }

        else if(document.querySelectorAll(".grid")[2].classList.contains("one") && document.querySelectorAll(".grid")[5].classList.contains("one") && document.querySelectorAll(".grid")[8].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[2].classList.contains("two") && document.querySelectorAll(".grid")[5].classList.contains("two") && document.querySelectorAll(".grid")[8].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }
 

        else if(document.querySelectorAll(".grid")[0].classList.contains("one") && document.querySelectorAll(".grid")[4].classList.contains("one") && document.querySelectorAll(".grid")[8].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[0].classList.contains("two") && document.querySelectorAll(".grid")[4].classList.contains("two") && document.querySelectorAll(".grid")[8].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }

        else if(document.querySelectorAll(".grid")[2].classList.contains("one") && document.querySelectorAll(".grid")[4].classList.contains("one") && document.querySelectorAll(".grid")[6].classList.contains("one"))
        {
            document.querySelector("h1").innerHTML = "Player X Wins" ;
        }
        else if(document.querySelectorAll(".grid")[2].classList.contains("two") && document.querySelectorAll(".grid")[4].classList.contains("two") && document.querySelectorAll(".grid")[6].classList.contains("two"))
        {
            document.querySelector("h1").innerHTML = "Player O Wins" ;
        }
 
        
    }
    
}

// Main Function

const iterate = document.querySelectorAll(".grid");
iterate.forEach(i => {
    i.addEventListener("click",() => {
        myStep(i)
        myAlert() 
        declareWinner()
    })
})

// Player Alert Function

function myAlert()
{
    // console.log(i);
    if(document.querySelector(".player").innerHTML === "'X'")
    {
        document.querySelector(".player").innerHTML = "'O'";
    }
    else //if(document.querySelector(".player").innerHTML = "'O'")
    {
        document.querySelector(".player").innerHTML = "'X'";
    }
    
}

// Entering Os and Xs

function myStep(i)
{
    if(document.querySelector(".player").innerHTML === "'X'")
    {
        console.log(i);
        i.classList.add("one");
        i.classList.add("no-click");
        winner();
        // declareWinner();
    }
    else
    {
        i.classList.add("two");
        i.classList.add("no-click");
        winner();
        // declareWinner();
    }
    
    
}

// Reset Button

reset.addEventListener("click", function(){
    document.querySelector(".player").innerHTML = "'X'";
    window.location.reload();
})



