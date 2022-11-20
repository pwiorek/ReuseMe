import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material';
import { Comment } from '@core/models/comment.model';

@Component({
  selector: 'app-instruction-detail-info',
  templateUrl: './instruction-detail-info.component.html',
  styleUrls: ['./instruction-detail-info.component.scss']
})
export class InstructionDetailInfoComponent implements OnInit {

  tags: any[] = ["first", "second", "third"];

  utilizedMaterials: any[] = ["first material", "second metarial"];

  instructionSteps: any[] = ["first step", "second step"];

  instructionComments: Comment[] = [ 
    { author: "autor1", content: "pierwszy komentarz blablalblalvsldalsdlasldalslllllllllllllllllllllllllllllllllllllllllllllllllllll"},
    { author: "author2", content: "drugi komentarz"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
