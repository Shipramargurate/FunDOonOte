import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  [x: string]: any;
  forgetForm!: FormGroup;
  submitted = false;
constructor(
  private formBuilder: FormBuilder , private user: UserService
  ){}

   ngOnInit() {
   this.forgetForm=this.formBuilder.group({
    forgotpassword : ['', Validators.required],

   })
   }
   get f() { return this.forgetForm.controls; }

   onSubmit() {
    this.submitted = true;

    if (this.forgetForm.valid) {
      let data = { 
        forgotpassword: this.forgetForm.value.forgotpassword,
      }
      this.user.reset(data).subscribe((response: any) => {
        console.log(response)
      })
  }
  }
}

