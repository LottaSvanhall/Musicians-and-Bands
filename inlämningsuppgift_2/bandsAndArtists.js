import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";

export default class List {

  bandList = []; //en array med bandobjekt

  constructor() {
    this.fetchBandData()
  }

  fetchBandData() {
    const data = fs.readFileSync("list.json")
    this.bandList = JSON.parse(data)
  }
  showBandInfo() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].bandName}`); //skriver ut namn från bandklassen
    }
  }

  addBandtoList(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo) {
    this.bandList.push(new Band(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo)); //lägger till namn i band objektet och lägger till i listan
    this.updateJsonFile(); //uppdaterar list.json
  }

  removeBandfromList(index) {
    this.bandList.splice(index, 1);
    this.updateJsonFile();
  }

  getLength() {
    return this.bandList.length;
  }

  updateJsonFile() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "hundar.json".

    for (let i = 0; i < this.bandList.length; i++) {
      // Använder dataInfo som ger mig ett nytt objekt med alla hund-objektet egenskaps information.
      // Om vi sparar hund-objektet direkt, kommer inte informationen från privata egenskaper med.
      tempList.push(this.bandList[i]);
      //tempList.push(this.bandList[i].dataInfo()); //används när variabler är privata
    }
    fs.writeFileSync("./list.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}