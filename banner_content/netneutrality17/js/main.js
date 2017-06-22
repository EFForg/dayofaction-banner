$(window).on('load',function(){
  function dayShow2() {
    $('#frame1').hide();
    $('#frame2').show("fast");
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

if ($('#frame1:visible')) {
  //alert('see it');
  $('body').on('click',function(event) {
    $('#dayofaction').modal('show');
    dayShow2();
  });
}

if ($('#frame1:hidden')) {
  alert('dont see it');
  $('body').on('click',function(event) {
    $('#dayofaction').modal('hide');
  });
}


  timer = window.setTimeout(function(e) {
    closeModal();
  }, 20000);

  $('#frame1').on('mouseover', function(event) {
    timer = window.setTimeout(function() {
      dayShow2();
    }, 2000);
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
