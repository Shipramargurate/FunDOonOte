import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UserService } from 'src/app/services/userservice/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder, private user: UserService, private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required]],


    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(data).subscribe((response: any) => {
        console.log("login sucessfully", response)
        localStorage.setItem('token', response.id)

        this.router.navigate(['home'])

      })
    }
  }
}
