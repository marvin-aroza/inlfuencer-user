import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfluencerService } from 'src/app/_Core/Services/influencer.service';

@Component({
  selector: 'app-influencer-view',
  templateUrl: './influencer-view.component.html',
  styleUrls: ['./influencer-view.component.css']
})
export class InfluencerViewComponent implements OnInit {

  id:any = this.route.snapshot.params['id']
  influencerDetails:any
  buttonText = 'Request Collaboration';
  buttonSent = false;

  constructor(
    private route: ActivatedRoute,
    private influencerService: InfluencerService
  ) { }

  ngOnInit(): void {
    this.getInfluencerDetails();
  }

  getInfluencerDetails() {
    this.influencerService.getInfluencerById(this.id).subscribe(res => {
      if(res.status) {
        this.influencerDetails = res.data[0]
      }
    })
  }

  collabRequest(id: any) {

    let userid = localStorage.getItem('id');
    let body = {
        "userId": userid,
        "influencerId": id
    }

    this.influencerService.requestCollab(body).subscribe(res => {
      this.buttonText = 'Request Sent',
      this.buttonSent = true;
    });
  }

}
