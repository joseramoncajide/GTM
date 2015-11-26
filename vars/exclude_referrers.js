function() {
  var referrals = [
    'xyz.com',
    'abc.com'
  ];
  var hname = new RegExp('https?://([^/:]+)').exec({{Referrer}});
  if (hname) { 
    for (var i = referrals.length; i--;) {
      if (new RegExp(referrals[i] + '$').test(hname[1])) {
        return null;
      }
    }
  }
  return {{Referrer}};
}
