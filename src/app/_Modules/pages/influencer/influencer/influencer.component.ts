import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/_Core/Services/influencer.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent implements OnInit {

  // variable
  influencerList:any = []
  constructor(
    private influencerService: InfluencerService
  ) { }

  ngOnInit(): void {
    this.getInfluencerList();
  }

  getInfluencerList() {
    this.influencerService.getInfluencerList().subscribe(res => {
      this.influencerList = res.data
    });
  }

}
