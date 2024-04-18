
function randomGen(){

    // generate random num between 1-6
    var num3= Math.floor(Math.random()*6)+1;
    var num4= Math.floor(Math.random()*6)+1;

    
    if (num3==num4){
        randomGen();
    }
    else{

        var diceImages=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];


        var img1attempt =document.getElementsByClassName("img1")[0];
        var img2attempt =document.getElementsByClassName("img2")[0];
        // assign image to html 
        img1attempt.src=diceImages[num3-1];
        img2attempt.src=diceImages[num4-1];

        var heading=document.getElementsByTagName("h1")[0];
        if (num3>num4){
            heading.innerText="Player 1 Wins!";
        }else{
            heading.innerText="player 2 Wins!";
        }
        
    }

    
    
}
randomGen();





