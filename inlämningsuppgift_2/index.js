import Band from "./band.js";
import Musician from "./musician.js";

const band = new Band(); //skapa en instans av klassen
const musicians = new Musician();

console.log(band);
console.log(musicians);

console.log(`Meny 
1. Addera
2. Multiplicera
3. Dividera`);
/*
const UserMenyChoice = 3;

switch (UserMenyChoice) {
  case 1:
    console.log("1 + 2 = " + (1 + 2));
    break;
  case 2:
    console.log("2 * 4 = " + (2 * 4));
    break;
  case 3:
    console.log("10 / 2 = " + (10 / 2));
    break;
  default:
    console.log("Du valde inget giltigt menyval!");

*/

/*Det ska gå att skapa ett nytt band.
Det ska gå att ta bort band.
Det ska gå att skapa nya musiker.
Det ska gå att ta bort musiker.*/