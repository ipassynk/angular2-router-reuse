import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-stale',
  template: '<p>detail stale for {{id}} param</p>'
})
export class DetailStaleComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
