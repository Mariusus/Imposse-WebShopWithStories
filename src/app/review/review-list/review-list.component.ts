import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Review} from '../../shared/models/review';
import {ReviewService} from '../../shared/services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {



  reviews: Review[];

  reviewForm = new FormGroup({
    userReviewId: new FormControl(''),
    productReviewId: new FormControl(''),
    comment: new FormControl(''),
    id: new FormControl(''),
    rating: new FormControl('')
  });

  constructor(private reviewsservice: ReviewService) { }
  ngOnInit() {
    this.reviewsservice.getReviews().subscribe  (listReviews => {this.reviews = listReviews; });

  }
  refresh() {
    this.reviewsservice.getReviews().subscribe(listOfStories => {this.reviews = listOfStories; } );
  }
}
