import PromptSync from "prompt-sync";
//import Band from "./band.js";
//import Musician from "./musician.js";
import List from "./bandsAndArtists.js";

const prompt = PromptSync({ sigint: true });

//När vi skapar ett nytt Band och Musicians objekt kommer konstruktorn att läsa in dessa till JSON-filen.

//const band = new Band();
//const musicians = new Musician();

const bandList = new List(); //kör konstruktorn i klass List

//console.log(band);
//console.log(musicians);

let running = true;

while (running) {
  console.log(`***Meny Musicians & Bands*** 
1. Create a new band
2. Remove a band
3. Show band info
4. Create a new musician
5. Remove a musician
6. Show musician info
7. Add band to artist //ej byggd 7-10
8. Remove band from artist
9. Add artist to band
10. Remove artist from band 
Q. Exit menu
Select a number from the menu above ->`);

  const choice = prompt();

  switch (choice.trim().toUpperCase()) {
    case "1":
      addNewBand(prompt("**Skapa ett nytt band ->"))
      //bandList.addBandtoList()
      //prompt("Vad heter bandet? -> "));
      // bandList.addBandtoList(prompt("Skriv in info om bandet -> "))

      /*case 1:
        const tal1 = Number(prompt("Skriv in ett tal: "))
        const tal2 = Number(prompt("Skriv in ett tal: "))
        console.log(`$(tal1) + $(tal2) = $(tal1 + tal2)`);
        */
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
      addMusician()
      //musicians.createMusicians();
      break;

    case "5":
      console.log("Remove a musician");
      removeMusician()
      //musicians.deleteMusicians();
      //musicians.deleteMusicians(prompt("Delete a musician"));
      break;

    case "6":
      console.log("Show Musician Info");
      removeMusician()
      break;



    case "Q":
      console.log("Exit menu");
      running = false;
      break;
    default:
      console.log("Du valde inget giltigt menyval!");

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
  console.log("Vilka medlemmar är med i bandet?")
  const memberInfo = prompt();
  console.log("Vilka medlemmar har tidigare varit med i bandet?")
  const formerMemberInfo = prompt();

  return bandList.addBandtoList(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo);
}


function removeBand() {
  bandList.showBandInfo();
  //hundLista.skrivUtHundar(); // Skriver ut listan på alla hundar med index i början.
  const select = prompt("Skriv in index för det band du vill ta bort ->");

  if (Number(select).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= bandList.getLength() && select >= 1) {
    bandList.removeBandfromList(Number(select) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${bandList.getLength()}`);
  }
}


