export default class Band {

  name;
  infoText; //infotext
  yearFounded; //årtal bandet bildades
  yearEnded; //årtal bandet upplöstes
  listMemberInfo; //lista över medlemmar och vilket år de gick med i bandet samt vilket/vilka instrument de spelade i bandet
  listFormerMemberInfo; //Lista över tidigare medlemmar med samma info per musiker som för nuvarande medlemmar samt vilket år musiker lämnade bandet


  constructor(name, infoText, yearFounded, yearEnded, listMemberInfo, listFormerMemberInfo) {
    this.name = name;
    this.infoText = infoText; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.yearFounded = yearFounded;
    this.yearEnded = yearEnded;

    this.listMemberInfo = listMemberInfo;
    this.listFormerMemberInfo = listFormerMemberInfo;
    // console.log("Nu är band skapad!");

  }
  get name() {
    return this.name;
    //console.log("Lägg till ett namn: ");
  }

  get infoText() {
    return this.infoText;
    //console.log("Lägg till info text: ")
  }

  get yearFounded() {
    return this.yearFounded;
  }

  get yearEnded() {
    return this.yearEnded;
  }

  set name(newName) {
    this.name = newName;
    //console.log("");
  }

  set infoText(newInfoText) {
    this.infoText = newInfoText;
    //console.log("");
  }

  set yearFounded(newYearFounded) {
    this.yearFounded = newYearFounded;
    //console.log("");
  }

  set yearEnded(newYearEnded) {
    this.yearEnded = newYearEnded;
    //console.log("");
  }

  showBandInfo() {

  }
  //då ska även musikers lista över vilka band hen är med i uppdateras.
}
