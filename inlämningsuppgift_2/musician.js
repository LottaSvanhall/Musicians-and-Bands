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
    this.instruments = instruments;
    
    this.listBand = listBand;
    this.listFormerBand = listFormerBand;
    //console.log("Nu är card skapad!");

  }

  get name() {
    return this.name;
    //console.log("Lägg till ett namn: ");
  }

  get infoText() {
    return this.infoText;
    //console.log("Lägg till info text: ")
  }

  get yearBirth() {
    return this.yearBirth;
  }

  get instruments() {
    return this.instruments;
  }

  createMusicians() {
    console.log("Du är i createMusicians");
    //lägga till en musiker till ett band
  }

  deleteMusicians() {
    console.log("Du är i deleteMusicians");
    //ta bort en musiker från ett band
  }

  showMusicianInfo() {

  }

  //då ska även musikers lista över vilka band hen är med i uppdateras.

}