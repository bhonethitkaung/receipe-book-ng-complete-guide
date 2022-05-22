import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { ReceipeService } from "./receipes/receipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers: [
        ShoppingListService,
        ReceipeService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ]
})
export class CoreModule {}