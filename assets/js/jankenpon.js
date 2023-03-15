function playGame() {
  var player = prompt("Masukkan pilihanmu: batu, gunting, atau kertas");

  if (player == null) {
    return;
  }

  player = player.toLowerCase();

  if (player != "batu" && player != "gunting" && player != "kertas") {
    alert("Pilihan yang kamu masukkan salah!");
    return;
  }

  var computer = Math.random();
  if (computer < 0.33) {
    computer = "batu";
  } else if (computer < 0.67) {
    computer = "gunting";
  } else {
    computer = "kertas";
  }

  alert("Kamu memilih " + player + " dan komputer memilih " + computer + ".");

  if (player == computer) {
    alert("Hasilnya seri!");
  } else if (
    (player == "batu" && computer == "gunting") ||
    (player == "gunting" && computer == "kertas") ||
    (player == "kertas" && computer == "batu")
  ) {
    alert("Selamat, kamu menang!");
  } else {
    alert("Sayang sekali, kamu kalah.");
  }
}
