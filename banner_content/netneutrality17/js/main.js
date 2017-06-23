$(window).on('load',function(){
  function dayShow2() {
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
  backdrop : "static"
});

if ( $('#frame2').css('display') == 'none') {
  //if ($('#frame2').is(':not(:visible)'))  {
  //alert('frame1');
  $('body').on('click',function(event) {
    //$('#dayofaction').modal('show');
    dayShow2();
  });
}


timer = window.setTimeout(function(e) {
  dayShow2();
}, 8000);

timer = window.setTimeout(function(e) {
  closeModal();
}, 20000);

$('#frame1').on('mouseover', function(event) {
  timer = window.setTimeout(function(e) {
    dayShow2();
  }, 2000);
});

//$('#frame1').click(function (e) {
//  e.defaultPrevented;
//  dayShow2();
//});

//$('.fake').click(function (e) {
//  e.defaultPrevented;
//  dayShow2();
//});

});
