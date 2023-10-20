import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";

export default class List {

  bandList = []; //en array med bandobjekt
  artistList = [];

  constructor() {

    this.fetchBandData()
    this.fetchArtistData()
  }

  fetchBandData() {
    const data = fs.readFileSync("list.json")
    this.bandList = JSON.parse(data)
  }

  fetchArtistData() {
    const data2 = fs.readFileSync("artistList.json")
    this.artistList = JSON.parse(data2)
  }

  showBandInfo() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].bandName} ${this.bandList[i].bandInfo} ${this.bandList[i].bandFounded} ${this.bandList[i].bandEnded} ${this.bandList[i].memberInfo} ${this.bandList[i].formerMemberInfo}`);
      //console.log(bandList); //skriver ut namn från bandklassen
    }
  }

  showArtistInfo() {
    for (let i = 0; i < this.artistList.length; i++) {
      console.log(`${i + 1}. ${this.artistList[i].artistName} ${this.artistList[i].artistInfo} ${this.artistList[i].artistBirth} ${this.artistList[i].instruments} ${this.artistList[i].artistBand} ${this.artistList[i].artistFormerBand}`); //skriver ut namn från artistklassen
    }
  }

  addBandtoList(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo) {
    this.bandList.push(new Band(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo)); //lägger till namn i band objektet och lägger till i listan
    this.updateJsonFile(); //uppdaterar list.json
  }

  addArtisttoList(artistName, artistInfo, artistBirth, instruments, artistBand, artistFormerBand,) {
    this.artistList.push(new Musician(artistName, artistInfo, artistBirth, instruments, artistBand, artistFormerBand)); //lägger till namn i band objektet och lägger till i listan
    this.updateJsonFileArtist(); //uppdaterar list.json
  }

  removeBandfromList(index) {
    this.bandList.splice(index, 1);
    this.updateJsonFile();
  }

  removeArtistfromList(index) {
    this.artistList.splice(index, 1);
    this.updateJsonFileArtist();
  }

  getLengthBand() {
    return this.bandList.length;
  }

  getLengthArtist() {
    return this.artistList.length;
  }

  updateJsonFile() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "list.json".

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

  updateJsonFileArtist() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "list.json".

    for (let i = 0; i < this.artistList.length; i++) {
      // Använder dataInfo som ger mig ett nytt objekt med alla hund-objektet egenskaps information.
      // Om vi sparar hund-objektet direkt, kommer inte informationen från privata egenskaper med.
      tempList.push(this.artistList[i]);
      //tempList.push(this.bandList[i].dataInfo()); //används när variabler är privata
    }
    fs.writeFileSync("./artistList.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}