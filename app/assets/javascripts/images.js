


var masonry = function() {
 var container = document.querySelector('#masonry');
  var msnry = new Masonry( container, {
    columnWidth: '.hov',
    itemSelector: '.hov'
  });
};


$(window).load(function() {
  masonry();
});
