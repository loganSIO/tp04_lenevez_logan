import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../form/user';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [],
  templateUrl: './data-form.component.html',

})


export class DataFormComponent implements OnInit {
  model = new User();

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.model = history.state;
  }
}
