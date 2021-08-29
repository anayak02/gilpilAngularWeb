import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  public currDate:any;
  minDate:_moment.Moment;
  maxDate:_moment.Moment;
  constructor(public datepipe:DatePipe,private fb:FormBuilder) { }

  ngOnInit() {
    
    this.homeForm = this.fb.group({
       date : new FormControl(moment())
    });

    this.maxDate = moment();
    

  }
  
  get f() {return this.homeForm.controls};
  
  dateValue(){
    console.log(this.datepipe.transform(this.f.date.value, 'dd-MM-yyyy'))
  }
}
