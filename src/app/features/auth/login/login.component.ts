import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb : FormBuilder) { }
  // Varibles are declared here
  loginForm: any; 

  ngOnInit(): void {
    // Initialization logic here
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      // Handle successful login here
      console.log('Login successful', this.loginForm.value);
    } else {
      // Handle form errors here
      console.log('Form is invalid');
    }
  }
}
