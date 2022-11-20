import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions-dyi-card',
  templateUrl: './instructions-dyi-card.component.html',
  styleUrls: ['./instructions-dyi-card.component.scss']
})
export class InstructionsDyiCardComponent implements OnInit {
  @Input() imageSrc: string
  @Input() title: string
  @Input() content: string

  constructor() { }

  ngOnInit(): void {
  }

}
