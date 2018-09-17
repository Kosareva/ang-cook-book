import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    editMode = false;
    editedItem: Ingredient;

    @ViewChild('f') slForm: NgForm;

    constructor(
        private store: Store<fromApp.AppState>
    ) {
    }

    ngOnInit() {
        this.subscription = this.store.select('shoppingList')
            .subscribe(data => {
                if (data.editedIngredientIndex > -1) {
                    this.editedItem = data.editedIngredient;
                    this.editMode = true;
                    this.slForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount
                    });
                }
            });
    }

    onSubmit(f: NgForm) {
        const value = f.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
        } else {
            this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
        }
        this.editMode = false;
        f.reset();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();
    }

    ngOnDestroy() {
        this.store.dispatch(new ShoppingListActions.StopEdit());
        this.subscription.unsubscribe();
    }

}
