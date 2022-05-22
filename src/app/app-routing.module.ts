import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoutes : Routes = [
    {path: '', redirectTo: '/receipes', pathMatch: 'full'}, // only redirect if full path is correct
    {path: 'receipes', loadChildren: () => import('./receipes/receipes.module').then(m => m.ReceipesModule)}, // for lazy loading
    {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}


];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // for preloading lazy loaded code so that it will be available when we need them
    ],
    exports: [
        RouterModule
    ]
}) 
export class AppRoutingModule {

}