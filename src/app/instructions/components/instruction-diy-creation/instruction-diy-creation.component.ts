import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { FiltersApiService } from "@core/services/filters.api.service";
import { MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { InstructionsApiService } from "@core/services/instructions-api.service";
import { Instruction } from "@core/models/instruction.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-instruction-diy-creation',
  templateUrl: './instruction-diy-creation.component.html',
  styleUrls: ['./instruction-diy-creation.component.scss']
})
export class InstructionDiyCreationComponent implements OnInit {
  public form: FormGroup;
  public tags$ = this.filtersApi.getTags('');
  public ingredients: string[] = [];
  public materials: string[] = [];
  public contentSteps: string[] = [];

  constructor(
    private filtersApi: FiltersApiService,
    private fb: FormBuilder,
    private instructionApi: InstructionsApiService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: new FormControl(''),
      ingredients: new FormControl(''),
      materials: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl('')
    })
  }

  public addIngredient(ingredient: string): void {
    if (ingredient.length === 0) return;

    this.ingredients.push(ingredient);
    this.form.get('ingredients')?.patchValue('');
    this.form.get('ingredients')?.updateValueAndValidity();
  }

  public removeIngredient(ingredient: string): void {
    this.ingredients = this.ingredients.filter(value => value != ingredient);
  }

  public addMaterial(material: string): void {
    if (material.length === 0) return;

    this.materials.push(material);
    this.form.get('materials')?.patchValue('');
    this.form.get('materials')?.updateValueAndValidity();
  }

  public removeMaterial(material: string): void {
    this.materials = this.materials.filter(value => value != material);
  }

  public addInstructionStep(step: string): void {
    if (step.length === 0) return;

    this.contentSteps.push(step);
    this.form.get('content')?.patchValue('');
    this.form.get('content')?.updateValueAndValidity();
  }

  public submitInstruction(): void {
    const instruction: Instruction = {
      title: this.form.get('title')?.value,
      creator: 1,
      content: '',
      images: [],
      id: 69,
      tags: this.ingredients,
      additionalMaterials: this.materials,
      steps: this.contentSteps,
      category: 'DIY'
    }
    this.instructionApi.postInstruction(instruction).pipe(
      catchError(_ => {
        this._snackBar.open('Something went wrong!', '', {
          duration: 2
        });
        throw Error;
      } )
    ).subscribe(_ => {
      this.openSnackBar();
      this.router.navigateByUrl('')
    });
  }

  openSnackBar() {
    this._snackBar.open('Instruction has been created successfully!', '', {
      duration: 3000
    });
  }
}
