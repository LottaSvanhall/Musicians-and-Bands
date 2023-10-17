import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";

export default class List {

  bandList = []; //en array med bandobjekt

  constructor() {
    this.fetchBandData();
  }


  fetchBandData() {
    const data = fs.readFileSync("list.json")
    this.bandList = JSON.parse(data)
  }
  printList() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].name}`); //skriver ut namn från bandklassen
    }
  }

  addBandtoList(name) {
    this.bandList.push(new Band(name)); //lägger till namn i band objektet och lägger till i listan
    this.updateJsonFile(); //uppdaterar list.json
  }

  updateJsonFile() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "hundar.json".

    for (let i = 0; i < this.bandList.length; i++) {
      // Använder dataInfo som ger mig ett nytt objekt med alla hund-objektet egenskaps information.
      // Om vi sparar hund-objektet direkt, kommer inte informationen från privata egenskaper med.
      tempList.push(this.bandList[i]);
      //tempList.push(this.bandList[i].dataInfo());
    }
    fs.writeFileSync("./list.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}