export default class Musician {

  artistName;
  artistInfo;
  artistBirth;
  instruments;
  artistBand;
  artistFormerBand;


  constructor(artistName, artistInfo, artistBirth, instruments, artistBand, artistFormerBand) {
    this.artistName = artistName;
    this.artistInfo = artistInfo;
    this.artistBirth = artistBirth;
    this.artistAge = parseInt(Date().substring(11, 16).trim()) - this.artistBirth
    this.instruments = instruments;

    this.artistBand = artistBand;
    this.artistFormerBand = artistFormerBand;

  }
  
}