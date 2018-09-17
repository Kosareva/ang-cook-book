import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpRequest} from '@angular/common/http';
import * as RecipeActions from '../store/recipe.actions';
import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .pipe(
            ofType(RecipeActions.FETCH_RECIPES),
            switchMap((action: RecipeActions.FetchRecipes) => {
                return this.httpClient.get<Recipe[]>('https://ng-recipe-book-2d0a6.firebaseio.com/recipes.json', {
                    observe: 'body',
                    responseType: 'json',
                });
            }),
            map(
                (recipes) => {
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes
                    };
                }
            )
        );

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .pipe(
            ofType(RecipeActions.STORE_RECIPES),
            withLatestFrom(this.store.select('recipes')),
            switchMap(([action, state]) => {
                const req = new HttpRequest('PUT', 'https://ng-recipe-book-2d0a6.firebaseio.com/recipes.json', state.recipes, {
                    reportProgress: true,
                });
                return this.httpClient.request(req);
            })
        );

    constructor(
        private httpClient: HttpClient,
        private actions$: Actions,
        private store: Store<fromRecipe.FeatureState>
    ) {
    }
}