$(window).on('load',function(){
  function dayShow2() {
    $('#frame1').hide();
    $('#frame2').show("slow");
    $('.real').css("display","block");
    $('.fake').css("display","none");
  }

  function closeModal(){
    $('#dayofaction').modal('hide');
  }
  $('#dayofaction').modal({
    show : true,
    keyboard : true,
    backdrop : "static"
  });
  timer = window.setTimeout(function() {
    dayShow2();
  }, 8000);

  timer = window.setTimeout(function() {
    closeModal();
  }, 20000);

  $('#frame1').on('mouseover', function(event) {
    timer = window.setTimeout(function() {
      dayShow2();
    }, 3000);
  });

  $('#frame1').click(function (e) {
    e.defaultPrevented;
    dayShow2();
  });

  $('.fake').click(function (e) {
    e.defaultPrevented;
    dayShow2();
  });

});
