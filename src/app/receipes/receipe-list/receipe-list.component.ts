import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  receipes: Receipe[];

  constructor(
    private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.receipeService.receipesChanged.subscribe(
      (receipes: Receipe[]) => {
        this.receipes = receipes;
      }
    );
    this.receipes = this.receipeService.getReceipes();
  }

  onNewReceipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
