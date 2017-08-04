import { LoginComponent } from "./login/login.component";
import{ RegisterComponent }from "./register/register.component";
import {MainComponent}from "./main/main.component";

export const AppRoutes: any = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "main", component: MainComponent }
];
 
export const AppComponents: any = [
    LoginComponent ,
    RegisterComponent,
    MainComponent
];