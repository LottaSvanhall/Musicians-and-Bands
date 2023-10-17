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
  
}