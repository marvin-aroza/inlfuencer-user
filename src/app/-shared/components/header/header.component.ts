import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Core/Services/auth.service';
import { PopupserviceService } from 'src/app/_Core/Services/popupservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetaisl:any

  constructor(
    // public dialogRef: MatDialogRef<RegistrationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private popupService: PopupserviceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getdetails()
  }

  openModal() {
    this.popupService.register();
  }

  getdetails() {
    this.userDetaisl = this.authService.getUserDetails();
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
