import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlertController} from "@ionic/angular";
import {ContactFormModel} from "../models/contact-form.model";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  form: FormGroup;
  showAlert: boolean = false;
  contactForm: ContactFormModel;

  constructor(private http: HttpClient,
              public alertController: AlertController) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      category: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      firstname: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(40)]
      }),
      lastname: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(40)]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.email, Validators.required]
      }),
      phone: new FormControl(null, {
        updateOn: 'blur'
      }),
      description: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(500), Validators.minLength(30)]
      })
    });
  }

  customAlertOptions: any = {
    header: 'Category',
    cssClass: 'another-custom-class'
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "The Father's House",
      message: 'Thank you for your submission! We will get back to you when we can!',
      mode: 'ios',
      buttons: [
        {
          text: 'OKAY',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  onContactForm() {
    if (this.form.valid) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.contactForm = {
        category: this.form.value.category,
        firstName: this.form.value.firstname,
        lastName: this.form.value.lastname,
        email: this.form.value.email,
        phone: this.form.value.phone,
        description: this.form.value.description
      }
      console.log(this.contactForm);
      this.http.post('https://formspree.io/f/xleavqyl',
        this.contactForm,
        {'headers': headers}).subscribe(
        response => {
          console.log(response);
        }
      )
      this.form.reset();
    }
  }

}
