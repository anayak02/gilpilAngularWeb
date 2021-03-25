import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {
  
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
  
@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatTableModule
        
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatTableModule
        
    ]
})
export class MaterialModule {

}