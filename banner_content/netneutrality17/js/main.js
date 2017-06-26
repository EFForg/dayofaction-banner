$(window).on('load',function(){
  function dayShow2() { // switching from frame1 to frame2
    $('#frame1').hide();
    $('#frame2').show("fast");
    $('.real').css("display","block");
    $('.fake').css("display","none");
    $('body').on('click',function(event) {
      closeModal();
    });
  }

  function closeModal(){
    $('#dayofaction').modal('hide');
  }

  $('#dayofaction').modal({
    show : true,
    keyboard : true,
    backdrop : "static" // backdrop is static so we can control when modal switches and closes
  });

  if ( $('#frame2').css('display') == 'none') { //clicking anywhere when frame2 is hidden switches modal to frame2
    $('body').on('click',function(event) {
      dayShow2();
    });
  }

  timer = window.setTimeout(function(e) { // if no action taken, switch to frame2 after 8 seconds
    dayShow2();
  }, 8000);

  timer = window.setTimeout(function(e) { // if no action taken, close modal after 22 seconds
    closeModal();
  }, 22000);

  $('#frame1').on('mouseover', function(event) { // if user clicks on frame1, immediately switch to frame2
      dayShow2();
  });


});
