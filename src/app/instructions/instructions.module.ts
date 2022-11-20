import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsSectionComponent } from './components/insctructions-section/instructions-section.component';
import { InstructionCardComponent } from './components/instruction-card/instruction-card.component';
import { InstructionDetailInfoComponent } from './components/instruction-detail-info/instruction-detail-info.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "@core/core.module";
import { MaterialModule } from "../material.module";
import { InstructionDiyCreationComponent } from './components/instruction-diy-creation/instruction-diy-creation.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InstructionsDyiCardComponent } from './components/instructions-dyi-card/instructions-dyi-card.component';


const instriuctionsRoutes: Routes = [
  {
    path: "",
    component: InstructionsSectionComponent
  },
  {
    path: "instructions/:id",
    component: InstructionDetailInfoComponent
  },
  {
    path: 'instruction/create',
    component: InstructionDiyCreationComponent
  }
]


@NgModule({
  declarations: [
    InstructionDetailInfoComponent,
    InstructionsSectionComponent,
    InstructionCardComponent,
    InstructionDiyCreationComponent,
    InstructionsDyiCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(instriuctionsRoutes),
    CoreModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    InstructionDetailInfoComponent,
    InstructionsSectionComponent,
    InstructionCardComponent
  ]
})
export class InstructionsModule { }
