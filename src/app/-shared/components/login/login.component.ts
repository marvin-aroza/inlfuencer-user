import { Component, OnInit } from '@angular/core';
//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/_Core/Services/auth.service';

import { PopupserviceService } from 'src/app/_Core/Services/popupservice.service';
import { UserService } from 'src/app/_Core/Services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables
  form!: FormGroup;
  formLoaded = false;
  isFormSubmitted : Boolean  = false;

  constructor(
    // private modalService: ModalService,
    private fb: FormBuilder,
    private userService: UserService,
    private popupService: PopupserviceService,
    private authService: AuthService
    ) {
      this.createForm();
     }


  ngOnInit(): void {
  }


  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  login() {
    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for login
      let formData = {
        email: this.f['email'].value,
        password: this.f['password'].value
      }

      //login service call to send request to server
      this.authService.login(formData).subscribe(res => {
        if(res.status) {
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.popupService.close();
            });
            window.location.reload()
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }

  register() {
    this.popupService.register();
  }

}
