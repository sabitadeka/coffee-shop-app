import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  BeverageDetailsComponent
} from './beverage-details/beverage-details.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "beverage-details"
},
  {
    path: "beverage-details",
    component: BeverageDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
