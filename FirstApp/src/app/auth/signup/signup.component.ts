import { Component } from '@angular/core';
import { signup } from 'src/app/types/signup';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm:signup = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  signup() {
    if(this.signupForm.password !== this.signupForm.confirmPassword) {
      alert("confirm password is not valid");
      return;
    }
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.signupForm.email, this.signupForm.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }
}
