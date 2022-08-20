function papel_tijera_piedra(pl) {
  var array_npc = ["papel", "tijera", "piedra"];
  var player = pl;
  var npc = func_npc(array_npc);
  if (player == "papel" && npc == "papel") {
    console.log("player: " + player, " npc: " + npc, " empate!");
  } else if (player == "papel" && npc == "tijera") {
    console.log("player: " + player, " npc: " + npc, " npc gana!");
  } else if (player == "papel" && npc == "piedra") {
    console.log("player: " + player, " npc: " + npc, " player gana!");
  } else if (player == "tijera" && npc == "papel") {
    console.log("player: " + player, " npc: " + npc, " player gana!");
  } else if (player == "tijera" && npc == "tijera") {
    console.log("player: " + player, " npc: " + npc, " empate!");
  } else if (player == "tijera" && npc == "piedra") {
    console.log("player: " + player, " npc: " + npc, " npc gana!");
  } else if (player == "piedra" && npc == "papel") {
    console.log("player: " + player, " npc: " + npc, " npc gana!");
  } else if (player == "piedra" && npc == "tijera") {
    console.log("player: " + player, " npc: " + npc, " player gana!");
  } else if (player == "piedra" && npc == "piedra") {
    console.log("player: " + player, " npc: " + npc, " empate!");
  }
}

function func_npc(arr) {
  var juego = arr[Math.floor(Math.random() * arr.length)];
  return juego;
}

papel_tijera_piedra("piedra");
