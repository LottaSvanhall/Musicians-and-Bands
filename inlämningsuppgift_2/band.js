export default class Band {

  bandName;
  bandInfo; //infotext
  bandFounded; //årtal bandet bildades
  bandEnded; //årtal bandet upplöstes

  memberInfo = [] //lista över medlemmar och vilket år de gick med i bandet samt vilket/vilka instrument de spelade i bandet
  formerMemberInfo = [] //Lista över tidigare medlemmar med samma info per musiker som för nuvarande medlemmar samt vilket år musiker lämnade bandet


  constructor(bandName, bandInfo, bandFounded, bandEnded, memberInfo, formerMemberInfo) {
    this.bandName = bandName;
    this.bandInfo = bandInfo; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.bandFounded = bandFounded;
    this.bandEnded = bandEnded;
    this.memberInfo = memberInfo;
    this.formerMemberInfo = formerMemberInfo;
    // console.log("Nu är band skapad!");

  }
  get bandName() {
    return this.bandName;
    //console.log("Lägg till ett namn: ");
  }

  get bandInfo() {
    return this.bandInfo;
    //console.log("Lägg till info text: ")
  }

  get bandFounded() {
    return this.bandFounded;
  }

  get bandEnded() {
    return this.bandEnded;
  }

  get memberInfo() {
    return this.memberInfo;
  }
  get formerMemberInfo() {
    return this.formerMemberInfo;
  }
  set bandName(newbandName) {
    this.name = newbandName;
    //console.log("");
  }

  set infoText(newbandInfo) {
    this.infoText = newbandInfo;
    //console.log("");
  }

  set yearFounded(newbandFounded) {
    this.yearFounded = newbandFounded;
    //console.log("");
  }

  set yearEnded(newbandEnded) {
    this.yearEnded = newbandEnded;
    //console.log("");
  }

  set memberInfo(newmemberInfo) {
    this.memberInfo = newmemberInfo;
    //console.log("");
  }

  set formerMemberInfo(newformerMemberInfo) {
    this.memberInfo = newformerMemberInfo;
    //console.log("");
  }



  //då ska även musikers lista över vilka band hen är med i uppdateras.
  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "list.json". 

  /* dataInfo() { //används när variabler är privata
     return {
       "name": this.name,
       //"checkedIn": this.#checkedIn
     }
   }*/
}