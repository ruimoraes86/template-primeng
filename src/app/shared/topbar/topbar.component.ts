import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('topbarMenu') topbarMenu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
}
