
var masonry = function() {

  var container = document.querySelector('#masonry');
    var msnry = new Masonry( container, {
      columnWidth: '.item',
      itemSelector: '.item'

    });

};


$(window).load(function() {
  masonry();




});
