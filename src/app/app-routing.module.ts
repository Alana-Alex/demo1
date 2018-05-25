import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EditComponent} from './edit/edit.component';
export const routes: Routes = [

// { path: '', redirectTo: '/listing', pathMatch: 'full'},  

  {
      path: '',
      component: ListingComponent,
      data: {
          title: 'Listing'
      }
  },

 { path: 'edit', component: EditComponent}

  
];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
