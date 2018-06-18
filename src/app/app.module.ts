import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HttpModule } from '@angular/http';
import { ListingService} from './listing.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EditComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpModule,
     FormsModule
  
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
