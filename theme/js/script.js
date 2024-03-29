$(document).ready(function(){
  show = false;

  $(".hidden").hide();
  $('.external').click(function(e) { window.open($(this).attr('href'),'_blank'); return false;});

  var menu = document.getElementById('menu'),
      showcode = document.getElementById('showcode');

  showcode.addEventListener('click', _toggleCode);
  function _toggleCode() {
    menu.classList.toggle('viewCode');
    if (show) {
      $(".hidden").hide();
      $(".visible").show();
    } else {
      $(".hidden").show();
      $(".visible").hide();
    }
    show = !show;
  }
});
