import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';

const routes: Routes = [
   {path:'', component:DashboardComponent},
  { path: 'signup', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'reset', component: ForgetpasswordComponent },
  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: 'getallnotes', component: GetAllnotesComponent },
    // { path: 'displaynote', component: DisplaynoteComponent },
    { path: 'notes', component: CreatenoteComponent },
    { path: 'trash', component: TrashnotesComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }