window.onload = async function(){
  setTimeout(()=>{
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user && auth.currentUser.emailVerified){
          await firebase.database().ref(`Users/${firebase.auth().currentUser.uid}/online`).set('true')
        }else{
          // User not logged in or has just logged out.
//           window.location = '../index.html'
//           firebase.database().ref(sessionStorage.getItem('member')).remove()
        }
    });
  },1500)
}
