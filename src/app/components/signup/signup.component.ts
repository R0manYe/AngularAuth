import { Component,OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string="password"
  isText: boolean=false;
  eyeIcon: string="fa-eye-slash"
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder){}


ngOnInit(): void{
  this.signUpForm=this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  username:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
})
}
hideShowPass(){
  this.isText=!this.isText;
  this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
  this.isText ? this.type="text" : this.type="password";
}
onSignup()
{
  if(this.signUpForm.valid)
  {
    console.log(this.signUpForm.value)
  }
  else
  {
    console.log("Form is not valid")
    ValidateForm.validateAllFormFields(this.signUpForm);
    alert("Your form is invalid")
  }
}


}