import { Component, Inject, OnInit } from '@angular/core';
//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//Validators
import { MustMatch } from 'src/app/-shared/Validators/password_match'
import { PopupserviceService } from 'src/app/_Core/Services/popupservice.service';
import { UserService } from 'src/app/_Core/Services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //Variables
  form!: FormGroup;
  formLoaded = false;
  isFormSubmitted : Boolean  = false;

  constructor(
    // private modalService: ModalService,
    private fb: FormBuilder,
    private userService: UserService,
    private popupService: PopupserviceService
    ) {
      this.createForm();
     }


  ngOnInit(): void {
  }


  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirm_password')
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  register() {
    console.log(this.form);

    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for Registration
      let formData = {
        firstname: this.f['first_name'].value,
        lastname: this.f['last_name'].value,
        email: this.f['email'].value,
        password: this.f['password'].value,
        role: 'User'
      }

      //Registration service call to send request to server
      this.userService.addUser(formData).subscribe((res: { status: any; message: any; }) => {
        console.log(res);
        if(res.status) {
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.popupService.login();
            });
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

  login() {
    this.popupService.login();
  }

}
