import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {

   }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  myBlurFunc(){
    alert(">");
  }
}
