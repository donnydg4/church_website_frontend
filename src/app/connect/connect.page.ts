import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  category = new FormControl('');
  categoryList: string[] = ['Prayer Request', 'Missions Trips', 'Community Event', 'Our Ministries', 'Ministries We Support', 'Guest Speakers', 'Other'];

  constructor() { }

  ngOnInit() {
  }

}
