import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ragistration-form',
  templateUrl: './ragistration-form.component.html',
  styleUrls: ['./ragistration-form.component.scss']
})
export class RagistrationFormComponent implements OnInit {
  ragistrationForm = new FormGroup({})

  @Output() FormData = new EventEmitter<string>();
  constructor(private fb: FormBuilder) { 
    this.ragistrationForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  submitData(){
    this.FormData.emit(this.ragistrationForm.value);
  }

  resetForm(){
    this.ragistrationForm.reset();
  }
}
