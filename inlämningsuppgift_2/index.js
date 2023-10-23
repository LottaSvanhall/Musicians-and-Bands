import PromptSync from "prompt-sync";
//import Band from "./band.js";
//import Musician from "./musician.js";
import List from "./bandsAndArtists.js";

const prompt = PromptSync({ sigint: true });

//När vi skapar ett nytt Band och Musicians objekt kommer konstruktorn att läsa in dessa till JSON-filen.

const bandList = new List(); //kör konstruktorn i klass List
const artistList = new List();

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
      bandList.showBandInfo()
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
      artistList.showArtistInfo()
      break;

    case "7":
      console.log("Add artist to band")
      bandList.showBandInfo()
      const indexBand = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      //indexBand--
      artistList.showArtistInfo()
      const indexArtist = Number(prompt("Skriv in nr på artist du vill lägga till bandet: "))
      //indexArtist--
      artistList.addArtisttoBand(indexBand - 1, indexArtist - 1)
      console.log("Artist have been added to Band")
      break;

    case "8":
      console.log("Remove artist from band")
      bandList.showBandInfo()
      const bandIndex = Number(prompt("Skriv in nr på band du vill ta bort artisten ifrån: "))
      //indexBand--
      artistList.showArtistInfo()
      const artistIndex = Number(prompt("Skriv in nr på artist du vill ta bort från bandet: "))
      //indexArtist--
      bandList.removeArtistfromBand(bandIndex - 1, artistIndex - 1)
      console.log("Artist have been removed from Band")

      break;

    case "9":
      console.log("Add band to artist")
      artistList.showArtistInfo()
      const indexArtist2 = Number(prompt("Skriv in nr på artist du vill lägga till bandet: "))
      //indexArtist--
      bandList.showBandInfo()
      const indexBand2 = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      //indexBand--
      artistList.addBandtoArtist(indexBand2 - 1, indexArtist2 - 1)
      console.log("Band have been added to Artist")

      break;

    case "10":
      console.log("Remove band from artist")
      artistList.showArtistInfo()
      const artistIndex2 = Number(prompt("Skriv in nr på artist du vill ta bort från bandet: "))
      //indexArtist--
      bandList.showBandInfo()
      const bandIndex2 = Number(prompt("Skriv in nr på band du vill ta bort från artisten: "))
      //indexBand--

      artistList.removeArtistfromBand(bandIndex2 - 1, artistIndex2 - 1)
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
  /*console.log("Vilka medlemmar är med i bandet?")
  const memberInfo = prompt();
  console.log("Vilka medlemmar har tidigare varit med i bandet? Press Enter when done!")
  const formerMemberInfo = prompt();*/

  return bandList.addBandtoList(bandName, bandInfo, bandFounded, bandEnded);
  //return bandList.addBandtoList(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo);
}


function removeBand() {
  bandList.showBandInfo();
  //hundLista.skrivUtHundar(); // Skriver ut listan på alla hundar med index i början.
  const select = prompt("Skriv in index för det band du vill ta bort ->");

  if (Number(select).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= bandList.getLengthBand() && select >= 1) {
    bandList.removeBandfromList(Number(select) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${bandList.getLengthBand()}`);
  }
}

function addNewArtist() {

  console.log("Skriv in namnet på artisten")
  const artistName = prompt();

  console.log("Skriv in info om artisten")
  const artistInfo = prompt();

  console.log("Skriv in artistens födelseår")
  const artistBirth = prompt();

  console.log("Vilket instrument spelar artisten(även sång kan skrivas in)")
  const instruments = prompt();

  /*console.log("Vilka band är artisten med i?")
  const artistBand = prompt();

  console.log("Vilka band har artisten tidigare varit med i? Press Enter when done!")
  const artistFormerBand = prompt();*/

  return artistList.addArtisttoList(artistName, artistInfo, artistBirth, instruments);
  //  return artistList.addArtisttoList(artistName, artistInfo, artistBirth, instruments, artistBand, artistFormerBand);
}

function removeArtist() {
  artistList.showArtistInfo();
  const select = prompt("Skriv in index för den musiker du vill ta bort ->");

  if (Number(select).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= artistList.getLengthArtist() && select >= 1) {
    artistList.removeArtistfromList(Number(select) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${artistList.getLengthArtist()}`);
  }
}
