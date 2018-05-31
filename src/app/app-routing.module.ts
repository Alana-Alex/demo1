import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EditComponent} from './edit/edit.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';

export const routes: Routes = [
  
{path : '' , redirectTo : '/welcome', pathMatch : 'full'},
{ path : 'welcome' , component: WelcomeComponent },

{ path: 'listing',component: ListingComponent,
      data: {
          title: 'Listing'
      }
  },

{ path: 'edit', component: EditComponent},

{ path: 'login' , component: LoginComponent},
  
{ path: 'register' , component: RegisterComponent}

];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
