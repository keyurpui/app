import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeshboardComponent } from "./component/deshboard/deshboard.component";
import { LoginComponent } from "./component/login/login.component";
import { RegistrationComponent } from "./component/registration/registration.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "deshboard", component: DeshboardComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
