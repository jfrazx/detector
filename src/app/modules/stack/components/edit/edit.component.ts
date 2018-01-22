import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Stack } from '../../../../models';
import { StackService } from '../../services';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-stack-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class StackEditComponent implements OnInit {
  stack: Stack;

  constructor(
    private stackService: StackService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap(params =>
      this.stackService.show(params.get('id'))
    )
    .subscribe(
      stack => this.stack = stack,
      console.log
    );
  }

}
