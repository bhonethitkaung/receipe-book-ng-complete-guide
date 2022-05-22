import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receipe } from '../receipes/receipe.model';
import { ReceipeService } from '../receipes/receipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private receipeService: ReceipeService,
    private authService: AuthService
  ) {}

  storeReceipes() {
    const receipes = this.receipeService.getReceipes();
    this.http
      .put(
        'https://receipe-book-ng-complete-guide-default-rtdb.asia-southeast1.firebasedatabase.app/receipes.json',
        receipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchReceipes() {

    return this.http
        .get<Receipe[]>(
            'https://receipe-book-ng-complete-guide-default-rtdb.asia-southeast1.firebasedatabase.app/receipes.json'
        )
        .pipe(
            map((receipes) => {
                return receipes.map((receipes) => {
                  return {
                    ...receipes,
                    ingredients: receipes.ingredients ? receipes.ingredients : [],
                  };
                });
              }),
              tap((receipes) => {
                this.receipeService.setReceipes(receipes);
              })
        );
  }
}
