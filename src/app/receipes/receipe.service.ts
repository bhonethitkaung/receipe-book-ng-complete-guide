import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Receipe } from "./receipe.model";

@Injectable()
export class ReceipeService {

    receipesChanged = new Subject<Receipe[]>();

    private receipes: Receipe[] = [];

    // private receipes: Receipe[] = [
    //     new Receipe(
    //         'Tasty Schnitzel', 
    //         'A super-tasty Schnitzel - just awesome!', 
    //         'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-1-1.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //     ),
    //     new Receipe(
    //         'Big Fat Burger', 
    //         'What else you need to say?', 
    //         'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meat', 1)
    //         ]
    //     )
    // ];


    constructor(private shoppingListService: ShoppingListService) {}

    setReceipes(receipes: Receipe[]) {
        this.receipes = receipes;
        this.receipesChanged.next(this.receipes.slice());
    }

    getReceipes() {
        return this.receipes.slice();
    }

    getReceipe(id: number) {
        return this.receipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addReceipe(receipe: Receipe) {
        this.receipes.push(receipe);
        this.receipesChanged.next(this.receipes.slice());
    }

    updateReceipe(index: number, newReceipe: Receipe) {
        this.receipes[index] = newReceipe;
        this.receipesChanged.next(this.receipes.slice());
    }

    deleteReceipe(index: number) {
        this.receipes.splice(index, 1);
        this.receipesChanged.next(this.receipes.slice());
    }
}