import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../services/meetups.service';
import { Meetup } from '../models/meetup';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public meetups: Meetup[];

  constructor(private meetupsSvc: MeetupsService) {
    this.meetups = [];
  }
  ngOnInit(): void {
    // Let us call the meetup service
    this.meetupsSvc.getMeetups().then(data => {
      this.meetups = data;
    });
  }

}
