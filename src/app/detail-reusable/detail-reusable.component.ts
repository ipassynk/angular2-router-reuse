import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-detail-reusable',
  template: `<p>detail reusable for {{id$| async}} param </p>`
})
export class DetailReusableComponent implements OnInit {
  id$: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id$ = this.route.params.pluck('id');
  }
}
