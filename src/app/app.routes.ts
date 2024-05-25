import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    // { path: 'home', component: HomeComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withDebugTracing())]
}