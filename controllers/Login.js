import fire_setup from './Firebase';


const loginUser = (email, password) => {

  try {

    fire_setup.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        alert(res.user.email);
      });

  } catch (error) {
    console.log(error);
  }
}

export default loginUser;
