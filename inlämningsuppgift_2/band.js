export default class Band {
  name;
  infoText; //infotext
  yearFound; //årtal bandet bildades
  yearEnded; //årtal bandet upplöstes
  listMemberInfo; //lista över medlemmar och vilket år de gick med i bandet samt vilket/vilka instrument de spelade i bandet
  listFormerMemberInfo; //Lista över tidigare medlemmar med samma info per musiker som för nuvarande medlemmar samt vilket år musiker lämnade bandet


  constructor(name, infoText, yearFound, yearEnded, listMemberInfo, listFormerMemberInfo) {
    this.name = name;
    this.infoText = infoText; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.yearFound = yearFound;
    this.yearEnded = yearEnded;
    this.listMemberInfo = listMemberInfo;
    this.listFormerMemberInfo = listFormerMemberInfo
    console.log("Nu är band skapad!");

  }
  addBand() {
    //lägga till en musiker till ett band
  }

  deleteBand() {
    //ta bort en musiker från ett band
  }

  showBand()
  {
    
}

  //då ska även musikers lista över vilka band hen är med i uppdateras.
  }
