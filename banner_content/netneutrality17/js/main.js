$(window).on('load',function(){
  function dayShow2() { // switching from frame1 to frame2
    $('#frame1').hide();
    $('#frame2').show("fast");
    $('.real').css("display","block");
    $('.fake').css("display","none");
  }

  $('#dayofaction').modal({
    show : true,
    keyboard : true,
    backdrop : "static", // backdrop is static so we can control when modal switches and closes
  }).on("hidden.bs.modal", function() {
    window.parent.postMessage("eff-doa-closeModal", "*");
  });

  // clicking anywhere when frame2 is hidden switches modal to frame2
  // otherwise close the modal
  $('body').on('click',function(event) {
    if ($('#frame2').css('display') == 'none')
      dayShow2();
    else
      $('#dayofaction').modal('hide');
  });

  var timer = window.setTimeout(function(e) { // if no action taken, switch to frame2 after 8 seconds
    dayShow2();
  }, 8000);


  $('#frame2').on('click', function(event) { // close modal
    window.parent.postMessage("eff-doa-closeModal", "*");
  });
});
