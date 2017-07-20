import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GatewayComponent } from "./gateway/gateway.component";
import { AutocompleteExampleComponent } from "./examples/Autocomplete/autocomplete-example.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: GatewayComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'examples/Autocomplete', component: AutocompleteExampleComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
