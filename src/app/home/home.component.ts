import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getSearchVal: string = '';
  searchForm: FormGroup;
  allObj: any = {};
  jobObj: any = {};
  allJobsPreferenceObj: any = {};
  showLoader: boolean = true;

  constructor(private _homeService: HomeService, fb: FormBuilder, private spinnerService: Ng4LoadingSpinnerService, ) {
    this.searchForm = fb.group({
      search: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.spinnerService.show(); // show loader
    this.getAllData();
    this.getJobListingData();
    this.getJobListingDataPreference();
  }

  // get all data
  getAllData() {
    this._homeService.jobListingData()
      .subscribe((data: any) => {
        this.allObj = data;
        for (var key in this.allObj) {
          // console.log('val =>', this.allObj[key].title);
        }
        this.showLoader = false;
        this.spinnerService.hide(); //hide the spinner if success
      })
  }

  // get all job listing by place
  getJobListingData() {
    this._homeService.jobListingServiceByPlace()
      .subscribe((allJobsObj: any) => {
        this.jobObj = allJobsObj;
        this.showLoader = false;
        this.spinnerService.hide(); //hide the spinner if success
      })
  }

  // get all job listing by prefernce
  getJobListingDataPreference() {
    this._homeService.jobListingServiceByPreference()
      .subscribe((data: any) => {
        this.allJobsPreferenceObj = data;
        this.showLoader = false;
        this.spinnerService.hide(); //hide the spinner if success
      })
  }

  // get the values on the basis of search
  searchPlace() {
    this.getSearchVal = JSON.stringify(this.searchForm.value.search);
    this._homeService.jobListingSearchPlaceService(this.getSearchVal)
      .subscribe((DATA: any) => {
        console.log('data =>', DATA);
      })
  }
}
