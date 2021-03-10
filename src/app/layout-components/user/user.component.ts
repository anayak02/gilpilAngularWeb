import { Component, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
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
