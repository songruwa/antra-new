import { Component, OnInit } from '@angular/core';
import { OfficeInfoService } from './office-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private officeservice: OfficeInfoService){}

  public userInfo: any;

  ngOnInit(): void {
    this.officeservice.fetchAPI();

    this.officeservice.data$.subscribe(
      data => {
        this.userInfo = data;
        console.log("userInfo: ", this.userInfo);
      },      
      error => console.log("subscribe error"+ error),      
    )

  }



}
