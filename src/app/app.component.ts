import {Component, OnInit ,ViewChild } from '@angular/core';
import { RagistrationFormComponent } from './ragistration-form/ragistration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prectice';
  @ViewChild(RagistrationFormComponent, { static: false }) RagistrationFormC: RagistrationFormComponent;
  constructor() {}
  getFormData(event:any){
    console.log("Submitted Data",event);
  }

  ngOnInit() {}

  resetForm(){
    console.log("Data");
    this.RagistrationFormC.resetForm();
  } 
}
