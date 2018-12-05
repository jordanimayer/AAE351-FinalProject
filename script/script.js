$(function() {
  $('.tab').hover(function () {
    $('ul', this).delay(50).stop().slideDown(300);
  }, function() {
    $('ul', this).delay(50).stop().slideUp(300);
  });
});
