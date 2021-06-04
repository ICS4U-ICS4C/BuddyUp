//display sign up
$('.login_container').css("display","none")
var n_bool = 0

$('.dl').click(()=>{
  $('.login_container').fadeIn()
  $(".arrows,.button,.main_text,.sub_text").css('display',"none")
})

$('.close').click(()=>{
  $('.login_container').fadeOut()
  $(".arrows,.button,.main_text,.sub_text").css('display',"block")
})

document.querySelector('.coverbutton').addEventListener('click',function(){
  var c_switch = document.querySelector('.coverbutton').textContent
  document.querySelector('.er, .button').style.display = 'none'

  if(c_switch == 'SIGN UP'){
      document.querySelector('.login_container .form').animate([
        {right:"0%"},
        {right:"40%"},
        {borderRadius:"2vh 0 0 2vh"}
      ],{
        duration: 500,
        iterations: 1
      })
      document.querySelector('.coverbutton').textContent = "SIGN IN"

      setTimeout(()=>{
        document.querySelector('.log_sign').textContent = "SIGN UP"
        document.querySelector('.login_title').textContent = "SIGN UP"
        document.querySelector('.fp').style.display = "None"
        document.querySelector('.c_t').textContent = "Hello There!"
        document.querySelector('.c_p').textContent = "Sign up to make your PC"
        document.querySelector('.close').style.left = "3%"
        $('.profile-container').css('display','flex')
      },125)

      document.querySelector('.login_container .cover').animate([
        {right:"60%"},
        {right:"0%"},
        {borderRadius:"0 2vh 2vh 0"}
      ],{
        duration: 500,
        iterations: 1
      })

      document.querySelector('.login_container .cover').style.right = "0%"
      document.querySelector('.login_container .cover').style.borderRadius = "0 2vh 2vh 0"
      document.querySelector('.login_container .form').style.right = "40%"
      document.querySelector('.login_container .form').style.borderRadius = "2vh 0 0 2vh"
  }else{
      document.querySelector('.login_container .form').animate([
        {right:"40%"},
        {right:"0%"},
        {borderRadius:"0 2vh 2vh 0"}
      ],{
        duration: 500,
        iterations: 1
      })
      document.querySelector('.coverbutton').textContent = "SIGN UP"
      setTimeout(()=>{
        document.querySelector('.log_sign').textContent = "SIGN IN"
        document.querySelector('.login_title').textContent = "LOGIN"
        document.querySelector('.fp').style.display = "Block"
        document.querySelector('.c_t').textContent = "Welcome Back!"
        document.querySelector('.c_p').textContent = "Sign in to make your PC"
        document.querySelector('.close').style.left = "93%"
        $('.profile-container').css('display','none')

      },125)

      document.querySelector('.login_container .cover').animate([
        {right:"0%"},
        {right:"60%"},
        {borderRadius:"2vh 0 0 2vh"}
      ],{
        duration: 500,
        iterations: 1
      })

      document.querySelector('.login_container .cover').style.right = "60%"
      document.querySelector('.login_container .cover').style.borderRadius = "2vh 0 0 2vh"
      document.querySelector('.login_container .form').style.right = "0%"
      document.querySelector('.login_container .form').style.borderRadius = "0 2vh 2vh 0"
  }
})

document.querySelector('.l_r').addEventListener('click',function() {

  var element_array = {
    'l_r':["SIGN IN","SIGN UP"],
    'f_p':['None','Block'],
    'profile-container-m':["flex","None"],
    'login_title_m':["SIGN UP","LOGIN"],
    'log_sign_m':["SIGN UP","SIGN IN"],
  }

  Object.keys(element_array).forEach((item, i) => {
    if(i == 1 || i == 2){
      document.querySelector(`.${item}`).style.display = element_array[item][n_bool%2]
    }else{
      document.querySelector(`.${item}`).textContent = element_array[item][n_bool%2]
    }
  });

  n_bool++
})


// forgot password display
$('.f_p,.fp').click(function(){
  
})
