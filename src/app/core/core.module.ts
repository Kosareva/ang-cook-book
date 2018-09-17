import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {LoggingInterceptor} from '../shared/logging.interceptor';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true,
        },
    ]
})
export class CoreModule {
}