//Home page typed animation
$(document).ready(function(){

  $('.typed-content').typed({
    strings:["a Designer^500","a Developer.^500", "Niranjan Ravichandran.^1000"],
    typeSpeed: 100,
    loop: true,
    loopCount: 3,
  });
  $('.inner h2').hide();
  $(window).scroll(function(event){
    var y = $(this).scrollTop();
    if (y > 2000){
      $('.inner h2').show(2000);
    }
  });

  var myWorks = [{"img": "assets/img/portfolio/houseStream.png", "link": " ", "name": "HouseStream"},
  {"img": "assets/img/portfolio/motionUser.png", "link": "https://itunes.apple.com/cl/app/motionuser/id1288757953?mt=8", "name": "MotionUser"},
  {"img": "assets/img/portfolio/motionCoach.png", "link": "https://itunes.apple.com/cl/app/motioncoach/id1315912433?mt=8", "name": "MotionCoach"},
  {"img": "assets/img/portfolio/motionAdmin.png", "link": "https://itunes.apple.com/cl/app/motionadmin/id1328112828?mt=8", "name": "MotionAdmin"},
  {"img": "assets/img/portfolio/icar.png", "link": "https://play.google.com/store/apps/details?id=com.jumpitt.i_car", "name": "Icar"},
  {"img": "assets/img/portfolio/gytradeCoaches.png", "link": "https://itunes.apple.com/cl/app/gytrade-coaches/id1304458081?mt=8", "name": "Gytrade Coaches"},
  {"img": "assets/img/portfolio/gytradeCaptador.png", "link": "https://itunes.apple.com/cl/app/gytrade-captador/id1299577827?mt=8", "name": "Gytrade Captador"}];
  populateMyWorks(myWorks);

});

//Populating my recent works
function populateMyWorks(myWorks) {
  for(i=0; i <myWorks.length; i++){
    var object = myWorks[i];
    var row = document.createElement('div');
      row.className = 'col-md-4 no_padding';
      row.innerHTML = '<div class="single_image"><img src="'+object['img']+'" alt=""> <div class="image_overlay"> <a href="'+object['link']+'">Ver Proyecto</a><h2>'+object['name']+'</h2></div>';
    //document.getElementById('recentWorks').appendChild(row);
      $(row).hide().appendTo('#recentWorks').fadeIn(1000);
  }
}

function loadMoreWorks() {
  var myWorks = [{"img": "assets/img/portfolio/manager.png", "link": "https://itunes.apple.com/cl/app/appventasmanager/id1267499685?mt=8", "name": "Manager"},
  {"img": "assets/img/portfolio/waitless.png", "link": "https://itunes.apple.com/cl/app/waitless/id1159133666?mt=8", "name": "Waitless"},
  {"img": "assets/img/portfolio/waitlessBot.png", "link": "http://m.me/waitlessChile", "name": "Waitless Bot"}];
  populateMyWorks(myWorks);
  var x = document.getElementById('loadButton')
  x.parentNode.removeChild(x);
}
