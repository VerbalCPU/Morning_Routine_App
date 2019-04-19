import fire_setup from './controllers/Firebase';


const loginUser = (email,password) => {

  try{

    return fire_setup.auth().signInWithEmailAndPassword(email,password).then(function(user){
      console.log(user);

    });

  }
  catch(error){
    console.log(error);
  }
}

export default loginUser;
