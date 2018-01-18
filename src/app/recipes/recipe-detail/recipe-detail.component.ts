import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {DropdownDirective} from '../../shared/dropdown.directive';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        console.log('recipe', this.recipe);
    }

    onAddToShoppingList() {
        // this.shoppingListService.ingredientsAddedToShoppingList.emit(this.recipe.ingredients);
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}
