import PromptSync from "prompt-sync";
import Band from "./band.js";
import Musician from "./musician.js";

const prompt = PromptSync({ sigint: true });

//När vi skapar ett nytt Band och Musicians objekt kommer konstruktorn att läsa in dessa till JSON-filen.

const band = new Band();
const musicians = new Musician();

console.log(band);
console.log(musicians);

let running = true;

while (running) {
  console.log(`**Meny** 
1. Create a new band
2. Delete a band
3. Create a new musician
4. Delete a musician
Q. Exit menu
Select choice from menu ->`);

  const choice = prompt();

  switch (choice.trim().toUpperCase()) {
    case "1":
      console.log("Create a new band");
      band.
      break;
    case "2":
      console.log("Delete a band");
      // band.deleteBand();
      //band.deleteBand(prompt("Delete a band"));
      break;
    case "3":
      console.log("Create a new musician");
      //musicians.createMusicians();
      break;
    case "4":
      console.log("Delete a musician");
      //musicians.deleteMusicians();
      //musicians.deleteMusicians(prompt("Delete a musician"));
      break;

    case "Q":
      console.log("Exit menu");
      running = false;
      break;
    default:
      console.log("Du valde inget giltigt menyval!");

  }
}