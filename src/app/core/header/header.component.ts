import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    // @Output() featureSelected = new EventEmitter<string>();
    //
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    constructor(private dsService: DataStorageService,
                private recipeService: RecipeService,
                public authService: AuthService) {
    }

    onSaveData() {
        this.dsService.storeRecipes()
            .subscribe(
                (response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dsService.getRecipes();
    }

    onLogout() {
        this.authService.logOut();
    }

}
