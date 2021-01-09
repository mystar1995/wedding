var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

//video play
player.on('play', function(data){
  /*var watch = 'watch';
  var user_id  = jQuery("#user-id").val();
  var post_id  = jQuery("#post-info").val();
  var post_url = jQuery("#post-url").val();

  var pdata = {
    action: "video_information",
    userinfo : user_id,
    postinfo : post_id,
    posturl  : post_url,
    videoinfo : watch,
  }
  jQuery.post(ajax_path.ajax_url,pdata,
    function ( response ) {
    }  
  );*/

});

//video complete play
player.on('ended', function(data){
  var video_info = 'complete';
  var user_id  = jQuery("#user-id").val();
  var post_id  = jQuery("#post-info").val();
  var post_url = jQuery("#post-url").val();

  var pdata = {
    action: "video_information",
    userinfo : user_id,
    postinfo : post_id,
    posturl  : post_url,
    videoinfo : video_info,
  }
  jQuery.post(ajax_path.ajax_url,pdata,
    function ( response ) {
      var ajax_result = jQuery.parseJSON(response);
      if(ajax_result.result != ''){
        window.location.href = ajax_result;
      }
    }  
  );
});
