import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CausesComponent } from './causes/causes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"causes",component:CausesComponent},
  {path:"medication",component:MedicationComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  //{path:"**",component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
