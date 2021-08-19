document.getElementById('send-btn').addEventListener('click', function(){
// get email
   const emailfield = document.getElementById('user-email');
   const useremail = emailfield.Value;
// get password
   const passfiled = document.getElementById('user-password');
   const userpassword = passfiled.value;
//  check email and password
//   if(useremail == 'sontan@bap.com' && userpassword == 'secret'){
      window.location.href = 'banking.html';
//   }

})