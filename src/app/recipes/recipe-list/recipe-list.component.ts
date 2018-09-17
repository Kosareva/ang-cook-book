import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Observable} from 'rxjs/internal/Observable';
import {Store} from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipeState: Observable<fromRecipe.State>;
    recipes: Recipe[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRecipe.FeatureState>
    ) {
    }

    ngOnInit() {
        this.recipeState = this.store.select('recipes');
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

}
