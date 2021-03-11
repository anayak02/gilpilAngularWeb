import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/http-services/user/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UserService) {

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
