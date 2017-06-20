$(document).ready( function () {
  var listener = function() {
    document.removeEventListener('mouseover', listener);
    document.getElementsByTagName('body')[0].classList.add('frame2');
  };
  document.addEventListener("mouseover", listener);
  setTimeout(listener, 5000);
  $('#frame1').click(function (e) {
    e.preventDefault();
    $('#frame1').css("display","none");
    $('#frame2').css("display","block");
  });

});
