import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']

})

export class StarComponent {
    starWidth: number;
    rating = 4;

}