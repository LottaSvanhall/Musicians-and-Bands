export default class Musician {

  name;
  infoText; //infotext
  yearBirth; //födelsesår
  listBand; //lista över band musikern är med i
  listFormerBand; //Lista över tidigare band musiker varit med i
  instruments; //Vilka instrument som musiker spelar

  constructor(name, infoText, yearBirth, listBand, listFormerBand, instruments) {
    this.name = name;
    this.infoText = infoText; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.yearBirth = yearBirth;
    this.listBand = listBand;
    this.listFormerBand = listFormerBand;
    this.instruments = instruments
    //console.log("Nu är card skapad!");

  }

  addMusicians() {
    //lägga till en musiker till ett band
  }

  deleteMusicians() {
    //ta bort en musiker från ett band
  }

  showMusicianInfo() {

  }

//då ska även musikers lista över vilka band hen är med i uppdateras.

}