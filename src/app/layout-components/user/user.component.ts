import { Component, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/http-services/user/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UserService,
    private ngxSpinnerService:NgxSpinnerService) {

   }
  usersList:Array<any>=[]; 

  

  ngOnInit() {
    
     this.getAllUserDetails();
    
   
  }

  getAllUserDetails(){

    this.ngxSpinnerService.show();

    this.userService.getAllUserDetails().subscribe( (data:any)=>{
        this.usersList = Array.from(data.rows);
        console.log(this.usersList);
        this.ngxSpinnerService.hide();
    },
    error=>{
      this.ngxSpinnerService.hide();
    }
    )
  }

}
