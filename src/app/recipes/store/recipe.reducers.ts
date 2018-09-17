import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State
}

export interface State {
    recipes: Recipe[]
}

const initialState: State = {
    recipes: [
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
    ]
};

export function recipeReducer(state: State = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case  RecipeActions.UPDATE_RECIPE:
            const newRecipes = state.recipes.map((recipe, index) => {
                if (index === action.payload.index) return {
                    ...recipe,
                    ...action.payload.recipe
                };
                return recipe;
            });
            return {
                ...state,
                recipes: newRecipes
            };
        case RecipeActions.DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((recipe, index) => index !== action.payload)
            };
        default:
            return state;
    }
}