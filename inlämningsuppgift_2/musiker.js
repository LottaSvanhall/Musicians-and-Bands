export default class Musiker {

  name;
  infoText; //infotext
  yearBirth; //födelsesår
  listBand; //lista över band musikern är med i
  listFormerBand; //Lista över tidigare band musiker varit med i
  instruments; //Vilka instrument som musiker spelar

  constructor(name, infoText, yearBirth, listBand, listFormerBand, instruments) {
    this.name = name;
    this.infoText = infoText; //refererar till saker utanför konstruktorn (cardBalance, pin)
    this.yearFound = yearFound;
    this.yearEnded = yearEnded;
    this.listMemberInfo = listMemberInfo;
    this.listFormerMemberInfo = listFormerMemberInfo
    //console.log("Nu är card skapad!");

  }

  comparePin() {
    //(ska jämföra inmatad pinkod med kortets pinkod)
  }
}