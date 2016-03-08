
var masonry = function() {
  var container = document.querySelector('#masonry');
    var msnry = new Masonry( container, {
      columnWidth: '.col-md-4',
      itemSelector: '.col-md-4'

    });
};


$(window).load(function() {
  masonry();

});


 // hasta aca
