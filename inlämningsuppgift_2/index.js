import prompt from 'prompt-sync';
import Band from "./band.js";
import Musician from "./musician.js";

const inputPrompt = prompt({ sigint: true });

const band = new Band(); //skapa en instans av klassen så det går att jobba med den
const musicians = new Musician();

console.log(band);
console.log(musicians);

console.log
  (`**Meny** 
1. Create a new band
2. Delete a band
3. Create a new musician
4. Delete a musician
Q. Exit menu`);

switch (inputPrompt().toUpperCase().trim()) {
  case "1":
    //console.log("Create a new band");
    band.addBand(prompt("Create a new band"));
    break;
  case "2":
    //console.log("Delete a band");
    band.deleteBand(prompt("Delete a band"));
    break;
  case "3":
    //console.log("Create a new music1ian");
    musicians.addMusicians(prompt("Create a new musician"));
    break;
  case "4":
    //console.log("Delete a musician");
    musicians.deleteMusicians(prompt("Delete a musician"));
    break;
  case "Q":
    console.log("Exit menu");
    break;
  default:
    console.log("Du valde inget giltigt menyval!");

}
/*Det ska gå att skapa ett nytt band.
Det ska gå att ta bort band.
Det ska gå att skapa nya musiker.
Det ska gå att ta bort musiker.*/