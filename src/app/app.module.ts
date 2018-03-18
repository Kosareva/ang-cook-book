import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        HttpClientModule,
        // SharedModule,
        CoreModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
