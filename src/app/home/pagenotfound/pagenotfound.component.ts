import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ro-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
  pageTitle: 'Something is worong!!!';
  constructor() { }

  ngOnInit() {
  }

}
