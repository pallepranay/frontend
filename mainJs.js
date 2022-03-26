// Ayush Code
var vid = document.getElementsByClassName("vidContainer");
// $(window).scroll(function(e) {
//   var scrollTop = $(window).scrollTop();
//   var docHeight = $(document).height();
//   var winHeight = $(window).height();
//   var scrollPercent = (scrollTop) / (docHeight - winHeight);
// // console.log(scrollTop);
// });
console.log(vid[0].getBoundingClientRect().top)

$(window).scroll(function(e) {
  if (vid[0].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[0].style.animation = "vidAnime 1s forwards";
  }
  if (vid[1].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[1].style.animation = "vidAnime 1s forwards";
  }
  if (vid[2].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[2].style.animation = "vidAnime 1s forwards";
  }
  if (vid[3].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[3].style.animation = "vidAnime 1s forwards";
  }
  if (vid[4].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[4].style.animation = "vidAnime 1s forwards";
  }
  if (vid[5].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[5].style.animation = "vidAnime 1s forwards";
  }
  if (vid[6].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[6].style.animation = "vidAnime 1s forwards";
  }
});
