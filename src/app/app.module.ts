import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule , MatCardModule ,MatToolbarModule,MatSnackBarModule,MatProgressSpinnerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { GraphComponent } from './dashboard/dashboard/graph.component';
import { ApplianceConsumptionDetailsComponent } from './appliance-consumption/appliance-consumption-details.component';
import { UserConsumptionDetailsComponent } from './user-consumption/user-consumption-details/user-consumption-details.component';
import { TemplateMailComponent } from './template-mail/template-mail/template-mail.component';
import { MatTableModule } from '@angular/material/table';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphComponent,
    ApplianceConsumptionDetailsComponent,
    UserConsumptionDetailsComponent,
    TemplateMailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path:'login', component: LoginComponent},
      {path:'appliance-level-consumption-details', component: ApplianceConsumptionDetailsComponent},
      {path:'user-consumption-details', component: UserConsumptionDetailsComponent},
      {path: 'template-mail', component: TemplateMailComponent},
      {path: '', redirectTo: 'login', pathMatch:'full'},
      {path: '**', component: LoginComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
