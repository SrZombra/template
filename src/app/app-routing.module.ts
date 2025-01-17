import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AfterLoginService } from './token/after-login.service';
import { BerforeLoginService } from './token/before-login.service';
import { RequerimentsComponent } from './pages/requeriments/requeriments.component';
import { RequerimentsFormComponent } from './pages/requeriments-form/requeriments-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BerforeLoginService] },
  { path: 'requeriments', component: RequerimentsComponent, canActivate: [AfterLoginService] },
  { path: 'requeriment-form', component: RequerimentsFormComponent, canActivate: [AfterLoginService] },
  { path: '', component: HomeComponent, canActivate: [AfterLoginService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
