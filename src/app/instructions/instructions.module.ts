import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsctructionsSectionComponent } from './components/insctructions-section/insctructions-section.component';
import { InstructionCardComponent } from './components/instruction-card/instruction-card.component';
import { InstructionDetailInfoComponent } from './components/instruction-detail-info/instruction-detail-info.component';
import { RouterModule, Routes } from '@angular/router';


const instriuctionsRoutes: Routes = [
  {
    path: "",
    component: InsctructionsSectionComponent
  },
  {
    path: "instructions/:id",
    component: InstructionDetailInfoComponent
  }
]


@NgModule({
  declarations: [
    InstructionDetailInfoComponent,
    InsctructionsSectionComponent,
    InstructionCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(instriuctionsRoutes)
  ],
  exports: [
    InstructionDetailInfoComponent,
    InsctructionsSectionComponent,
    InstructionCardComponent
  ]
})
export class InstructionsModule { }
