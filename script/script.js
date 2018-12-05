$(function() {
  $('.tab').hover(function () {
    $('ul', this).delay(50).stop().slideToggle(300);
  });
});
