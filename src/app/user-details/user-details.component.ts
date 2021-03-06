import { Component, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UserServiceService) {

   }
  usersList:Array<any>=[]; 

  name:string="arjun";

  ngOnInit() {
    this.getAllUserDetails();
  }

  getAllUserDetails(){

    this.userService.getAllUserDetails().subscribe((data:any)=>{

      this.usersList = Array.from(data.rows);
      console.log(this.usersList);
    })
  }

}
