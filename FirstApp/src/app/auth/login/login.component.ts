import { Component } from '@angular/core';
import { Login } from 'src/app/types/login';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:Login = {
    email: '',
    password: '',
  };

  isLoading: boolean = false;

  login() {
    if(this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.loginForm.email, this.loginForm.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Loggin Success")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      })
      .finally(() => this.isLoading = false);
  }
}
