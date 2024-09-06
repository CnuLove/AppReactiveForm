import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      address: [],
      items: this.fb.array([this.createFormGroup()]),
      skills: this.fb.array([this.createFormArray()])
    })
  }

  get skills(): FormArray {
    return this.form.get("skills") as FormArray;
  }
  get items(): FormArray {
    return this.form.get("items") as FormArray;
  }
  createFormArray(): FormControl {
    return this.fb.control([])
  }
  createFormGroup(): FormGroup {
    debugger
    return this.fb.group({
      item: [],
      itemname: []
    })
  }

  addItem() {
    this.items.push(this.createFormGroup());
  }
  addskills(){
    this.skills.push(this.createFormArray());
  }
}
