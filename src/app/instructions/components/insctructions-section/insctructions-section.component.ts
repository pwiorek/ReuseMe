import { Component, OnInit } from '@angular/core';
import { Instruction } from '../../models/instruction.interface';

@Component({
  selector: 'app-insctructions-section',
  templateUrl: './insctructions-section.component.html',
  styleUrls: ['./insctructions-section.component.scss']
})
export class InsctructionsSectionComponent implements OnInit {

  instructions: Instruction[] = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
