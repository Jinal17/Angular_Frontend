import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyComponent } from './survey/survey.component';
import { StudentService } from './student.service';

import { StudentComponent } from './student/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TitleService } from './title.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SurveyComponent,
       StudentComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [StudentService,TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
