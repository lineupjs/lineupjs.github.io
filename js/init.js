// lazy load google fonts
document.head.insertAdjacentHTML('beforeend', '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');

$(function() {
  $(".dropdown-button").dropdown();
  $('.button-collapse').sideNav();
  $('.carousel').carousel();
  $('.collapsible').collapsible();
});
