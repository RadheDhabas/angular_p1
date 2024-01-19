import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../core/Model/object-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, RouterLink,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent {
  userdata_reg!: User

  signUpform!: FormGroup;
  loginForm!: FormGroup;

  constructor(private authService: LoginSignupService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signUpform = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      role: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });

  }
  get rf() {
    return this.signUpform.controls;
  }
  registerSubmit() {
    this.userdata_reg = {
      name: this.signUpform.value.name,
      password: this.signUpform.value.password,
      mobileNumber: this.signUpform.value.mobileNumber,
      email: this.signUpform.value.email,
      role: this.signUpform.value.role,
      address: {
        id: 1,
        city: this.signUpform.value.city,
        state: this.signUpform.value.state,
        zip: this.signUpform.value.zip,
      }
    }
    
    this.authService.userRegistration(this.userdata_reg).subscribe(data=>{
      console.log(data);
      console.log("Registered Successfully")
      this.router.navigateByUrl('/home');
    })
  }
}
