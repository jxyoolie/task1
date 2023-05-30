import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Validators } from '@angular/forms';
import { ValidatorService } from './Validator/validator.service';
import { validator } from './Validator/Validator';
import { Array } from './Class/array';
//import { CalcService } from './calc/calc.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  
  Inputxn!: number;
  result: number = 0;

  ngOnInit() {}

}
