import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactFormModel} from "../models/contact-form.model";

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  submit: boolean = false;

  contactModel: ContactFormModel;
  formDirective: FormGroupDirective;

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

  categoryList: string[] = ['Prayer Request', 'Missions Trips', 'Community Event(s)', 'Our Ministries', 'Ministries We Support', 'Guest Speakers', 'Other'];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  presentAlert(): void {
    this.submit = true;
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
      };
      console.log(this.contactModel);
      console.log(this.contactForm.value.category);
      this.http.post('https://formspree.io/f/xleavqyl',
        this.contactModel,
        {'headers': headers}).subscribe(
        response => {
          console.log(response);
        }
      );
      this.contactForm.reset();
    }
  }

}
