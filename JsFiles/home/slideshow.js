var count = 0
var pause = false
var cs = {
  '0': ["images/slideshow/picture_1.jpg", "Manage Your Time With <span class=special><strong style=color:#FFFF66;>Ease</strong></span>", "Highschool can be distracting that is why we at buddyUp help you manage your time so you can achive your dreams"],
  '1': ["images/slideshow/picture_2.jpg", "Studying Made <span class=special><strong style=color:#FFFF66;>Easier</strong></span>", "Worried about an upcoming exam, with BuddyUp you can get help with the click of a button"],
  '2': ["images/slideshow/picture_3.jpg", "Achieve Your <span class=special><strong style=color:#FFFF66;>Dreams</strong></span>", "Get help with school work, get connections and achieve your dreams"]
}

function swap() {
  $('.cont_1').fadeOut(500)
  setTimeout(()=>{
    cs[((count % (Object.keys(cs).length)) + Object.keys(cs).length) % Object.keys(cs).length].forEach((item, i) => {
      if (i == 0) {
        document.querySelector('.bg').style.backgroundImage = `url(${item})`
      } else if (i == 1) {
        document.querySelector('.main_text').innerHTML = item
      } else {
        document.querySelector('.sub_text').textContent = item
      }
    });
    $('.bg, .cont_1').fadeIn(500)
  }, 500)
}

$('.arr').click(function() {
  this.name == "right_arr" ? count++ : count--;
  swap()
})

function autoSwap() {
  setTimeout(autoSwap, 6000)
  if (!pause){
    swap()
    count++
  }
}

setTimeout(autoSwap,6000)

$(".bg, .cont_1, .arr").mouseover(function(){
  if($('.login_container').is(":visible") == false){
  document.querySelector('button[name=right_arr]').style.right = '0'
  document.querySelector('button[name=left_arr]').style.left = '0'
  pause = true
}
})

$(".bg").mouseleave(function(){
  document.querySelector('button[name=right_arr]').style.right = '-100%'
  document.querySelector('button[name=left_arr]').style.left = '-100%'
  pause = false
})
