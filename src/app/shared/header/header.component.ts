import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public isCollapsed: boolean = true;

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
}
