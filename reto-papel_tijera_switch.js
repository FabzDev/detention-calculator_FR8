function papel_tijera_piedra(pl) {
  var array_npc = ["papel", "tijera", "piedra"];
  var player = pl;
  var npc = func_npc(array_npc);

  switch (player + npc) {
    case "papel" + "papel":
      console.log("player: " + player, " npc: " + npc, " empate!");
      break;
    case "papel" + "tijera":
      console.log("player: " + player, " npc: " + npc, " npc gana!");
      break;
    case "papel" + "piedra":
      console.log("player: " + player, " npc: " + npc, " player gana!");
      break;
    case "tijera" + "papel":
      console.log("player: " + player, " npc: " + npc, " player gana!");
      break;
    case "tijera" + "tijera":
      console.log("player: " + player, " npc: " + npc, " empate!");
      break;
    case "tijera" + "piedra":
      console.log("player: " + player, " npc: " + npc, " npc gana!");
      break;
    case "piedra" + "papel":
      console.log("player: " + player, " npc: " + npc, " npc gana!");
      break;
    case "piedra" + "tijera":
      console.log("player: " + player, " npc: " + npc, " player gana!");
      break;
    case "piedra" + "piedra":
      console.log("player: " + player, " npc: " + npc, " empate!");
      break;
    default:
      break;
  }

  /*if (player == "papel" && npc == "papel") {
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
  }*/
}

function func_npc(arr) {
  var juego = arr[Math.floor(Math.random() * arr.length)];
  return juego;
}

papel_tijera_piedra("papel");
