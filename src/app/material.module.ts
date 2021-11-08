import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';

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
        MatTableModule,
        FlexLayoutModule,
        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSortModule 
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
        MatTableModule,
        FlexLayoutModule,
        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatSortModule, 
    ]
})
export class MaterialModule {

}