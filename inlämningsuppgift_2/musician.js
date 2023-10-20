export default class Musician {

  artistName;
  artistInfo; //infotext
  artistBirth; //födelsesår
  instruments; //Vilka instrument som musiker spelar
  artistBand; //lista över band musikern är med i
  artistFormerBand; //Lista över tidigare band musiker varit med i


  constructor(artistName, artistInfo, artistBirth, instruments, artistBand, artistFormerBand) {
    this.artistName = artistName;
    this.artistInfo = artistInfo; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.artistBirth = artistBirth;
    this.instruments = instruments;

    this.artistBand = artistBand;
    this.artistFormerBand = artistFormerBand;
    //console.log("Nu är card skapad!");

  }
}