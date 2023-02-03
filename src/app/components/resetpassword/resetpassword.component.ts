import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
constructor(
  private formBuilder: FormBuilder, private user: UserService
){}

   ngOnInit() {
   this.resetForm=this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],

   })
   }
   get f() { return this.resetForm.controls; }

   onSubmit() {
    this.submitted = true;

    if (this.resetForm.valid) {
      
      let data = {
        password: this.resetForm.value.password,
        confirmPassword : this.resetForm.value.password
      }
      this.user.resetpassword(data).subscribe((response: any) => {
        console.log(response)
      })
  }
  }
}


