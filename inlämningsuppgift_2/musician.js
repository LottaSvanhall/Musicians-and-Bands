export default class Musician {

  artistName;
  artistInfo; //infotext
  artistBirth; //födelsesår
  artistBand; //lista över band musikern är med i
  artistFormerBand; //Lista över tidigare band musiker varit med i
  instruments; //Vilka instrument som musiker spelar

  constructor(artistName, artistInfo, artistBirth, artistBand, artistFormerBand, instruments) {
    this.artistName = artistName;
    this.artistInfo = artistInfo; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.artistBirth = artistBirth;
    this.instruments = instruments;

    this.artistBand = artistBand;
    this.artistFormerBand = artistFormerBand;
    //console.log("Nu är card skapad!");

  }

  get artistName() {
    return this.artistName;
    //console.log("Lägg till ett namn: ");
  }

  get artistInfo() {
    return this.artistInfo;
    //console.log("Lägg till info text: ")
  }

  get artistBirth() {
    return this.artistBirth;
  }

  get instruments() {
    return this.instruments;
  }

  get artistBand() {
    return this.iartistBand;
  }

  get artistFormerBand() {
    return this.artistFormerBand;
  }


  set artistname(newArtistName) {
    this.artistName = newArtistName;
    //console.log("");
  }

  set artistInfo(newArtistInfo) {
    this.artistInfo = newArtistInfo;
    //console.log("");
  }

  set artistBirth(newArtistBirth) {
    this.artistBirth = newArtistBirth;
    //console.log("");
  }

  set instruments(newInstruments) {
    this.instruments = newInstruments;
    //console.log("");
  }

  set artistBand(newArtistBand) {
    this.artistBand = newArtistBand;
    //console.log("");
  }

  set artistFormerBand(newArtistFormerBand) {
    this.artistFormerBand = newArtistFormerBand;
    //console.log("");
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