import { Component, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/http-services/user/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  private rowData :Array<any>=[]; 
  private paginationPageSize=10;
  private gridApi;
  private gridColumnApi;
  private noRowsTemplate;
  private loadingTemplate;
  private overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Loading...</span>';
  private overlayNoRowsTemplate = '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No Data Found !!!</span>';
  
  
  constructor(private userService:UserService,
    private ngxSpinnerService:NgxSpinnerService) {    
  
   }
  

  

  ngOnInit() {
  }

  
  columnDefs = [
    { field: 'login_user_id',headerName:'Login ID',sortable:true ,filter:true},
    { field: 'password',headerName:'Password',sortable:true ,filter:true},
    { field: 'first_name',headerName:'First Name',sortable:true ,filter:true},
    { field: 'last_name',headerName:'Last Name',sortable:true ,filter:true},
    { field: 'email',headerName:'Email' ,sortable:true,filter:true},
    { field: 'mobile_number',headerName:'Mobile Number',sortable:true ,filter:true},
    { field: 'date_of_birth',headerName:'Date Of Birth' ,sortable:true ,filter:true},
    { field: 'created_date',headerName:'Created Date',sortable:true ,filter:true}
    
    ];

    gridOptions = {
      defaultColDef: {
        editable: false,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      },
      pagination: true,
      
    };
   
    onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
      this.getAllUserDetails();
     }
      
  

    getAllUserDetails(){

      this.ngxSpinnerService.show();
                  
      this.userService.getAllUserDetails().subscribe( (data:any)=>{
        this.rowData = Array.from(data.rows);
        this.ngxSpinnerService.hide();
        },
        error=>{
            this.ngxSpinnerService.hide();
          }
          )
      }         


  }


  
  
// onPageSizeChanged(){
//   var comp = document.getElementById('page-size');
//   var pageValue = comp['value'];
//   this.gridApi.paginationPageSize(Number(pageValue));

// }


