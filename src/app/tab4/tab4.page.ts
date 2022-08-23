import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  name: string;
  phone: string;
  zip: string;
  message: string;

  constructor() { }

  validate() {
    if (!this.name || this.name.length <= 1) {
      this.message = 'You must specify a name';
      return;
    }
    if (!this.phone || (this.phone).toString().length < 8) {
      this.message = 'You must specify a phone number of at least 8 digits';
      return;
    }
    if (!this.zip || (this.zip).toString().length < 6) {
      this.message = 'You must specify a zip code of at least 6 digits';
      return;
    }
    this.message = undefined;
  }
}
