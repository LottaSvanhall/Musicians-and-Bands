import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";
import { log } from "console";

export default class List {

  bandList = [];
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
      console.log(`${i + 1}. ${this.bandList[i].bandName} ${this.bandList[i].bandInfo} ${this.bandList[i].bandFounded} ${this.bandList[i].bandEnded}`);
      //console.log(bandList); //skriver ut namn från bandklassen
    }
  }

  showArtistInfo() {
    for (let i = 0; i < this.artistList.length; i++) {
      console.log(`${i + 1}. ${this.artistList[i].artistName} ${this.artistList[i].artistInfo} ${this.artistList[i].artistBirth} ${this.artistList[i].instruments}`);
      //console.log(`${i + 1}. ${this.artistList[i].artistName} ${this.artistList[i].artistInfo} ${this.artistList[i].artistBirth} ${this.artistList[i].instruments} ${this.artistList[i].artistBand} ${this.artistList[i].artistFormerBand}`); //skriver ut namn från artistklassen
    }
  }

  showArtistIndexInBand(index) {
    console.log(this.bandList[index].memberInfo);
    //console.log(`${i + 1}. ${this.artistList[i].artistName} ${this.artistList[i].artistInfo} ${this.artistList[i].artistBirth} ${this.artistList[i].instruments} ${this.artistList[i].artistBand} ${this.artistList[i].artistFormerBand}`); //skriver ut namn från artistklassen

  }
  showBandIndexInArtist(index) {
    console.log(this.artistList[index].artistBand);
    //console.log(`${i + 1}. ${this.artistList[i].artistName} ${this.artistList[i].artistInfo} ${this.artistList[i].artistBirth} ${this.artistList[i].instruments} ${this.artistList[i].artistBand} ${this.artistList[i].artistFormerBand}`); //skriver ut namn från artistklassen
  }

  addBandtoList(bandName, bandInfo, bandFounded, bandEnded) {
    this.bandList.push(new Band(bandName, bandInfo, bandFounded, bandEnded)); 
    this.updateJsonFile();
    console.log("Band have been added");
  }

  addArtisttoList(artistName, artistInfo, artistBirth, instruments) {
    this.artistList.push(new Musician(artistName, artistInfo, artistBirth, instruments));
    this.updateJsonFileArtist();
  }

  addArtisttoBand(indexBand, indexArtist) {
    this.bandList[indexBand].memberInfo.push(this.artistList[indexArtist])
    console.log(this.bandList[indexBand].memberInfo);
    this.updateJsonFile();
  }

  removeArtistfromBand(bandIndex, artistIndex) {
    const members = this.bandList[bandIndex].memberInfo //innehåller medlemmarna
    //console.log(members);
    const removeformerMembers = members.splice(artistIndex, 1)
    this.bandList[bandIndex].memberInfo = members
    this.bandList[bandIndex].formerMemberInfo.push(removeformerMembers)
    // console.log(this.artistList[artistIndex]);
    this.updateJsonFile();

  }

  addBandtoArtist(indexBand2, indexArtist2) {
    this.artistList[indexArtist2].artistBand = this.bandList[indexBand2];
    // console.log(this.artistList[indexArtist2].memberInfo);
    this.updateJsonFileArtist();
  }

  removeBandfromArtist(bandIndex2, artistIndex2) {
    const artists = this.artistList[artistIndex2].artistBand
    const removeformerBands = artists.splice(bandIndex2, 1)
    this.artistList[bandIndex2].artistBand = artists
    this.artistList[bandIndex2].artistFormerBand.push(removeformerBands)
    this.updateJsonFileArtist();
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
    let tempList = [];

    for (let i = 0; i < this.bandList.length; i++) {
        tempList.push(this.bandList[i]);
    }
    fs.writeFileSync("./list.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  updateJsonFileArtist() {
    let tempList = [];

    for (let i = 0; i < this.artistList.length; i++) {
      tempList.push(this.artistList[i]);
     }
    fs.writeFileSync("./artistList.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}