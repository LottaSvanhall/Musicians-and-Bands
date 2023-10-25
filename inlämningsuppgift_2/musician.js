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
    this.artistAge //= parseInt(Date().substring(11, 16).trim()) - this.artistBirth
    this.instruments = instruments;

    this.artistBand = artistBand;
    this.artistFormerBand = artistFormerBand;
    //console.log("Nu är card skapad!");

  }
  /*
    getAge() {
    
      const currentYear = new Date().getFullYear();
      return currentYear - this.artistBirth;
  
  }
  */

  /*artistAge() {
    const year = parseInt(Date().substring());
    const age = year - this.artistBirth;
  }*/
  /*var dateString = '13011948';
  use substr to cut them into parts and use parseInt to convert them to number.

  var month = parseInt(dateString.substr(0, 2), 10),
    day = parseInt(dateString.substr(2, 2), 10),
    hour = parseInt(dateString.substr(4, 2), 10),
    minute = parseInt(dateString.substr(6, 2), 10);*/

}