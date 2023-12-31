import PromptSync from "prompt-sync";
import List from "./bandsAndArtists.js";

const prompt = PromptSync({ sigint: true });

const list = new List();

console.log(`***Meny Musicians & Bands*** 
______________________________________________
1. Create a new band
2. Remove a band
3. Show band info
______________________________________________
4. Create a new musician
5. Remove a musician
6. Show musician info
______________________________________________
7. Add artist to band
8. Remove artist from band
______________________________________________
9. Add band to artist
10. Remove band from artist
______________________________________________
11. Show menu
Q. Exit menu

Select a number from the menu above ->`);

let running = true;

while (running) {


  const choice = prompt();

  switch (choice.trim().toUpperCase()) {
    case "1":
      addNewBand(prompt("**Skapa ett nytt band ->"))
      break;

    case "2":
      removeBand(prompt("**Ta bort ett band ->"))
      break;

    case "3":
      console.log("Show Band Info");
      list.showBandInfo()
      break;

    case "4":
      console.log("Create a new musician");
      addNewArtist(prompt("**Skapa en ny artist ->"))
      break;

    case "5":
      console.log("Remove a musician");
      removeArtist(prompt("**Ta bort en musiker ->"))
      break;

    case "6":
      console.log("Show Artist Info");
      list.showArtistInfo()
      break;

    case "7":
      console.log("Add artist to band")
      list.showBandInfo()
      const indexBand = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      list.showArtistInfo()
      const indexArtist = Number(prompt("Skriv in nr på artist du vill lägga till bandet: "))
      list.addArtisttoBand(indexBand - 1, indexArtist - 1)
      console.log("Artist have been added to Band")
      break;

    case "8":
      console.log("Remove artist from band")
      list.showBandInfo()
      const bandIndex = Number(prompt("Skriv in nr på band du vill ta bort artisten ifrån: "))
      list.showArtistIndexInBand(bandIndex - 1)
      const artistIndex = Number(prompt("Skriv in index på artist du vill ta bort från bandet. Översta artisten har index 0: "))
      list.removeArtistfromBand(bandIndex - 1, artistIndex - 1)
      console.log("Artist have been removed from Band")

      break;

    case "9":
      console.log("Add band to artist")
      list.showBandInfo()
      const indexBand2 = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      list.showArtistInfo()
      const indexArtist2 = Number(prompt("Skriv in nr på artisten som du vill lägga till bandet: "))
      list.addBandtoArtist(indexBand2 - 1, indexArtist2 - 1)
      console.log("Band have been added to Artist")

      break;

    case "10":
      console.log("Remove band from artist")
      list.showArtistInfo()
      const artistIndex2 = Number(prompt("Skriv in nr på artist du vill ta bort från bandet: "))
      list.showBandIndexInArtist(artistIndex2 - 1)
      const bandIndex2 = Number(prompt("Skriv in nr på band du vill ta bort från artisten: "))
      list.removeBandfromArtist(bandIndex2 - 1, artistIndex2 - 1)

      console.log("Artist have been removed from Band")

      break;

    case "11":
      console.log(`***Meny Musicians & Bands*** 
______________________________________________
1. Create a new band
2. Remove a band
3. Show band info
______________________________________________
4. Create a new musician
5. Remove a musician
6. Show musician info
______________________________________________
7. Add artist to band
8. Remove artist from band
______________________________________________
9. Add band to artist
10. Remove band from artist
______________________________________________
11. Show menu
Q. Exit menu

Select a number from the menu above ->`);
      break;

    case "Q":
      console.log("Exit menu");
      running = false;
      break;
    default:
      console.log("Du valde inget giltigt menyval!, tryck 11 för att komma till menyn!");

  }
}

function addNewBand() {

  console.log("Skriv in namnet på bandet")
  const bandName = prompt();

  console.log("Skriv in info om bandet")
  const bandInfo = prompt();

  console.log("Skriv in vilket år bandet grundades")
  const bandFounded = prompt();

  console.log("Vilket år splittrades bandet")
  const bandEnded = prompt();

  return list.addBandtoList(bandName, bandInfo, bandFounded, bandEnded);

}


function removeBand() {
  list.showBandInfo();
  const select = prompt("Skriv in nr för det band du vill ta bort ->");

  if (Number(select).toString() === "NaN") {
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= list.getLengthBand() && select >= 1) {
    list.removeBandfromList(Number(select) - 1);
  } else {
    console.log(`Talet måste vara mellan 1 och ${list.getLengthBand()}`);
  }
}

function addNewArtist() {

  console.log("Skriv in namnet på artisten")
  const artistName = prompt();

  console.log("Skriv in info om artisten")
  const artistInfo = prompt();

  console.log("Skriv in artistens födelseår")
  const artistBirth = prompt();

  console.log("Artistens ålder är: ")
  const currentYear = new Date().getFullYear();
  console.log(currentYear - artistBirth)

  console.log("Vilket instrument spelar artisten, även om sjunger kan skrivas in")
  const instruments = prompt();


  return list.addArtisttoList(artistName, artistInfo, artistBirth, instruments);

}

function removeArtist() {
  list.showArtistInfo();
  const select = prompt("Skriv in nr för den musiker du vill ta bort ->");

  if (Number(select).toString() === "NaN") {
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= list.getLengthArtist() && select >= 1) {
    list.removeArtistfromList(Number(select) - 1);
  } else {
    console.log(`Talet måste vara mellan 1 och ${list.getLengthArtist()}`);
  }
}