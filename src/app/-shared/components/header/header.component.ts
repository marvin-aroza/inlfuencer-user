import { Component, OnInit } from '@angular/core';
import { PopupserviceService } from 'src/app/_Core/Services/popupservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    // public dialogRef: MatDialogRef<RegistrationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private popupService: PopupserviceService
  ) {}

  ngOnInit(): void {
    
  }

  openModal() {
    this.popupService.register();
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
