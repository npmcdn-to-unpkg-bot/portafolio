


// var masonry = function() {

// };



$(document).ready(function() {

$(window).load(function() {
  // masonry();
  var container = document.querySelector('#masonry');
   var msnry = new Masonry( container, {
     columnWidth: '.hov',
     itemSelector: '.hov'
   });




  // var $container = $('#masonry');
// $container.imagesLoaded( function(){
//     var msnry = new Masonry( $container[0], {
//         columnWidth: '.hov',
//         itemSelector: '.hov'
//     });
// });

////////////////////////////////////
// $container.imagesLoaded( function(){
//         $container.masonry({
//             columnWidth: '.hov',
//             itemSelector: '.hov'
//         });
    });
});
