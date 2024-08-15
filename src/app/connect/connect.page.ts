import {Component, inject, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {ContactFormModel} from "../models/sub-models/contact-form.model";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage {

  private http = inject(HttpClient);
  private _snackbar = inject(MatSnackBar);

  @ViewChild('form') form;
  contactModel: ContactFormModel;
  formDirective: FormGroupDirective;
  categoryList: string[] = ['Prayer Request', 'Missions Trips', 'Community Event(s)', 'Our Ministries', 'Ministries We Support', 'Guest Speakers', 'Other'];


  contactForm = new FormGroup({
    category: new FormControl('', {
      validators: [Validators.required]
    }),
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(40), Validators.minLength(5)]
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    phone: new FormControl('', {
      updateOn: 'blur'
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(500), Validators.minLength(30)]
    })
  });

  openSnackBar() {
    this._snackbar.open("Thank You For Your Submission!", "Close");
  }

  onContactForm() {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.contactModel = {
        category: this.contactForm.value.category,
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        description: this.contactForm.value.description
      };
      this.http.post('https://formspree.io/f/xleavqyl',
        this.contactModel,
        {'headers': headers}).subscribe(
        response => {
        }
      );
      this.form.resetForm();
    }
  }

}
