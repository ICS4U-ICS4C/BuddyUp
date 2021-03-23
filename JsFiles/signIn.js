//signIn function
function sign_In(email,password) {
  //set Persistence type
  firebase.auth().signInWithEmailAndPassword(email,password).then((userCred)=>{
    if(userCred.user.emailVerified){
      sign_In_mail.value = "";
      sign_in_password.value = "";
      window.open("https://ics4u-ics4c.github.io/buddyup-buddyup2-0/HtmlFiles/Home.html","_blank")
    }
    else{
      shake('input[name=signinusername]')
      setValue('input[name=signinusername]',"Email not verified")
      firebase.auth().signOut()
    }
  }).catch((error)=>{
      error = error.code
      if(error == "auth/user-not-found"){
        shake('input[name=signinusername]')
        setValue('input[name=signinusername]',"Email adress not registerd")
      }
      if(error == "auth/wrong-password"){
        shake('input[name=signinpassword]')
        setValue('input[name=signinpassword]',"Wrong password")
    }
  })
}

//signin
function signIn(){
  sign_In(sign_In_mail.value.toString(),sign_in_password.value.toString())
}
