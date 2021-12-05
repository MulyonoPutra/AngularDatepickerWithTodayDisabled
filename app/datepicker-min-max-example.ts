import {Component} from '@angular/core';

/** @title Datepicker with min & max validation */
@Component({
  selector: 'datepicker-min-max-example',
  templateUrl: 'datepicker-min-max-example.html',
  styleUrls: ['datepicker-min-max-example.css'],
})
export class DatepickerMinMaxExample {
  today = new Date();
  tomorrow = new Date();
  maxDate = new Date(2020, 0, 1);

  constructor() {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */