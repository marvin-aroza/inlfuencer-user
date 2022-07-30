import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/-shared/components/login/login.component';
import { RegistrationComponent } from 'src/app/-shared/components/registration/registration.component';
//Material import for modal
import { MatDialog } from '@angular/material/dialog';

//Swal import
import Swal from 'sweetalert2';

export interface DialogData {
  animal: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopupserviceService {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {

  }

  //This functions open the registration model
  register(): void {
    this.dialog.closeAll(); // This line close all existing open modals
    const dialogRef = this.dialog.open(RegistrationComponent, {
      maxWidth: '50%',
      width: '80%',
      // height: '80%',
      backdropClass: 'whiteBackground',
      data: { name: 'google', animal: '' }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }

  close() {
    this.dialog.closeAll(); // This line close all existing open modals
  }

  // login
  login() {
    this.dialog.closeAll(); // This line close all existing open modals
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: '50%',
      width: '80%',
      // height: '80%',
      backdropClass: 'whiteBackground',
      data: { name: 'google', animal: '' }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }

  successPopup(message:string){
    Swal.fire({
      text: message,
      icon: 'success',
      showCancelButton: false,
      timer: 3000,
    })
  }

  errorPopup(message:string) {
    Swal.fire({
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 3000,
      });
  }
}
