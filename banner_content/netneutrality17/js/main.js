$(window).on('load',function(){
  $('#dayofaction').modal('show');
  function dayHideShow() {
    $('#frame1').hide();
    $('#frame2').show("slow");
    $('.real').css("display","block");
    $('.fake').css("display","none");
  }
  $('#frame1').on('mouseover', function(event) {
    timer = window.setTimeout(function() {
      dayHideShow();
    }, 4000);
  });

  $('#frame1').click(function (e) {
    e.defaultPrevented;
    dayHideShow();
  });
});
