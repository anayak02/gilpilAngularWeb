import { Component, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../../http-services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  loading = false;
  constructor(private userService:UserServiceService) {

   }

  usersList:Array<any>=[]; 
 

  ngOnInit() {
    this.loading = true;
    this.getAllUserDetails();
  }

  getAllUserDetails(){

    this.userService.getAllUserDetails().subscribe((data:any)=>{

      this.usersList = Array.from(data.rows);
      console.log(this.usersList);
      this.loading = true;
    })
  }

}
