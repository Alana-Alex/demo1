import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HttpModule } from '@angular/http';
import { ListingService} from './listing.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EditComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpModule
  
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
