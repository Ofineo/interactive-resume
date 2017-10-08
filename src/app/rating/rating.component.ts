import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  rating: string;
  @Input() circleRating: string;
  @Input() circleColor: string;

  ngOnChanges(): void {
    this.rating = 'c100 small ' + this.circleColor + ' p' + this.circleRating;
  }
}
