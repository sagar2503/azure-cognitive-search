import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <table class="table table-bordered table-striped">
      
    </table>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
