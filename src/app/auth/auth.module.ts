import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';

@NgModule({
    declarations: [
        AuthComponent,
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        FormsModule,
        AuthRoutingModule,
    ]
})
export class AuthModule {
}