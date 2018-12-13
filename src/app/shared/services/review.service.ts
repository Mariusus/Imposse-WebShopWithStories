import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Review} from '../models/review';
import {Story} from '../models/story';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
};
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getReviews(): Observable<Review[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Review[]>(environment.apiURL + '/review', httpOptions);

  }
  createReview(review: Review): Observable<Review> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Review>(environment.apiURL + '/review', review, httpOptions);
  }

  getReviewById(review: Review): Observable<Review[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Review[]>(environment.apiURL + '/review/:id' , httpOptions);
  }
}
