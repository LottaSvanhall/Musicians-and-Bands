export default class Band {

  bandName;
  bandInfo;
  bandFounded;
  bandEnded;

  memberInfo = []
  formerMemberInfo = []

  constructor(bandName, bandInfo, bandFounded, bandEnded, memberInfo = [], formerMemberInfo = []) {
    this.bandName = bandName;
    this.bandInfo = bandInfo;
    this.bandFounded = bandFounded;
    this.bandEnded = bandEnded;
    this.memberInfo = memberInfo;
    this.formerMemberInfo = formerMemberInfo;

  }

}