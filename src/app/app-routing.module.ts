import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { SurveyComponent } from './survey/survey.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
 
  { path: 'getSurvey', component: StudentComponent },

{
  path:'surveyForm',
  component: SurveyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

