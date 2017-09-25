import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', animate('0.5s')),
      transition('0 => 1', animate('0.3s'))
    ])
  ],
})
export class DefaultComponent implements OnInit, OnDestroy {
  @Input() isVisible: boolean = true;
  // tslint:disable-next-line:max-line-length
  timer: any;
  sub: any;
  // tslint:disable-next-line:max-line-length
  quotations = [
    'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. -Mark Twain',
    'Do the best you can until you know better. Then, when you know better, do better.',
    'If someone tells you, "You can’t" they really mean, "I can’t." – Sean Stephenson',
    'The best way to gain self-confidence is to do what you are afraid to do. -Unknown',
    'If we’re growing, we’re always going to be out of our comfort zone. – John C Maxwell'
  ];
  quotation: string;
  i: number;

  constructor() { }

  ngOnInit() {
    this.timer = Observable.timer(2000, 5000);
    this.sub = this.timer.subscribe(t => {
      this.qoutesRotation();
    });
    this.i = Math.floor((Math.random() * 5));
    this.quotation = this.quotations[this.i];
  };

  ngOnDestroy() {
    console.log('Destroy timer');
    // unsubscribe here
    this.sub.unsubscribe();
  };

  qoutesRotation() {

    this.isVisible = this.isVisible ? false : true;
    this.i = Math.floor((Math.random() * 5));
    this.quotation = this.quotations[this.i];
    setTimeout(() => {
      this.isVisible = this.isVisible ? false : true;
    }, 500)
  };
}
