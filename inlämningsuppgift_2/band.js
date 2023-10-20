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

  }
}