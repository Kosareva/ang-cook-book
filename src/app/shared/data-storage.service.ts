import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {
    }

    storeRecipes() {
        // const token = this.authService.getToken();
        // return this.httpClient.put('https://ng-recipe-book-2d0a6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token),
        // });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-2d0a6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true,
            // params: new HttpParams().set('auth', token),
        });
        return this.httpClient.request(req);
    }

    getRecipes() {
        // const token = this.authService.getToken();
        // const header = new HttpHeaders().set('Authorization', 'token sghbfg44d45cd4');
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-2d0a6.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json',
            // params: new HttpParams().set('auth', token),
            // headers: header,
        })
            .map(
                (recipes) => {
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

}
