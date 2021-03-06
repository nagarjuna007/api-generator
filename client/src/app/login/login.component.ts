import { Component, OnInit } from '@angular/core';
import { LoginModel } from './loginmodel';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: LoginModel;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loginModel = this.loginForm.value;
    if (this.loginModel.username == 'user' && this.loginModel.password == 'user') {
      this.router.navigate(['user/home']);
    }
    else {
      console.log('error');
    }
  }
}
