import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import {BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseUrl = 'http://localhost:3000/api/';
  private url = 'http://localhost:3000/api/trips';
  

  public getTrips() : Observable<Trip[]> {
    //console.log('Inside TripDataService::getTrips');
    return this.http
    .get<Trip[]>(this.url);
  }

  public addTrip(formData: Trip) : Observable<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    //console.log('Inside TripDataService::addTrip');
    return this.http
    .post<Trip>(this.url, formData, httpOptions);
  }

  public getTrip(tripCode: string) : Observable<Trip[]> {
    //console.log('Inside TripDataService::getTrip');
    return this.http
    .get<Trip[]>(this.url + '/' + tripCode);
  }

  public updateTrip(formData: Trip) : Observable<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    //console.log('Inside TripDataService::updateTrip');
    return this.http
    .put<Trip>(this.url + '/' + formData.code, formData, httpOptions);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }


  private makeAuthApiCall(urlPath: string, user: User):
  Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as AuthResponse)
    .catch(this.handleError);
 }

  private handleError(_handleError: any): Promise<any> {
    throw new Error('Oops! Something went wrong on our end.');
  }
 
}
