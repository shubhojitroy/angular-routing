import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ro-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome';
  constructor() { }

  ngOnInit() {
  }

}
