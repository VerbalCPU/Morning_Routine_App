import fire_setup from './controllers/Firebase';

signupUser = (email,password) => {

  try{
    if(password.length < 6){
      alert("Please enter at least 6 characters");
      return;
    }else if (email.length == 0){
      alert("Please insert an email")
    }
     return fire_setup.auth().createUserWithEmailAndPassword(email,password).then(function(user){
      alert("you are signed up!");
    });
  }
  catch(error){
    console.log(error);
  }
}

export default signupUser;
