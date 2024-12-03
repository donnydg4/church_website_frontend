import {Component, inject, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactFormModel} from "../models/sub-models/contact-form.model";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatError, MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatSelect, MatSelectTrigger} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatInput} from '@angular/material/input';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatSelectTrigger,
    MatOption,
    MatError,
    MatInput,
    MatHint,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText
  ]
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
