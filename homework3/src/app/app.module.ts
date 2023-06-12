import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DirectoryComponent } from './directory/directory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from './employee-data.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ContactComponent,
    DirectoryComponent,
    NavbarComponent,
  ],
  providers: [EmployeeDataService],
})
export class AppModule {}
