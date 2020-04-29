import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meetup } from '../models/meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor(private http: HttpClient) { 

  }

  getMeetups(): Promise<Meetup[]> {
    const p = this.http.get<Meetup[]>('http://localhost:1337/meetups').toPromise();
    p.then(data => {
      console.log(data);
    });

    return p;
  }
}
