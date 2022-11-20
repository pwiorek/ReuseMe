import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsSectionComponent } from './components/insctructions-section/instructions-section.component';
import { InstructionCardComponent } from './components/instruction-card/instruction-card.component';
import { InstructionDetailInfoComponent } from './components/instruction-detail-info/instruction-detail-info.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "@core/core.module";
import { MaterialModule } from "../material.module";
import { InstructionsDyiCardComponent } from './components/instructions-dyi-card/instructions-dyi-card.component';


const instriuctionsRoutes: Routes = [
  {
    path: "",
    component: InstructionsSectionComponent
  },
  {
    path: "instructions/:id",
    component: InstructionDetailInfoComponent
  }
]


@NgModule({
  declarations: [
    InstructionDetailInfoComponent,
    InstructionsSectionComponent,
    InstructionCardComponent,
    InstructionsDyiCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(instriuctionsRoutes),
    CoreModule,
    MaterialModule
  ],
  exports: [
    InstructionDetailInfoComponent,
    InstructionsSectionComponent,
    InstructionCardComponent
  ]
})
export class InstructionsModule { }
