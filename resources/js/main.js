$(document).ready(function() {
  setTimeout(function() {
      $('.jumbotron').animate({width:'toggle'},250,'easeInSine');
  }, 250);
    setTimeout(function() {
      $('#secondary').animate({opacity: 1,}, 1000, 'easeInQuart');
      $('#girl').animate ({height: '100%'}, 750, 'easeInQuart');
    }, 500);
    setTimeout(function() {
        $('#primary').animate({width:'toggle'},500,'easeInSine');
    }, 750);
    setTimeout(function() {
        $('#logo').animate({height:'toggle'},500,'easeInSine');
    }, 1250);
    setTimeout(function() {
        $('#h1').animate({height:'toggle'},500,'easeInSine');
    }, 1500);
    setTimeout(function() {
        $('#black-container').animate({height:'toggle'},500,'easeInSine');
    }, 1600);
    setTimeout(function() {
        $('#denim').animate({height:'toggle'},400,'easeInSine');
    }, 2100);
    setTimeout(function() {
        $('#link-container').animate({height:'toggle'},400,'easeInSine');
    }, 2300);
    setTimeout(function() {
        $('#link-container').animate({backgroundColor: '#feff01'},1500,'easeInSine');
    }, 2950);
});
