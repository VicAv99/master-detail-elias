import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeDetailsComponent } from './employee-contact/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-contact/employee-list/employee-list.component';
import { ContactsService } from './shared/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeContactComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
