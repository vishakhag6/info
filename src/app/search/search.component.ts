import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  @Input() getSearchVal: string;

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      search: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  searchPlace() {
    console.log(this.searchForm.value)
    this.getSearchVal = this.searchForm.value;
  }

}
