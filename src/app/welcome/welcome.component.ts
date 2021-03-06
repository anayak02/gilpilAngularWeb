import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public isMobile: Boolean;
  
  constructor(private responsiveService:ResponsiveService
    ) { }
    
  ngOnInit() {
    // call to check the device size for responsive
    this.onResize();
   
  }
  onResize() {
      this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  
}
