import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Stars cookies',
            'Stars cookies is a great sweet amenities',
            'http://78.media.tumblr.com/dad89c1f795a71c2643145f3b6e0679e/tumblr_inline_mxcr4xc87k1routgz.png',
            [
                new Ingredient('Dough', 100),
                new Ingredient('Vanilla', 5),
                new Ingredient('Stars', 15)
            ]),
        new Recipe('Christmas pie',
            'Christmas pie is a soft baking with fresh apples',
            'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2015/12/main/pr_8094_foroma101220742.jpg?itok=m3aYeB3p',
            [
                new Ingredient('Dough', 300),
                new Ingredient('Apples', 4),
                new Ingredient('Sour cream', 200)
            ]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}
