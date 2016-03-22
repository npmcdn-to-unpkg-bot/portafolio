

// }

$(document).ready(function(){

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var id = JSON.parse(ids.replace(/&quot;/g,'"'))
var l = id.length;

  onYouTubeIframeAPIReady = function () {
    for(i = 0; i < l; i++){
    player = new YT.Player('player'+i, {
        height: '215',
        width: '360',
        videoId: id[i],  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
            // 'modestbranding': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
  }
}



onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).fadeOut('normal');
    player.playVideo();
});

});
// aca
