var playerHp = 100;//global variable for health so it will update every click
var oppHp = 100;
var turn = 0;//zero if opponent attack first

function coinFlip(){ //function for coin flipping
    var coin = (Math.floor(Math.random() * 2) == 0);//randomizer for tossing a coin.
    var choice = prompt("Heads or Tails");
    var flipResult;

    if (coin){
      flipResult = "heads";
    }
    else{
      flipResult = "tails";
    }
    if (flipResult == choice){ //if same result and choice
      document.getElementById("printCoin").innerHTML = "You attack first";
      turn = 1;//1 if you attack first
      document.getElementById("punch").disabled = false;//disable button
      document.getElementById("defend").disabled = false;
      first(turn);
    }
    else {
      document.getElementById("printCoin").innerHTML = "Opponent attacks first";
      document.getElementById("punch").disabled = false;//disable button
      document.getElementById("defend").disabled = false;
      first(turn);
    }
    document.getElementById("toss").disabled = true;
}

function first() {
    var playerDmg = Math.round((Math.random() * 5));
    var oppDmg = Math.round((Math.random() * 5));
      if (turn == 1){
        oppHp = oppHp - playerDmg;//damage to the bot since you throw a punch
        document.getElementById("print").innerHTML = "<br>"+ "PLAYER ATTACKS FIRST" + "<br>" + "Champ HP: " +playerHp +"<br>"+ "Champ Damage: " +playerDmg +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: NO DAMAGE" +"<br>" + "-------------------";
      }
      else{
        playerHp = playerHp - oppDmg; //damage from bot
        document.getElementById("print").innerHTML = "<br>"+ "BOT ATTACKS FIRST" + "<br>" + "Champ HP: " +playerHp +"<br>"+ "Champ Damage: NO DAMAGE" +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: " +oppDmg +"<br>" + "-------------------";
      }
}

function punch(){
    var playerDmg = Math.round((Math.random() * 5));
    var oppDmg = Math.round((Math.random() * 5));
    var oppMove = Math.floor(Math.random() * 2);

    if (oppMove == 1){//if 1 means the bot attack
      playerHp = playerHp - oppDmg; //damage from bot
      oppHp = oppHp - playerDmg;//damage to the bot since you throw a punch
      document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: " +playerDmg +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: " +oppDmg +"<br>" + "-------------------";
    }
    else{
      if (playerDmg > 3){ //if the damage is greater than 3 then the block will only reduce the damage
      oppHp = oppHp - (playerDmg - 3);
      document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: " +playerDmg +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: " +oppDmg +"<br>" + "-------------------";
      }
      else{
        document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: DAMAGE BLOCKED" +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: *BLOCK*" +"<br>" + "-------------------";
      }
    }
    gameOver();
}

function defend() {
    var oppDmg = Math.round((Math.random() * 5));
    var oppMove = Math.floor(Math.random() * 2);

    if (oppMove == 1){
      if (oppDmg > 3){ //if the damage is greater than 3 then the block will only reduce the damage
      playerHp = playerHp - (oppDmg - 3);
      document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: *BLOCK*" +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: " +oppDmg +"<br>" + "-------------------";
      }
      else{
        document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: *BLOCK*" +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: DAMAGE BLOCKED" +"<br>" + "-------------------";
      }
    }
    else{
      document.getElementById("print").innerHTML = "<br>"+ "Champ HP: " +playerHp +"<br>"+ "Champ Damage: *BLOCK*" +"<br>"+ "Opponent HP: " +oppHp +"<br>"+ "Opponent Damage: *BLOCK*" +"<br>" + "-------------------";
    }
    gameOver();
}

function gameOver() {
  if (playerHp == 0 || oppHp == 0){
    if (playerHp > oppHp){
      document.getElementById("toss").disabled = true;
      document.getElementById("punch").disabled = true;
      document.getElementById("defend").disabled = true;
      alert("THE CHAMPION WON!");
    }
    else{
      document.getElementById("toss").disabled = true;
      document.getElementById("punch").disabled = true;
      document.getElementById("defend").disabled = true;
      alert("THE CHAMPION HAS BEEN DEFEATED!");
    }
  }
}
