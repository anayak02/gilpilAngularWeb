import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gilpilweb';
  
  constructor(private responsiveService:ResponsiveService){

  }

  ngOnInit(): void {
    this.drawWaterMark();
   }

   /** this method is checking the device width for responsive */
  onResize(){
    this.responsiveService.checkWidth();
  }

  drawWaterMark(){
    var can = document.createElement('canvas');
       var body = document.body;

       body.appendChild(can);

       can.width=500;
       can.height=190;
       can.style.display='none';


       var cans = can.getContext('2d');
       cans.rotate(-20*Math.PI/180);
       cans.font = "24px Microsoft JhengHei";
       cans.fillStyle="#ccc";

       cans . fillText ( 'Welcome to ' ,  0 ,  200 ) ;
        cans.font = "24px Microsoft JhengHei";
        /*        cans . fillText ( 'Water mark test' ,  150 , 200 ) ; */
       cans.fillStyle="#ccc";

       cans.font = "24px Microsoft JhengHei";
       cans.fillStyle="#ccc";
       cans.fillText('gilpil.com', 140,200);

       var body = document.body;
       body.style.backgroundImage="url("+can.toDataURL("image/png")+")";

   }

}
