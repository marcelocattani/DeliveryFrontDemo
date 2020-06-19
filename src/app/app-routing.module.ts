import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MenuComponent } from './components/products/menu/menu.component';
import { ManagerscreenComponent } from './components/manager/managerscreen/managerscreen.component';
import { IsAuthGuard } from './guards/is-auth.guard';

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "manager", component: ManagerscreenComponent, canActivate: [IsAuthGuard] },
  { path: "menu", component: MenuComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
