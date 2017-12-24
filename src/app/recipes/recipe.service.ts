import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Stars cookies', 'Stars cookies is a great sweet amenities', 'http://78.media.tumblr.com/dad89c1f795a71c2643145f3b6e0679e/tumblr_inline_mxcr4xc87k1routgz.png'),
        new Recipe('Christmas pie', 'Christmas pie is a soft baking with fresh apples', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2015/12/main/pr_8094_foroma101220742.jpg?itok=m3aYeB3p'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}
