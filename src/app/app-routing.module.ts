import { SlideComponent } from './site/slide/slide.component';
import { DeveloperComponent } from './site/developer/developer.component';
import { StepComponent } from './site/step/step.component';
import { EquipComponent } from './site/equip/equip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SlideComponent},
  {path: 'equip', component: EquipComponent },
  {path: 'step', component: StepComponent },
  {path: 'dev', component: DeveloperComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
