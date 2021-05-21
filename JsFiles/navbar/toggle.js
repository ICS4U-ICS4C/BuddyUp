var count = 0
$('.h_menu').click(function(){
  if(this.dataset.openType == 'closed'){
    document.querySelector('.menu_cont').style.width = "100vw";
    document.querySelector('.logo').style.display = 'none';
    this.dataset.openType = 'opened'
  }else{
    document.querySelector('.menu_cont').style.width = "0vw";
    this.dataset.openType = 'closed'
    document.querySelector('.logo').style.display = 'block';
  }
		$('.h_menu, .logo_m, .dbl_m').toggleClass('open');
})
