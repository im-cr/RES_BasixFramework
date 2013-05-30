$(document).ready(function(){


  //google webfont inclusion
  WebFontConfig = {
    google: { families: ['Abril+Fatface::latin','Vollkorn:400,400italic:latin','Open+Sans:400,300,400italic,300italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 


});