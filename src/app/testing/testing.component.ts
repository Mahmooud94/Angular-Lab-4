import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  // template: '<h1>{{greet}}</h1>',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  greet = 'hello there';
  color = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

}
