import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() itemPicture: string;
  @Input() itemTitle: string;
  @Input() itemDescription: string;
  @Input() itemClient: string;
  @Input() itemClass: string;
  @Input() itemService: string;
  @Input() itemGithub: string;
}
