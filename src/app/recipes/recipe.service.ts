import { EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//if you want to inject a service into a service
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Fish & Chips', 
            'Yum!', 
            'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2017/09/chish6-630x400.jpg',
            [
                new Ingredient('Fish', 1),
                new Ingredient('Chips', 20)
            ]),
        new Recipe(
            'Stir Fry', 
            'Spicyyyy!', 
            'http://www.cbc.ca/inthekitchen/assets_c/2014/01/Stir-FriedGrnBeans23-thumb-596x350-343991.jpg',
            [
                new Ingredient('Chilli', 5),
                new Ingredient('Green Beans', 50),
                new Ingredient('Cashew Nuts', 20)
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); //so you only get a copy and really can't access 'recipes' outside.
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }


}