import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactFormModel} from "../models/contact-form.model";

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  contactModel: ContactFormModel;

  contactForm = new FormGroup({
    category: new FormControl('', {
      // updateOn: 'change',
      validators: [Validators.required]
    }),
    name: new FormControl('', {
      // updateOn: 'change',
      validators: [Validators.required, Validators.maxLength(40), Validators.minLength(5)]
    }),
    email: new FormControl('', {
      // updateOn: 'change',
      validators: [Validators.email, Validators.required]
    }),
    phone: new FormControl('', {
      updateOn: 'blur'
    }),
    comment: new FormControl('', {
      // updateOn: 'change',
      validators: [Validators.required, Validators.maxLength(500), Validators.minLength(30)]
    })
  });

  categoryList: string[] = ['Prayer Request', 'Missions Trips', 'Community Event', 'Our Ministries', 'Ministries We Support', 'Guest Speakers', 'Other'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onContactForm() {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.contactModel = {
        category: this.contactForm.value.category,
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        comment: this.contactForm.value.comment
      }
      console.log(this.contactForm);
      this.http.post('https://formspree.io/f/xleavqyl',
        this.contactForm,
        {'headers': headers}).subscribe(
        response => {
          console.log(response);
        }
      )
      this.contactForm.reset();
    }
  }

}
